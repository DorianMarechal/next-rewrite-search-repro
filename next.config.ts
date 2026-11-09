import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A plain rewrite: the public URL differs from the folder name.
  rewrites: async () => [{ source: "/public", destination: "/internal" }],
};

export default nextConfig;
