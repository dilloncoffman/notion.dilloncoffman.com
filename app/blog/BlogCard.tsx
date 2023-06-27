import Link from "next/link"
import Image from "next/image"
import _mediaMap from "../../public/notion-media/media-map.json"
import { mediaMapInterface } from "notion-on-next/types/types"
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
    <Link href={`/blog/${page.slug}`} key={page.id}>
      <article>
        <div style={{ overflow: "hidden", width: "50%", height: "300px" }}>
          {mediaMap[databaseId]?.[page.id]?.cover && (
            <Image
              alt={page.title || "Cover Image for " + page.id}
              src={mediaMap[databaseId]?.[page.id]?.cover}
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </div>
        <h2>{page.title}</h2>
        <time dateTime={date?.toISOString()}>
          {getFormattedDateString(date)}
        </time>
        <p>{estimatedTimeToRead}</p>
      </article>
    </Link>
  )
}
