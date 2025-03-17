import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import ConditionalLayout from "./Layout/conditionalLayout";
import ReduxProvider from "@/redux/Provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "suneditor/dist/css/suneditor.min.css";

// Meta Data
const lexend = Lexend({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Title & Descriptions
  title: "Your Vision Coupled with Creative Excellence",
  description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
  // Canonical
  alternates: { canonical: 'https://infinity-animation.vercel.app/' },
  // OG Metas
  openGraph: {
    title: "Your Vision Coupled with Creative Excellence",
    description: "Explore our animation studio's diverse services, where creativity meets precision, bringing your ideas to life in captivating motion.",
    url: 'https://infinity-animation.vercel.app/',
    siteName: 'Infinity Animation',
    locale: 'en_US',
    type: 'website',
  },
}
export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lexend.className}>
        <ReduxProvider>
          <ConditionalLayout>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_google_app_id ?? ""}>
              {children}
            </GoogleOAuthProvider>
          </ConditionalLayout>
        </ReduxProvider>
      </body>
    </html>
  );
} 
