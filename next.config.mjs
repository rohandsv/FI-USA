/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/contact',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://crm.zoho.com https://crm.zohopublic.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
