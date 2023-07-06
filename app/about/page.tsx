import Image from "next/image"
import Link from "../components/Link"

export const metadata = {
  title: "About | Dillon Coffman",
}

export default function About() {
  return (
    <main className="mx-auto max-w-4xl space-y-2 p-4 sm:space-y-3 sm:px-6 md:py-4">
      <h1 className="text-2xl font-bold md:text-4xl">About 👋</h1>
      <h2 className="text-xl font-bold md:text-3xl">
        Completely Authentic Third Person Bio
      </h2>
      <p className="text-base sm:text-xl">
        Dillon Coffman is a developer from Pittsburgh, PA. He recently graduated
        in May of 2020 with a Bachelor of Science in Computer Science from
        Temple University in Philadelphia, PA. He&apos;s currently a Senior Web
        Developer at Wolfe LLC. In his free time he plays{" "}
        <Link href="/music">music</Link> on all kinds of instruments and tries
        to read a lot of books on philosophy and life. Here he is trying to pet
        a Philly bookstore cat unsuccessfully:
      </p>
      <Image
        src="/images/dillon-bookstore-cat.png"
        width={800}
        height={800}
        alt="Dillon unsuccessfully trying to pet a Philly bookstore cat"
        className="mx-auto rounded-xl"
      />
      <h2 className="text-xl font-bold md:text-3xl">Hey there!</h2>
      <p className="text-base sm:text-xl">
        Thanks for checking out my site. This site is a conglomeration of all
        things me. Here you&apos;ll find everything from my thoughts on tech and
        philosophy to little songs and covers I&apos;ve made. Ever since I was
        little I&apos;ve been playing guitar (yes, the Fisher-Price piece of
        plastic with buttons and sounds totally counts!) and find myself most at
        ease when listening to or playing music. You could say music is my.. ...
        jam. Sorry about that.
      </p>
      <p className="text-base sm:text-xl">
        Outside of music, I find myself hacking on side projects. I&apos;ve
        recently set out on a mission to help those in my local community build
        an online presence. So far I&apos;ve helped a local nonprofit by
        building them an{" "}
        <Link href="https://walk-our-watershed.netlify.app/" noopener>
          event website
        </Link>{" "}
        to raise money and get our community active during COVID-19. Thanks to
        University, a couple rad internships, a cool job and an insatiable
        curiosity, I&apos;ve had the opportunity to work with all kinds of
        technology. From writing C programs to developing Android applications
        to building web apps in the cloud, you can find it all on{" "}
        <Link href="https://github.com/dilloncoffman" noopener>
          my GitHub
        </Link>
        . Currently I&apos;m interested in building web apps with{" "}
        <Link href="https://nextjs.org/" noopener>
          Next
        </Link>{" "}
        and serverless technologies like{" "}
        <Link href="https://docs.amplify.aws/" noopener>
          AWS Amplify
        </Link>
        .
      </p>
      <p className="text-base sm:text-xl">
        Want to say 👋? Want to talk tech, music or philosophy? Feel free to
        reach out any time by{" "}
        <a href="mailto:dillcoff@gmail.com">emailing me</a>.
      </p>
    </main>
  )
}
