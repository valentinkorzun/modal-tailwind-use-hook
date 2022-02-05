module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: ({ theme }) => theme("width"),
    },
  },
  plugins: [],
};
