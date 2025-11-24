module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#37f7ff",
        glowPink: "#ff00ff",
      },
    },
  },
  plugins: [],
};
