/** @type {import('tailwindcss').Config} */

module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
};