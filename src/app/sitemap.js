export default async function sitemap() {
  const baseUrl = "https://www.fidigital.co";
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/book-a-fit-call", priority: 0.9, changeFrequency: "yearly" },
    { path: "/packages", priority: 0.8, changeFrequency: "monthly" },
    { path: "/trust-security", priority: 0.6, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/zoho-implementation", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/zoho-implementation/zoho-crm-quickstart", priority: 0.7, changeFrequency: "monthly" },
    { path: "/solutions/zoho-implementation/managed-services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/solutions/product-engineering", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/ai-digital-workers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions/data-engineering", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries/professional-services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries/manufacturing-distribution", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries/logistics-field-service", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries/financial-services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
    { path: "/case-studies/cpa-zoho-ai-crm", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/law-product-ai-engagement", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/manufacturing-zoho-product-quote", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/distribution-data-ai-ap", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/logistics-3pl-portal-deflection", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/hvac-zoho-ai-dispatcher", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/ria-zoho-data-reports", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/lender-ai-underwriter-copilot", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
