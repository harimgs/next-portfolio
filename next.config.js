/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // darkmode: false,
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com"
    ]
  }
}

module.exports = nextConfig
