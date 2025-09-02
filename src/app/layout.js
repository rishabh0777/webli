import "boxicons/css/boxicons.min.css";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Webli - We Build, You Launch 🚀",
  description:
    "Webli is a web development agency building modern, animated, and fast websites for startups and small businesses. We create professional, fast, and conversion-focused websites for businesses of all sizes.",
  icons: {
    icon: "/favicon.ico", // main root favicon
    shortcut: "/logo/favicons/favicon-32x32.png",
    apple: "/logo/favicons/apple-touch-icon.png",
  },
  metadataBase: new URL("https://webli.vercel.app"),
  alternates: {
    canonical: "https://webli.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google site verification */}
        <meta
          name="google-site-verification"
          content="JtjC0Spp1E4E7qkWm6b3CI6fpyxqbM4CT1FXrAwLR28"
        />

        {/* ✅ JSON-LD Schema for Organization + Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Webli",
              url: "https://webli.vercel.app",
              logo: "https://webli.vercel.app/logo/favicons/favicon-512x512.png",
            }),
          }}
        />

        {/* ✅ JSON-LD Schema for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Webli Studio",
              url: "https://webli.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://webli.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <main>{children}</main>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "0.9rem",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
