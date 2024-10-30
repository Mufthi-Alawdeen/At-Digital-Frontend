// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Poppins: ["Poppins-SemiBold"],
        InterBold: ["Inter-Bold"],
        Lato: ["Lato"],
      },
      colors: {
        primary: "#6B3CC9", // Custom color for primary
        secondary: "#F28D35", // Custom color for secondary
      },
      backgroundImage: {
        gradient: "linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)",
      },
    },
  },
  plugins: [],
};
