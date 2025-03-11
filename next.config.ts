import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "@/src/shared/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
