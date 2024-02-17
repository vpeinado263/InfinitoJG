/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
};

const { parsed } = require('dotenv').config();

module.exports = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};


module.exports = nextConfig;
