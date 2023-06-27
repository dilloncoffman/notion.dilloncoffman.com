//
import { notFound } from "next/navigation"
import { mediaMapInterface, NotionPageBody } from "notion-on-next"
import React from "react"
import _mediaMap from "../../../public/notion-media/media-map.json"
import { BlogPageObjectResponse } from "../../../types/notion-on-next.types"
import { cachedGetBlocks, cachedGetParsedPages } from "../../get"
import Image from "next/image"
import { NotionOnNextPageObjectResponse } from "notion-on-next/types/types"
import getFormattedDateString from "@/app/lib/utils/getFormattedDateString"

const mediaMap: mediaMapInterface = _mediaMap
interface PageProps {
  slug: string
}
const databaseId = "4e0d9a44-bfe6-496a-bdd3-f90028c52026"

export default async function BlogPage({
  params,
}: {
  params: PageProps
}): Promise<React.ReactNode> {
  const { slug } = params
  // This may seem like a roundabout way to retrieve the page, but getParsedPages is a per-request cached function. You can read more about it here https://beta.nextjs.org/docs/data-fetching/caching#preload-pattern-with-cache
  // The reason why we have to get all of the pages and then filter is because the Notion API can only search for pages via page id and not slug.
  const pages = await cachedGetParsedPages<BlogPageObjectResponse>(databaseId)
  const page = pages.find(
    (page: NotionOnNextPageObjectResponse) => page.slug === slug
  )
  if (!page) {
    notFound()
  }
  const blocks = await cachedGetBlocks(page.id)
  const { properties } = page
  const date = properties.Date.date?.start
    ? new Date(properties.Date.date?.start)
    : null
  const estimatedTimeToRead =
    properties["Estimated Reading Time"].rich_text[0].plain_text

  return (
    <article className="prose lg:prose-xl">
      {mediaMap[databaseId][page.id].cover && (
        <Image
          src={mediaMap[databaseId][page.id].cover}
          alt={page.title || "Projects Post"}
          width={800}
          height={800}
        />
      )}
      <h1 style={{ fontSize: "42px", fontWeight: 700, textAlign: "center" }}>
        {page.title}
      </h1>
      <time dateTime={date?.toISOString()}>{getFormattedDateString(date)}</time>
      <p>{estimatedTimeToRead}</p>
      <hr />
      <NotionPageBody
        blocks={blocks}
        pageId={page.id}
        databaseId={databaseId}
        mediaMap={mediaMap}
      />
    </article>
  )
}

export async function generateStaticParams() {
  // This generates routes using the slugs created from getParsedPages
  const pages = await cachedGetParsedPages<BlogPageObjectResponse>(databaseId)
  return pages.map((page: NotionOnNextPageObjectResponse) => ({
    slug: page.slug,
  }))
}
