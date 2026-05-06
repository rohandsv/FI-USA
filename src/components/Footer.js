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
        {/* Column 1 — Brand */}
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.footerLogo}>
            <Image
              src={theme === 'dark' ? "/logos/logo-on-dark1.png" : "/logos/logo-on-light1.png"}
              alt="FI Digital Logo"
              width={180}
              height={45}
              className={styles.logoImage}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <div className={styles.partnerLogoWrapper}>
            <Image
              src="/logos/zoho-premium-partner.png"
              alt="Zoho Premium Partner"
              width={160}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className={styles.tagline}>
            Enterprise-grade transformation for US SMBs. Zoho Premium Partner.
          </p>
        </div>
        {/* Column 1 — Solutions */}
        <div className={styles.linkColumn}>
          <h4>Solutions</h4>
          <Link href="/solutions/zoho-implementation/">Zoho Implementation</Link>
          <Link href="/solutions/product-engineering/">Product Engineering</Link>
          <Link href="/solutions/ai-digital-workers/">AI & Digital Workers</Link>
          <Link href="/solutions/data-engineering/">Data Engineering</Link>
          <Link href="/packages/">Packages</Link>
        </div>

        {/* Column 2 — Industries */}
        <div className={styles.linkColumn}>
          <h4>Industries</h4>
          <Link href="/industries/professional-services/">Professional Services</Link>
          <Link href="/industries/manufacturing-distribution/">Manufacturing & Distribution</Link>
          <Link href="/industries/logistics-field-service/">Logistics & Field Service</Link>
          <Link href="/industries/financial-services/">Financial Services</Link>
        </div>

        {/* Column 3 — Company */}
        <div className={styles.linkColumn}>
          <h4>Company</h4>
          <Link href="/about/">About</Link>
          <Link href="/trust-security/">Trust & Security</Link>
        </div>

        {/* Column 4 — Resources */}
        <div className={styles.linkColumn}>
          <h4>Resources</h4>
          <Link href="/case-studies/">Case Studies</Link>
          <Link href="/insights/">Insights</Link>
        </div>

        {/* Column 5 — Contact */}
        <div className={styles.linkColumn}>
          <h4>Contact</h4>
          <a href="mailto:hello@fidigital.com" className={styles.footerContactLink}>hello@fidigital.com</a>
          <a href="tel:+18665550199" className={styles.footerContactLink}>+1-866-555-0199</a>
          <p className={styles.address}>123 Innovation Drive, Suite 400, Atlanta, GA 30301</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomFlex}`}>
          <div className={styles.bottomLeft}>
            <span>FI Digital LLC © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
