import { redirect } from "next/navigation"
import { YouTubeVideoItem } from "../lib/interfaces/YouTubeVideoItem"
import { YouTubeCard } from "./YouTubeCard"
import YouTubePagination from "./YouTubePagination"

export const metadata = {
  title: "Music | Dillon Coffman",
}

async function getYouTubeVideos(pageToken: string | string[]) {
  const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=48${
    pageToken ? `&pageToken=${pageToken}` : ""
  }&playlistId=${process.env.YOUTUBE_CHANNEL_PLAYLIST_ID}&key=${
    process.env.YOUTUBE_API_KEY
  }`

  const res = await fetch(playlistItemsUrl, { cache: "force-cache" })
  const data = res.json()

  return data
}

// This part is important! See https://github.com/vercel/next.js/discussions/47227
export const dynamic = "force-dynamic"

export default async function Music({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const pageToken = searchParams?.pageToken ?? ""
  const youtubeData = await getYouTubeVideos(pageToken)
  const {
    items: youtubeVideos,
    pageInfo,
    prevPageToken,
    nextPageToken,
  } = youtubeData || {}

  // https://rb.gy/oc650 - there's an issue with YouTube's API and pageToken sometimes returning empty items, redirect back to /music if this is the case
  if (pageToken && youtubeVideos?.length <= 0) {
    redirect("/music")
  }

  return (
    <div className="mx-auto max-w-4xl px-2">
      <h1 className="my-2 text-2xl font-bold md:my-4 md:text-4xl">
        Music 🎧🎸
      </h1>
      {youtubeVideos?.length > 0 && (
        <>
          <p className="mb-2 text-xl">{pageInfo?.totalResults} videos</p>
          <YouTubePagination
            prevPageToken={prevPageToken}
            nextPageToken={nextPageToken}
          />
          <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:mb-4 md:grid-cols-3">
            {youtubeVideos.map((video: YouTubeVideoItem) => {
              return <YouTubeCard key={video.id} video={video} />
            })}
          </div>
          <YouTubePagination
            prevPageToken={prevPageToken}
            nextPageToken={nextPageToken}
          />
        </>
      )}
    </div>
  )
}
