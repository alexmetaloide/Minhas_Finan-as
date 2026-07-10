import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryPath = "/Minhas_Finan-as";

const nextConfig: NextConfig = {
  // The normal build continues to run on the existing hosted app. GitHub
  // Pages uses a static export and the repository path for client assets.
  ...(isGitHubPages
    ? {
        output: "export",
        assetPrefix: `${repositoryPath}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
