/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#E95A08",
                secondary: "#000000",
                text: "rgba(0, 0, 0, 0.5)",
            },
            fontFamily: {
                noto: ["Noto Serif", "serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};