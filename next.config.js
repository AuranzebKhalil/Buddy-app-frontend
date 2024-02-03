// next.config.js

module.exports = {
  reactStrictMode: true,
  output: 'out', // Change 'out' to your desired export directory
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
  images: {
    domains: ['cdn.jsdelivr.net', 'firebasestorage.googleapis.com'],
  },
};
