import { BlogPageObjectResponse } from "../../types/notion-on-next.types"
import { cachedGetParsedPages } from "../get"
import { BlogCard } from "./BlogCard"
import "@dilloncoffman/notion-on-next/styles.css"
const databaseId = "4e0d9a44-bfe6-496a-bdd3-f90028c52026"

export const metadata = {
  title: "Blog | Dillon Coffman",
}

export default async function Blog() {
  const pages = await cachedGetParsedPages<BlogPageObjectResponse>(
    databaseId,
    undefined, // Add filters here: https://developers.notion.com/reference/post-database-query-filter
    [{ timestamp: "last_edited_time", direction: "descending" }] // Add sorts here: https://developers.notion.com/reference/post-database-query-sort
  )

  // Sort blogs newest to oldest
  pages.sort((blogA, blogB) => {
    const blogADate = blogA.properties.Date.date?.start
      ? new Date(blogA.properties.Date.date?.start)
      : null
    const blogBDate = blogB.properties.Date.date?.start
      ? new Date(blogB.properties.Date.date?.start)
      : null
    return Number(blogBDate) - Number(blogADate)
  })

  return (
    <main className="mx-auto max-w-4xl px-4">
      <h1 className="my-2 text-2xl font-bold md:my-4 md:text-4xl">
        Posts, check it:
      </h1>
      <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 md:grid-cols-3">
        {pages.map((page) => (
          <BlogCard page={page} databaseId={databaseId} key={page.id} />
        ))}
      </div>
    </main>
  )
}
