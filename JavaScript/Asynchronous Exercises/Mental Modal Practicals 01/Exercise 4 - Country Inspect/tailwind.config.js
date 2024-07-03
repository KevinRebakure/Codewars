/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      width: {
        "500px": "500px",
        "60%": "60%",
        "40%": "40%"
      },
      height: {
        "300px": "300px",
      },
    },
  },
  plugins: [],
};
