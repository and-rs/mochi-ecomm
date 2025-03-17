import { Footer } from "@/components/navigation/footer"
import { Header } from "@/components/navigation/header"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { JetBrains_Mono, Work_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const fontSans = Work_Sans({
  weight: "variable",
  variable: "--font-sans",
  subsets: ["latin-ext"],
})

const fontMono = JetBrains_Mono({
  weight: "variable",
  variable: "--font-mono",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "Mochi",
  description: "Tienda Boutique",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="no-scrollbar">
      <body className={cn(fontSans.variable, fontMono.variable, "antialiased")}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <div className="flex flex-col justify-center pt-20">
            <main className="self-center pt-2 w-full max-w-screen-xl min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
