// ✅ SERVER COMPONENT: metadata allowed
export const metadata = {
  title: "Webli - We Build, You Launch 🚀",
  description: "Webli is a web development agency building modern, animated, and fast websites for startups and small businesses.",
  keywords: ["Webli", "Webli Studio", "Web Development Agency", "Animated Websites", "Startup Websites", "Freelance Web Development"],
  openGraph: {
    title: "Webli - We Build, You Launch 🚀",
    description: "Get your startup online with stunning, animated, fast websites. Built by Webli.",
    url: "https://webli.vercel.app",
    siteName: "Webli",
    images: [
      {
        url: "https://webli.vercel.app/logo/TransparentWhite.png",
        width: 800,
        height: 800,
        alt: "Webli White Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webli - We Build, You Launch 🚀",
    description: "We build websites that convert. Beautiful, fast, and scalable.",
    images: ["https://webli.vercel.app/logo/TransparentWhite.png"],
  },
  metadataBase: new URL("https://webli.vercel.app"),
  alternates: {
    canonical: "https://webli.vercel.app",
  },
};

import HomeClient from "./HomeClient";

export default function Page() {
  return <HomeClient />;
}
