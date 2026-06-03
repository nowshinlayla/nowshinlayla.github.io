"use client";

import styles from "./Awards.module.css";

export default function Awards() {
  const certifications = [
    {
      id: 1,
      icon: "🎓",
      title: "Bachelor of Pharmacy (B.Pharm)",
      period: "—",
      organization: "University of Dhaka",
      color: "teal",
      certificateLink: "",
    },
    {
      id: 2,
      icon: "📋",
      title: "Registered Pharmacist",
      period: "—",
      organization: "Directorate General of Drug Administration",
      color: "blue",
      certificateLink: "",
    },
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Certifications & Licenses</h1>

        <div className={styles.awardsContainer}>
          {certifications.map((item) => (
            <div
              key={item.id}
              className={`${styles.awardItem} ${styles[item.color]} ${
                item.certificateLink ? styles.clickable : ""
              }`}
              onClick={() =>
                item.certificateLink &&
                window.open(item.certificateLink, "_blank")
              }
              style={{
                cursor: item.certificateLink ? "pointer" : "default",
              }}
            >
              <span className={styles.awardIcon}>{item.icon}</span>
              <div className={styles.awardContent}>
                <h3 className={styles.awardTitle}>{item.title}</h3>
                <div className={styles.awardMeta}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.organization}>
                    {item.organization}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
