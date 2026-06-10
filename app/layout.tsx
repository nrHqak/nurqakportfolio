import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sadibek Nurmukhambet — Portfolio",
  description:
    "Fullstack developer specializing in Python. Hackathon winner, robotics award recipient, and builder.",
  openGraph: {
    title: "Sadibek Nurmukhambet — Portfolio",
    description:
      "Fullstack developer specializing in Python. Hackathon winner, robotics award recipient, and builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <LanguageSwitcher />
            <SiteNavbar />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
