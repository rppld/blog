/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mona)"],
        display: [
          "var(--font-mona)",
          {
            fontVariationSettings: '"wdth" 125',
          },
        ],
      },
    },
  },
};
