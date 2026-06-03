"use client";

import { useMemo, useState } from "react";
import styles from "./News.module.css";

const MAX_VISIBLE = 5;

type NewsItem = {
  id: number;
  date: string;
  dateTime: string;
  text: string;
  link?: string;
  linkLabel?: string;
  external?: boolean;
  highlight?: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "Jun 2026",
    dateTime: "2026-06",
    text: "Launched my personal website to share my work as a pharmacist.",
    highlight: "personal website",
    link: "#about",
    linkLabel: "About me",
  },
];

type NewsYearGroup = {
  year: string;
  items: NewsItem[];
};

function getYear(dateTime: string): string {
  return dateTime.slice(0, 4);
}

function groupByYear(items: NewsItem[]): NewsYearGroup[] {
  const groups: NewsYearGroup[] = [];

  for (const item of items) {
    const year = getYear(item.dateTime);
    const lastGroup = groups[groups.length - 1];

    if (lastGroup?.year === year) {
      lastGroup.items.push(item);
    } else {
      groups.push({ year, items: [item] });
    }
  }

  return groups;
}

function renderText(text: string, highlight?: string) {
  if (!highlight || !text.includes(highlight)) {
    return text;
  }

  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <strong className={styles.emphasis}>{highlight}</strong>
      {after}
    </>
  );
}

export default function News() {
  const [expanded, setExpanded] = useState(false);
  const hasOverflow = newsItems.length > MAX_VISIBLE;
  const hiddenCount = newsItems.length - MAX_VISIBLE;
  const visibleItems = expanded ? newsItems : newsItems.slice(0, MAX_VISIBLE);
  const yearGroups = useMemo(() => groupByYear(visibleItems), [visibleItems]);

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>News & Updates</h2>

        <div className={styles.card}>
          <div className={styles.list}>
            {yearGroups.map((group) => (
              <div key={group.year} className={styles.yearGroup}>
                <div className={styles.yearLabel}>{group.year}</div>
                <ul className={styles.yearItems}>
                  {group.items.map((item) => (
                    <li key={item.id} className={styles.item}>
                      <div className={styles.content}>
                        <p className={styles.text}>
                          {renderText(item.text, item.highlight)}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            className={styles.link}
                            {...(item.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {item.linkLabel ?? "Learn more"}
                          </a>
                        )}
                      </div>
                      <time
                        className={styles.itemDate}
                        dateTime={item.dateTime}
                      >
                        {item.date}
                      </time>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {hasOverflow && (
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded
                ? "Show less"
                : `Show ${hiddenCount} older update${hiddenCount === 1 ? "" : "s"}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
