import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Experience</h1>

        <div className={styles.card}>
          <div className={styles.companyGroup}>
            <div className={styles.companyHeader}>
              <div className={styles.companyIcon}>
                <i
                  className="fas fa-clinic-medical"
                  style={{ fontSize: "2rem", color: "var(--theme-primary)" }}
                  aria-hidden
                />
              </div>
              <div className={styles.companyInfo}>
                <h2 className={styles.companyName}>
                  {/* Update with pharmacy / hospital name */}
                  Community Pharmacy
                </h2>
                <span className={styles.companyDuration}>
                  {/* Update dates */}
                  Present
                </span>
              </div>
            </div>

            <div className={styles.rolesContainer}>
              <div className={styles.roleItem}>
                <div className={styles.roleConnector}>
                  <div className={styles.roleDot} />
                </div>
                <div className={styles.roleContent}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.roleTitle}>Pharmacist</h3>
                    <span className={styles.roleDuration}>Present</span>
                  </div>
                  <p className={styles.roleDescription}>
                    Dispense medications, counsel patients on proper use and
                    side effects, review prescriptions for safety, and maintain
                    accurate pharmacy records. Collaborate with healthcare
                    providers to support optimal treatment outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.roleDescription} style={{ marginTop: "1.5rem", fontStyle: "italic", color: "var(--theme-text-muted)" }}>
            Tip: Replace the placeholder above with your real workplaces, dates,
            and responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
}
