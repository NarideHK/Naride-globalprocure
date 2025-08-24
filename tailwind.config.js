/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ 必須加上 src
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // 藍色
          light: "#60a5fa",
          dark: "#1e40af",
        },
      },
    },
  },
  plugins: [],
}
