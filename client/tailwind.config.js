/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272343",
        secondary: "#F0F2F3",
        "primary-text": "#FFFFFF",
        "secondary-text": "#272343",
        "third-text": "#7D7B8E",
        "button-primary": "#029FAE",
      },
    },
  },
  plugins: [],
};
