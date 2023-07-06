import Image from "next/image"
import Link from "./components/Link"

export default function Home() {
  return (
    <main className="mx-auto min-h-[80vh] max-w-4xl space-y-2 px-2 py-4 sm:space-y-3 sm:px-6 md:px-4 md:py-4">
      <Image
        src="/images/dillon-memeoji.png"
        width={200}
        height={200}
        alt="Dillon unsuccessfully trying to pet a Philly bookstore cat"
        className="mx-auto rounded-full"
      />
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Dillon Coffman
        </h1>
        <div>
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
          I&apos;m currently planning an application using{" "}
          <Link href="https://openai.com/dall-e-2" noopener>
            DALL·E 2
          </Link>{" "}
          &amp;{" "}
          <Link href="https://nextjs.org/" noopener>
            Next.js
          </Link>
          . This summer I&apos;m looking forward to going to another Steelers
          game &amp; taking a trip to{" "}
          <Link href="https://www.hockinghills.com/" noopener>
            Hocking Hills State Park
          </Link>
          . Stay tuned for new <Link href="/blog">blog posts</Link> &amp; some{" "}
          <Link href="/music">guitar covers</Link> sprinkled in. In the
          meantime, you can read more <Link href="/about">about me</Link> 🙂
        </p>
      </section>
    </main>
  )
}
