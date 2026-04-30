"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "";
  
  const isActive = (basePath) => {
    if (!pathname) return false;
    const normalizedPathname = pathname.endsWith('/') ? pathname : pathname + '/';
    const normalizedBasePath = basePath.endsWith('/') ? basePath : basePath + '/';
    return normalizedPathname.startsWith(normalizedBasePath);
  };

  const isExact = (path) => {
    if (!pathname) return false;
    const normalizedPathname = pathname.endsWith('/') ? pathname : pathname + '/';
    const normalizedPath = path.endsWith('/') ? path : path + '/';
    return normalizedPathname === normalizedPath;
  };
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add shadow/glass effect when scrolled
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
        setIsMobileMenuOpen(false); // Close mobile menu on scroll
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isHidden ? styles.hidden : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={`${styles.logo} ${theme === 'light' ? styles.logoLightModeBg : ''}`}>
          <Image src="/logos/fi-header-logo.png" alt="FI Digital" width={220} height={55} style={{ objectFit: 'contain' }} priority />
        </Link>

        <button 
          className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ""}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          
          <div className={styles.navGroup}>
            <Link href="/solutions/" className={`${styles.navLabel} ${isActive('/solutions') ? styles.active : ''}`}>
              Solutions <span className={styles.chevron}>▾</span>
            </Link>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li className={styles.hasSub}>
                  <Link href="/solutions/zoho-implementation/" className={isActive('/solutions/zoho-implementation') ? styles.activeDropdown : ''}>Zoho Implementation Stack <span className={styles.chevronRight}>▸</span></Link>
                  <ul className={styles.subList}>
                    <li><Link href="/solutions/zoho-implementation/zoho-crm-quickstart/" className={isExact('/solutions/zoho-implementation/zoho-crm-quickstart') ? styles.activeDropdown : ''}>Zoho CRM QuickStart</Link></li>
                    <li><Link href="/solutions/zoho-implementation/managed-services/" className={isExact('/solutions/zoho-implementation/managed-services') ? styles.activeDropdown : ''}>Zoho Managed Services</Link></li>
                  </ul>
                </li>
                <li><Link href="/solutions/product-engineering/" className={isActive('/solutions/product-engineering') ? styles.activeDropdown : ''}>Product Engineering</Link></li>
                <li><Link href="/solutions/ai-digital-workers/" className={isActive('/solutions/ai-digital-workers') ? styles.activeDropdown : ''}>AI & Digital Workers</Link></li>
                <li><Link href="/solutions/data-engineering/" className={isActive('/solutions/data-engineering') ? styles.activeDropdown : ''}>Data Engineering</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={`${styles.navLabel} ${isActive('/industries') ? styles.active : ''}`}>
              Industries <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li><Link href="/industries/professional-services/" className={isActive('/industries/professional-services') ? styles.activeDropdown : ''}>Professional Services</Link></li>
                <li><Link href="/industries/manufacturing-distribution/" className={isActive('/industries/manufacturing-distribution') ? styles.activeDropdown : ''}>Manufacturing & Distribution</Link></li>
                <li><Link href="/industries/logistics-field-service/" className={isActive('/industries/logistics-field-service') ? styles.activeDropdown : ''}>Logistics & Field Service</Link></li>
                <li><Link href="/industries/financial-services/" className={isActive('/industries/financial-services') ? styles.activeDropdown : ''}>Financial Services</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={`${styles.navLabel} ${isActive('/about') || isActive('/case-studies') || isActive('/trust-security') ? styles.active : ''}`}>
              Company <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.megaMenuContainer}>
              <ul className={styles.navList}>
                <li><Link href="/about/" className={isActive('/about') ? styles.activeDropdown : ''}>Why FI Digital</Link></li>
                <li><Link href="/case-studies/" className={isActive('/case-studies') ? styles.activeDropdown : ''}>Case Studies Hub</Link></li>
                <li><Link href="/trust-security/" className={isActive('/trust-security') ? styles.activeDropdown : ''}>Trust & Security</Link></li>
              </ul>
            </div>
          </div>

          <Link href="/packages/" className={`${styles.navLink} ${isActive('/packages') ? styles.active : ''}`}>Packages</Link>

          <div className={styles.navActions}>
            <button 
              className={styles.themeToggle} 
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <Link href="/book-a-fit-call/" className="btn btn-primary">
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
