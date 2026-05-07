/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/zoho-form.html',
        destination: '/zoho-form',
      },
    ];
  },
};

export default nextConfig;
