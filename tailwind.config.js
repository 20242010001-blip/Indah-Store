/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPink: "#ec5f8c",
        deepPink: "#d94675",
        softPink: "#fff1f6",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
