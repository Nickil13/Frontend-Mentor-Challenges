/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js, jsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "600px",
            lg: "800px",
            xlg: "1200px",
            "2xl": "1440px",
        },
        colors: {
            primary: {
                "soft-red": "hsl(10, 79%, 65%)",
                cyan: "hsl(186, 34%, 60%)",
                "soft-red-light": "hsla(10, 79%, 65%, 70%)",
                "cyan-light": "hsla(186, 34%, 60%, 40%)",
            },
            neutral: {
                "dark-brown": "hsl(25, 47%, 15%)",
                "medium-brown": "hsl(28, 10%, 53%)",
                cream: "hsl(27, 66%, 92%)",
                "pale-orange": "hsl(33, 100%, 98%)",
                white: "#FFFFFF",
            },
        },
        fontSize: {
            xs: "0.75rem",
            sm: "1rem",
            base: "1.125rem",
            lg: "1.5rem",
            xlg: "1.875rem",
            "2xl": "2.0625rem",
            "3xl": "3.125rem",
        },
        extend: {},
    },
    plugins: [],
};
