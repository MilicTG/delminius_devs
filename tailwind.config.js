module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary_red: {
          100: "#FF5B5B",
          200: "#ff3333",
        },
        primary_blue: {
          100: "#00B0CC",
          200: "#0097af",
        },
        primary_gray: {
          100: "#DADADA",
        },
      },
    },
  },
  plugins: [],
};
