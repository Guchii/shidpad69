module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Righteous", "cursive"],
      },
      colors: {
        "rose-madder": "#df2935",
        "yellow-orange": "#ffb140",
        "raisin-black": "#181d27",
      },
    },
  },
  plugins: [],
};
