import { Header } from "@/components/navigation/header";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Golos_Text({
  weight: "variable",
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const fontMono = JetBrains_Mono({
  weight: "variable",
  variable: "--font-mono",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Mochi",
  description: "Tienda Boutique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
