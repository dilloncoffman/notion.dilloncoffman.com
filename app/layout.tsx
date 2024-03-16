import "./globals.css"
import { Quattrocento_Sans } from "next/font/google"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer" 
import { Analytics } from "@vercel/analytics/react"

const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata = {
  title: "Dillon Coffman",
  openGraph: {
    images: ["/images/dillon-memeoji.png"],
  },
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
      <body className={quattrocento.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
