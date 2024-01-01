import Image from "next/image"
import Link from "./components/Link"
import { SiSpotify } from "react-icons/si"

async function getSpotifyNowPlaying() {
  let data
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/spotify`, {
      next: { revalidate: 600 },
    })
    data = await res.json()
  } catch (e) {
    console.error(e)
  }

  return data
}

export default async function Home() {
  const spotifyNowPlayingData = (await getSpotifyNowPlaying()) || {}

  return (
    <main className="mx-auto min-h-[80vh] max-w-4xl space-y-2 px-2 py-4 sm:space-y-3 sm:px-6 md:px-4 md:py-4">
      <Image
        src="/images/dillon-memeoji.png"
        width={200}
        height={200}
        alt="Dillon unsuccessfully trying to pet a Philly bookstore cat"
        className="mx-auto rounded-full"
        priority
      />
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Dillon Coffman
        </h1>
        <div className="my-2">
          <Link
            href="https://github.com/dilloncoffman"
            className="font-bold md:text-xl"
            noopener
          >
            Developer
          </Link>
          ,{" "}
          <Link href="/music" className="font-bold md:text-xl">
            Musician
          </Link>{" "}
          &{" "}
          <Link
            href="https://www.instagram.com/dillonsleatherco/"
            className="font-bold md:text-xl"
            noopener
          >
            Leatherworker
          </Link>
        </div>
      </section>
      <section className="rounded-xl bg-white p-4 shadow-lg">
        <h2 className="text-2xl font-bold italic md:text-4xl">Now</h2>
        <aside className="my-2">
          <p className="italic">
            Shout out to{" "}
            <Link href="https://sive.rs/now" noopener>
              Derek Sivers
            </Link>{" "}
            for inspiring this section 🙌
          </p>
        </aside>
        <p className="text-base sm:text-xl">
          I&apos;m currently working on my personal health and honing my
          photography skills. This year I&apos;m looking forward to going to
          Holland, Michigan &amp; taking a vacation to the Outer Banks with some
          family. Stay tuned for new <Link href="/blog">blog posts</Link> &amp;
          some <Link href="/music">guitar covers</Link> sprinkled in. In the
          meantime, you can read more <Link href="/about">about me</Link> 🙂
        </p>
      </section>
      {spotifyNowPlayingData?.title && (
        <section className="rounded-xl bg-white p-4 shadow-lg">
          <h2 className="mb-2 text-2xl font-bold md:text-4xl">
            Listening to..
          </h2>
          <a
            target="_blank"
            rel="noopener noreferer"
            href={spotifyNowPlayingData?.songUrl}
            className="relative my-2 inline-flex w-full items-center gap-2 rounded-xl border-4 border-dillon-blue p-2 transition-shadow hover:shadow-lg sm:gap-4 sm:p-5"
          >
            <div className="w-16 sm:w-32">
              <Image
                className="max-h-[173px] shadow-sm"
                src={spotifyNowPlayingData?.albumImageUrl}
                alt={spotifyNowPlayingData?.album}
                width={300}
                height={300}
              />
            </div>
            <div className="flex-1">
              <p className="component text-lg font-bold sm:text-3xl">
                {spotifyNowPlayingData?.title}
              </p>
              <p className="font-dark text-xs sm:text-xl">
                {spotifyNowPlayingData?.artist}
              </p>
            </div>
            <div className="absolute bottom-1.5 right-1.5">
              <SiSpotify color={"#1ED760"} className="h-4 w-4 sm:h-8 sm:w-8" />
            </div>
          </a>
          <aside className="my-2">
            <p className="italic">
              A good reason to learn about Next.js 13+'s route handlers and use
              Spotify's API 😎
            </p>
          </aside>
        </section>
      )}
    </main>
  )
}
