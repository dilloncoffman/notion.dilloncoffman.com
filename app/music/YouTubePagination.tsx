"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const INITIAL_PAGE_TOKEN = "EAEaBlBUOkNEQQ"

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

  const onPaginationClick = (pageToken: string) => {
    // @ts-ignore
    const current = new URLSearchParams(searchParams)

    // Clear pageToken, navigating back to initial page
    if (pageToken === INITIAL_PAGE_TOKEN) {
      router.push(`${pathname}`)
      return
    }

    if (pageToken) {
      current.set("pageToken", pageToken)
      const search = current.toString()
      const query = search ? `?${search}` : ""
      router.push(`${pathname}${query}`)
    }
  }

  return (
    <div className="inline-flex w-full justify-center">
      {prevPageToken && (
        <button
          className="mb-2 mr-2 w-full max-w-[150px] rounded-lg bg-dillon-slate bg-gradient-to-r px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-dillon-blue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={() => onPaginationClick(prevPageToken)}
        >
          Previous
        </button>
      )}{" "}
      {nextPageToken && (
        <button
          className="mb-2 w-full max-w-[150px] rounded-lg bg-dillon-slate bg-gradient-to-r px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-dillon-blue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={() => onPaginationClick(nextPageToken)}
        >
          Next
        </button>
      )}
    </div>
  )
}
