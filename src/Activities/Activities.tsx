"use client";

import styles from "./Activities.module.css";

export default function Activities() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Activities</h1>

        <p className={styles.subtitle}>
          Community outreach, health camps, and professional moments.
        </p>

        <section className={styles.card}>
          <article className={styles.contentColumn}>
            <p className={styles.activityDescription}>
              Add photos and stories here—health awareness programs, pharmacy
              workshops, volunteer work, or conferences you have attended.
              Replace this section in{" "}
              <code>src/Activities/Activities.tsx</code> when you are ready.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
