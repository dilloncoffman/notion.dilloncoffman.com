import "./globals.css"
import { Quattrocento_Sans } from "next/font/google"

const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata = {
  title: "Dillon Coffman",
  description:
    "Dillon Coffman is a developer who loves to push the limit and work with cutting-edge technology. A few years out of university, Dillon is excited to work alongside others to build apps that make a difference. In his free time he enjoys playing guitar and reading about everything from how to bootstrap a startup business to ancient philosophy. ~ Totally Real 3rd Person",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quattrocento.className}>{children}</body>
    </html>
  )
}
