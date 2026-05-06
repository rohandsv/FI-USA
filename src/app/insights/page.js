import styles from "./insights.module.css";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className={styles.insightsContainer}>
      <header className={styles.insightsHero}>
        <div className="container">
          <span className="badge">Insights</span>
          <h1>Thought Leadership & Industry Trends</h1>
          <p>Strategic perspectives on mid-market technology transformation, AI governance, and Zoho ecosystem optimization.</p>
        </div>
      </header>

      <section className={styles.insightsGrid}>
        <div className="container">
          <div className={styles.grid}>
            {/* Placeholder for future articles */}
            <div className={styles.emptyState}>
              <h3>Coming Soon</h3>
              <p>Our team is preparing deep-dives into AI automation and data engineering frameworks. Stay tuned.</p>
              <Link href="/contact/" className="btn btn-primary">Subscribe for Updates</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
