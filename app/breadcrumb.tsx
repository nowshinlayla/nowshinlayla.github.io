"use client";

import { useEffect } from "react";
import { siteConfig } from "./metadata";

export default function Breadcrumb() {
  useEffect(() => {
    const base = siteConfig.url.replace(/\/$/, "");
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${base}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${base}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Experience",
          item: `${base}/#experience`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Certifications",
          item: `${base}/#certifications`,
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
