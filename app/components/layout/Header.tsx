"use client"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setMobileMenuOpen((prevState) => !prevState)

  return (
    <header className="bg-dillon-blue">
      <nav
        className="mx-auto flex items-center justify-between px-2 py-4 md:p-6 lg:px-8"
        aria-label="Global"
      >
        <NextLink
          href="/"
          className="bg-gradient-to-t from-[#B3DEFF] to-transparent text-xl font-bold tracking-tight text-white drop-shadow-md [text-shadow:_#729BC7_1px_4px] sm:text-3xl md:text-4xl"
        >
          dillon coffman
        </NextLink>
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 mx-2.5 mr-0 inline-flex items-center justify-center rounded-md bg-dillon-slate p-1 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden text-xl text-white sm:flex sm:gap-x-6 lg:gap-x-12">
          <NextLink
            href="/about"
            className={`font-semibold leading-6 ${
              pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </NextLink>
          <NextLink
            href="/blog"
            className={`font-semibold leading-6 ${
              pathname === "/blog" ? "underline" : ""
            }`}
          >
            Blog
          </NextLink>
          <NextLink
            href="/music"
            className={`font-semibold leading-6 ${
              pathname === "/music" ? "underline" : ""
            }`}
          >
            Music
          </NextLink>
        </div>
      </nav>
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } transition-all delay-1000 duration-300 ease-in-out sm:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-2 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NextLink
              onClick={toggleMobileMenu}
              href="/"
              className="-m-1.5 bg-gradient-to-t from-[#B3DEFF] to-transparent p-1.5 text-xl font-bold tracking-tight text-white drop-shadow-md [text-shadow:_#729BC7_1px_4px] sm:text-3xl md:text-4xl"
            >
              dillon coffman
            </NextLink>
            <button
              type="button"
              className="-m-2.5 mx-2.5 mr-0 rounded-md p-1 text-gray-700 hover:bg-dillon-slate hover:text-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root px-2">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-3 text-dillon-blue">
                <NextLink
                  onClick={toggleMobileMenu}
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  About
                </NextLink>
                <NextLink
                  onClick={toggleMobileMenu}
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Blog
                </NextLink>
                <NextLink
                  onClick={toggleMobileMenu}
                  href="/music"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Music
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
