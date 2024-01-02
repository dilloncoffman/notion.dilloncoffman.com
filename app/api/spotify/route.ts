import querystring from "querystring"
import { NextResponse } from "next/server"

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  })

  return response.json()
}

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return (
    fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        const reader = response.body?.getReader()
        return new ReadableStream({
          start(controller) {
            return pump()

            function pump(): any {
              return reader?.read().then(({ done, value }) => {
                // When no more data needs to be consumed, close the stream
                if (done) {
                  controller.close()
                  return
                }
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value)
                return pump()
              })
            }
          },
        })
      })
      // Create a new response out of the stream
      .then((stream) => new Response(stream))
      // Convert response stream to JSON
      .then((response) => response.json())
  )
}

export async function GET() {
  const response = await getNowPlaying()

  if (response?.currently_playing_type !== "track") {
    return NextResponse.json({ isPlaying: false })
  }

  const data = {
    isPlaying: response.is_playing,
    title: response.item.name,
    album: response.item.album.name,
    artist: response.item.album.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    albumImageUrl: response.item.album.images[0].url,
    songUrl: response.item.external_urls.spotify,
  }

  return NextResponse.json(data)
}
