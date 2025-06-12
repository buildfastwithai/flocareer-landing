// layout.tsx or RootLayout
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // ✅ Import Poppins
import { ThemeProvider } from "next-themes";

// ✅ Configure Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title: "Flocareer",
  description: "Hire Any Talent 10x faster, smarter at scale",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${poppins.variable} font-sans antialiased bg-white text-gray-900 dark:bg-zinc-900 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
