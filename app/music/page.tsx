import { YouTubeVideoItem } from "../lib/interfaces/YouTubeVideoItem"
import { YouTubeCard } from "./YouTubeCard"

export const metadata = {
  title: "Music | Dillon Coffman",
}

async function getYouTubeVideos() {
  let videos = []
  let data

  try {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=48&playlistId=${process.env.YOUTUBE_CHANNEL_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`
    )
    data = await res.json()

    if (!!data) {
      videos.push(...data?.items)
      while (data?.nextPageToken) {
        let nextPageToken = data?.nextPageToken
        res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=48&pageToken=${nextPageToken}&playlistId=${process.env.YOUTUBE_CHANNEL_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`
        )
        data = await res.json()
        videos.push(...data?.items)
      }
    }
  } catch (e) {
    console.error(e)
  }

  return { videos, totalResults: data?.pageInfo?.totalResults }
}

export default async function Music() {
  const { videos: youtubeVideos, totalResults } =
    (await getYouTubeVideos()) || {}

  return (
    <main className="mx-auto max-w-4xl px-4">
      <h1 className="my-2 text-2xl font-bold md:my-4 md:text-4xl">
        Music 🎧🎸
      </h1>
      {youtubeVideos?.length > 0 && (
        <>
          <p className="mb-2 text-xl">{totalResults} videos</p>
          <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-3">
            {youtubeVideos.map((video: YouTubeVideoItem) => {
              return <YouTubeCard key={video.id} video={video} />
            })}
          </div>
        </>
      )}
    </main>
  )
}
