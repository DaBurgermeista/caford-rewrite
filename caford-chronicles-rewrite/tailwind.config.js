/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If using pages directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        press: ["var(--font-press-start-2p)", "monospace"],
        vt: ["var(--font-vt323)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
