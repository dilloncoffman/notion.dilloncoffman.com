import Link from "next/link"
import Image from "next/image"
import _mediaMap from "../../public/notion-media/media-map.json"
import { mediaMapInterface } from "@dilloncoffman/notion-on-next/types/types"
import { BlogPageObjectResponse } from "../../types/notion-on-next.types"
import getFormattedDateString from "../lib/utils/getFormattedDateString"

const mediaMap: mediaMapInterface = _mediaMap

export const BlogCard = ({
  page,
  databaseId,
}: {
  page: BlogPageObjectResponse
  databaseId: string
}) => {
  const { properties } = page
  const date = properties.Date.date?.start
    ? new Date(properties.Date.date?.start)
    : null
  const estimatedTimeToRead =
    properties["Estimated Reading Time"].rich_text[0].plain_text

  return (
    <Link
      href={`/blog/${page.slug}`}
      key={page.id}
      className="transition-transform hover:scale-105"
    >
      <article className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="sm:aspect-video">
          {mediaMap[databaseId]?.[page.id]?.cover && (
            <Image
              alt={page.title || "Cover Image for " + page.id}
              src={mediaMap[databaseId]?.[page.id]?.cover}
              width={800}
              height={800}
              className="max-h-[173px] md:max-w-lg"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </div>
        <div className="p-2">
          <h2 className=" mb-2 truncate text-xl font-bold">{page.title}</h2>
          <div className="flex w-full items-start justify-between text-xs font-bold text-dillon-slate md:flex-row md:items-center">
            <p className="uppercase">{getFormattedDateString(date)}</p>
            <p className="flex-shrink-0   md:mt-0">{estimatedTimeToRead}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
