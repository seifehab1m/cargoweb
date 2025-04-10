import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost','moslemany-backend-production.up.railway.app'], // Allow localhost
    },
};

export default withNextIntl(nextConfig);