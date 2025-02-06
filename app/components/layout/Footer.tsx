import Link from "../Link"

export default function Footer() {
  return (
    <footer className="text-md mb-4 text-center sm:text-xl">
      <p>dillon coffman &copy; 2016 - {new Date().getFullYear()}</p>
      <p>
        Proudly published with{" "}
        <Link href="https://vercel.com/" noopener>
          Vercel
        </Link>
      </p>
      <p>
        Built with{" "}
        <Link href="https://nextjs.org/" noopener>
          Next
        </Link>{" "}
        &{" "}
        <Link href="https://tailwindcss.com/" noopener>
          Tailwind CSS
        </Link>
      </p>
    </footer>
  )
}
