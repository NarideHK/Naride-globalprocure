/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-red-500", "bg-blue-600", "text-white", "text-gray-800",
    "p-4", "p-6", "m-4", "rounded-xl", "shadow-lg"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
