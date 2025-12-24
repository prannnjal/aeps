import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "AEON Public School - Quality Education & Daycare (3 Months to 10 Years)",
  description:
    "AEON Public School provides world-class education and daycare for children aged 3 months to 10 years with modern infrastructure, expert teachers, and holistic development programs.",
  keywords: "school, daycare, preschool, kindergarten, education, children, STEM, sports, arts, curriculum",
  icons: {
    icon: "/abs/favicon.ico",
    shortcut: "/abs/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  )
}
