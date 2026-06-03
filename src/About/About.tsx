import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { siteConfig, getResumeHref } from "@/app/metadata";
import styles from "./About.module.css";

export default function About() {
  const resumeHref = getResumeHref();
  const resumeIsExternal = Boolean(siteConfig.resumeExternalUrl?.trim());

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.leftCol}>
              <div className={styles.profile}>
                <figure className={styles.portrait}>
                  <img
                    src="./pro-pic-nowshin.png"
                    alt="Nowshin Layla - Pharmacist"
                    className={styles.image}
                  />
                </figure>
                <div>
                  <h2 className={styles.name}>Nowshin Layla</h2>
                  <h3 className={styles.title}>Pharmacist</h3>
                  <h3 className={styles.company}>
                    <span>Patient care · Medication safety</span>
                  </h3>

                  <div className={styles.bigIconGroup}>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <i
                        className={`fas fa-envelope ${styles.bigIcon}`}
                        data-tooltip="Email me"
                      />
                    </a>

                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener"
                    >
                      <i
                        className={`fab fa-github ${styles.bigIcon}`}
                        data-tooltip="GitHub profile"
                      />
                    </a>

                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener"
                    >
                      <i
                        className={`fab fa-linkedin ${styles.bigIcon}`}
                        data-tooltip="LinkedIn profile"
                      />
                    </a>

                    <a
                      href={resumeHref}
                      {...(resumeIsExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {
                            download: siteConfig.resumePdfFileName,
                          })}
                    >
                      <i
                        className={`fas fa-file-alt ${styles.bigIcon}`}
                        data-tooltip="Resume"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.aboutText}>
                <p className={styles.p}>
                  Hi, I&apos;m Nowshin Layla, a pharmacist committed to helping
                  people use medicines safely and effectively. I focus on clear
                  patient counseling, accurate dispensing, and thoughtful
                  collaboration with physicians and healthcare teams.
                </p>
                <p className={styles.p}>
                  Whether in community or hospital settings, I aim to bridge the
                  gap between prescriptions and everyday life—answering questions,
                  checking interactions, and supporting healthier outcomes for
                  every patient I serve.
                </p>
              </div>

              <div className={styles.aboutRow}>
                <div className={styles.interest}>
                  <div className={styles.heading}>Interests</div>
                  <ul className={styles.interestList}>
                    <li>Clinical Pharmacy</li>
                    <li>Patient Counseling</li>
                    <li>Medication Safety</li>
                    <li>Community Health</li>
                    <li>Pharmaceutical Care</li>
                  </ul>
                </div>
                <div className={styles.education}>
                  <div className={styles.heading}>Education</div>
                  <div className={styles.educationList}>
                    <div className={styles.educationItem}>
                      <div className={styles.educationHeader}>
                        <i className="fas fa-graduation-cap" />
                        <div className={styles.educationInfo}>
                          <div className={styles.degree}>
                            Bachelor of Pharmacy (B.Pharm)
                          </div>
                          <div className={styles.university}>
                            {/* Update with your university */}
                            University of Dhaka
                          </div>
                          <div className={styles.year}>
                            {/* Update year */}
                            —
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
