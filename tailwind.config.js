const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                grey: colors.blueGray
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};