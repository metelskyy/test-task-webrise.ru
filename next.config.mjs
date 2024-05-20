/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";`,
  },
};

export default nextConfig;
