/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "public/**/main.js", "public/**/main.ts"],
  theme: {
    extend: {
      screens: {
        mobile: "0",
        desktop: "1020px",
      },
    },
  },
  plugins: [],
};
