import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "attachment.cargoweb.com",
                pathname: "/Attachments/**",
            },
            {
                protocol: "https",
                hostname: "tazamun-attachment.tazdev.dev",
                pathname: "/**",
            },
        ],
    },
};

export default withNextIntl(nextConfig);
