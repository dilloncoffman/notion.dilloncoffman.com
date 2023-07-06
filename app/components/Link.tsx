import NextLink from "next/link"
import { ReactNode } from "react"

export default function Link({
  href,
  children,
  noopener,
  className,
}: {
  href: string
  children: ReactNode
  noopener?: boolean
  className?: string
}) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <a
        className={`${className} text-dillon-link-blue no-underline hover:bg-gradient-to-t hover:from-[#B3DEFF] hover:to-transparent`}
        rel={noopener ? "noreferrer noopener" : ""}
      >
        {children}
      </a>
    </NextLink>
  )
}
