import HomeClient from "./HomeClient";

export const metadata = {
  title: "Webli - We Build, You Launch 🚀",
  description:
    "Webli is a web development agency building modern, animated, and fast websites for startups and small businesses. We create professional, fast, and conversion-focused websites for businesses of all sizes.",
  keywords: [
    "webli",
    "Webli",
    "Webli Studio",
    "Webli Web Development Agency",
    "Webli Creative Studio",
    "web development agency",
    "website development company",
    "best website agency for small business",
    "custom website design",
    "animated websites",
    "startup website development",
    "freelance web developer",
    "hire web developer",
    "website maker for business",
    "web design agency",
    "modern business website",
    "affordable website design",
    "responsive website design",
    "professional website builder",
    "MERN stack development",
    "ecommerce website agency",
    "portfolio website development",
    "business website agency",
    "web development services for startups",
    "creative web studio",
    "custom website solutions",
    "SEO optimized websites",
    "small business website design",
    "fast website development",
    "landing page development",
    "react website development",
    "node js website development",
    "express js developer",
    "mongodb website solutions",
    "animated landing pages",
    "modern UI websites",
    "website development for cafes",
    "restaurant website development",
    "real estate website builder",
    "healthcare website design",
    "education website agency",
    "IT services website design",
    "agency website design",
    "business growth websites",
    "affordable business websites",
    "website redesign services",
    "creative website design agency",
    "startup web solutions",
    "company website maker",
    "fast website agency",
    "top web design agency",
    "digital presence for small business",
    "web development for startups",
    "custom website solutions",
    "website maintenance and support",
  ],
  openGraph: {
    title: "Webli - We Build, You Launch 🚀",
    description:
      "Get your startup online with stunning, animated, fast websites. Built by Webli.",
    url: "https://webli.vercel.app",
    siteName: "Webli Studio",
    images: [
      {
        url: "https://webli.vercel.app/logo/primaryLogoWhite.svg",
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
    description:
      "We build websites that convert. Beautiful, fast, and scalable.",
    images: [
      "https://webli.vercel.app/logo/primaryLogoWhite.svg",
      "https://webli.vercel.app/logo/primaryLogoBlack.svg",
      "https://webli.vercel.app/logo/logo.svg",
    ],
  },
  alternates: {
    canonical: "https://webli.vercel.app",
  },
};



export default function Page() {
  return (

    <>
      <HomeClient />
    </>
  );
}
