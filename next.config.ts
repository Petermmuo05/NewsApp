import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rshmysuerqsijwntarbn.supabase.co",
        pathname: "/storage/v1/object/public/article-images/**",
      },
    ],
  },
};

export default nextConfig;
