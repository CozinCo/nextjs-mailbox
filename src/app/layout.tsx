import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme/theme-provider";
const CalSans = localFont({ src: '../assets/fonts/CalSans-SemiBold.woff2', variable: '--font-cal-sans', fallback: ["--font-inter"] });


export const metadata: Metadata = {
  title: "Send | MailBox - ENJOYS",
  description: "Send is custom mail box created by ENJOYS",
};

export default function RootLayout(props: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={CalSans.variable}>
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {props.children}
        </ThemeProvider>       
      </body>
    </html>
  );
}
