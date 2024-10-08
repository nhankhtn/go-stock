import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { ProfileProvider } from "@/context/Profile";
import { ThemeProvider } from "@/context/Theme";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Stock",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' sizes='32x32' href='/logo.png' />
      </head>
      <body className={inter.className}>
        <ProfileProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
