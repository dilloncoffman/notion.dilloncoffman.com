// 
import { BlogPageObjectResponse } from "../../types/notion-on-next.types";
import { cachedGetParsedPages } from "../get";
import { BlogCard } from "./BlogCard";
import "notion-on-next/styles.css";
const databaseId = "4e0d9a44-bfe6-496a-bdd3-f90028c52026";

export default async function BlogBlog() {
  const pages =
    await cachedGetParsedPages<BlogPageObjectResponse>(
      databaseId,
      undefined, // Add filters here: https://developers.notion.com/reference/post-database-query-filter
      [{ timestamp: "last_edited_time", direction: "descending" }] // Add sorts here: https://developers.notion.com/reference/post-database-query-sort
    );
  return (
    <div style={{ padding: "24px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "28px" }}
      >
        Blog Posts
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {pages.map((page) => (
          <BlogCard
            page={page}
            databaseId={databaseId}
            key={page.id}
          />
        ))}
      </div>
    </div>
  );
}
