"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandSection}>
          <Link href="/" className={`${styles.logo} ${theme === 'light' ? styles.logoLightModeBg : ''}`}>
            <Image src="/logos/fi-header-logo.png" alt="FI Digital" width={240} height={60} style={{ objectFit: 'contain' }} />
          </Link>
          <p className={styles.descriptor}>
            US SMB transformation partner. Zoho Premium Partner plus product engineering, AI automation, and data engineering.
          </p>
          <div className={styles.contactInfo}>
            <p><strong>HQ:</strong> 123 Innovation Drive, Atlanta, GA</p>
            <p><strong>Phone:</strong> <a href="tel:+18665550199">1-866-555-0199</a></p>
            <p><strong>Email:</strong> <a href="mailto:privacy@fidigital.com">privacy@fidigital.com</a></p>
          </div>
          <p className={styles.timezone}>
            US-based account leads in ET, global delivery 24/5.
          </p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h4>Practices</h4>
            <Link href="/solutions/zoho-implementation/">Zoho Stack</Link>
            <Link href="/solutions/product-engineering/">Product Engineering</Link>
            <Link href="/solutions/ai-digital-workers/">AI & Digital Workers</Link>
            <Link href="/solutions/data-engineering/">Data Engineering</Link>
          </div>

          <div className={styles.linkColumn}>
            <h4>Industries</h4>
            <Link href="/industries/professional-services/">Professional Services</Link>
            <Link href="/industries/manufacturing-distribution/">Manufacturing</Link>
            <Link href="/industries/logistics-field-service/">Logistics</Link>
            <Link href="/industries/financial-services/">Financial Services</Link>
          </div>

          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <Link href="/about/">Why FI Digital</Link>
            <Link href="/case-studies/">Case Studies</Link>
            <Link href="/trust-security/">Trust & Security</Link>
            <Link href="/packages/">Packages</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomFlex}`}>
          <p>&copy; {new Date().getFullYear()} FI Digital LLC. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
