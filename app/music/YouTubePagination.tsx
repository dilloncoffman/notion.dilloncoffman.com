"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function YouTubePagination({
  prevPageToken,
  nextPageToken,
}: {
  prevPageToken?: string
  nextPageToken?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  console.log({ nextPageToken, prevPageToken })

  const onPaginationClick = (pageToken: string) => {
    // @ts-ignore
    const current = new URLSearchParams(searchParams)

    if (pageToken) {
      current.set("pageToken", pageToken)
      const search = current.toString()
      const query = search ? `?${search}` : ""
      router.push(`${pathname}${query}`)
    }
  }

  return (
    <div className="inline-flex">
      {prevPageToken && (
        <button
          className="rounded-l bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => onPaginationClick(prevPageToken)}
        >
          Previous
        </button>
      )}{" "}
      {nextPageToken && (
        <button
          className="rounded-r bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => onPaginationClick(nextPageToken)}
        >
          Next
        </button>
      )}
    </div>
  )
}
