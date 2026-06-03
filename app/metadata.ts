import type { Metadata } from "next";

export const siteConfig = {
  name: "Nowshin Layla",
  /** ISO date (YYYY-MM-DD). Bump when you publish meaningful site updates. */
  lastUpdated: "2026-06-03",
  title: "Nowshin Layla - Pharmacist",
  description:
    "Personal website of Nowshin Layla, a registered pharmacist dedicated to patient care, medication safety, and community health.",
  url: "https://nowshinlayla.github.io/",
  ogImage: "https://nowshinlayla.github.io/pro-pic-nowshin.png",
  links: {
    github: "https://github.com/nowshinlayla",
    linkedin: "https://www.linkedin.com/in/nowshin-layla/",
    email: "nowshinlayla1818@gmail.com",
    facebook: "",
  },
  web3formsAccessKey: "",
  resumePdfFileName: "Nowshin_Layla_Resume.pdf",
  resumeExternalUrl: "",
  keywords: [
    "Nowshin Layla",
    "Pharmacist",
    "Pharmacy",
    "Clinical Pharmacy",
    "Patient Care",
    "Medication Safety",
    "Community Pharmacy",
    "Bangladesh",
    "Healthcare",
  ],
};

export function getResumeHref(): string {
  const external = siteConfig.resumeExternalUrl?.trim();
  if (external) return external;
  const base = siteConfig.url.endsWith("/")
    ? siteConfig.url
    : `${siteConfig.url}/`;
  return new URL(siteConfig.resumePdfFileName, base).href;
}

export function formatSiteLastUpdated(isoDate: string): string {
  const parts = isoDate.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return isoDate;
  const [y, m, d] = parts;
  const date = new Date(y, m - 1, d);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Pharmacist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
};
