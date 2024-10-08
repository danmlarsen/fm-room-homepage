/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            md: '600px',
            lg: '1300px',
        },
        extend: {
            colors: {
                gray: {
                    100: '#FAFAFA',
                    600: 'hsl(0, 0%, 63%)',
                    800: 'hsl(0, 0%, 27%)',
                },
            },
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                hero: 'minmax(500px, 840px) 600px',
                footer: '420px 1fr 440px',
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
            },
            animation: {
                'fade-out': 'fadeOut 3s linear',
            },
        },
    },
    plugins: [],
};
