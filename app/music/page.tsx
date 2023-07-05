import { YouTubeVideo } from "../lib/interfaces/YouTubeVideo"
import { YouTubeCard } from "./YouTubeCard"

export const metadata = {
  title: "Music | Dillon Coffman",
}

async function getYouTubeVideos() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${process.env.YOUTUBE_CHANNEL_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`
  )
  return res.json()
}

export default async function Music() {
  const youtubeData = await getYouTubeVideos()
  const { items: youtubeVideos, pageInfo } = youtubeData || {}

  return (
    <div className="mx-auto max-w-4xl px-2">
      <h1 className="my-2 text-2xl font-bold md:my-4 md:text-4xl">
        Music 🎧🎸
      </h1>
      <p className="text-xl">
        {pageInfo.resultsPerPage} of {pageInfo.totalResults} videos
      </p>
      <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:mb-8 md:grid-cols-3">
        {youtubeVideos?.length > 0 &&
          youtubeVideos.map((video: YouTubeVideo) => {
            return <YouTubeCard video={video} />
          })}
      </div>
    </div>
  )
}
