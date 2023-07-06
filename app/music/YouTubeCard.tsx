import Link from "next/link"
import Image from "next/image"
import getFormattedDateString from "../lib/utils/getFormattedDateString"
import { YouTubeVideoItem } from "../lib/interfaces/YouTubeVideoItem"

export const YouTubeCard = ({
  key,
  video,
}: {
  key: string
  video: YouTubeVideoItem
}) => {
  const { snippet } = video || {}

  if (!snippet) return null
  const date = snippet.publishedAt ? new Date(snippet.publishedAt) : null

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
      rel="noopener"
      key={key}
      target="_blank"
      className="transition-transform hover:scale-105"
    >
      <article className="mx-auto h-full max-h-[328px] max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="bg-[#5c9ce0]">
          <Image
            alt={snippet.title || `Cover Image for ${snippet.title}`}
            src={
              snippet.thumbnails?.standard?.url ??
              "/images/fallback-yt-cover.png"
            }
            width={800}
            height={800}
            className="max-h-[173px] opacity-40 md:max-w-lg"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="p-2">
          <h2 className="mb-2 text-lg font-bold md:line-clamp-2">
            {snippet.title}
          </h2>
          <div className="flex w-full items-start justify-between text-xs font-bold text-dillon-slate md:flex-row md:items-center">
            <p className="uppercase">{getFormattedDateString(date)}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
