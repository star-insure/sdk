module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.{js,ts,jsx,tsx}',
        './node_modules/@star-insure/sdk/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['MuseoSansRounded', 'Helvetica', 'arial', 'sans-serif'],
            serif: ['Gabriela', 'Georgia', 'serif'],
        },
        container: {
            center: true,
            padding: '1.25rem',
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--primary-color))',
                    100: 'rgb(var(--primary-100-color))',
                },

                secondary: {
                    DEFAULT: 'rgb(var(--secondary-color))',
                },

                tertiary: {
                    DEFAULT: 'rgb(var(--tertiary-color))',
                },

                accent: {
                    DEFAULT: 'rgb(var(--accent-color))',
                    100: 'rgb(var(--accent-100-color))',
                    300: 'rgb(var(--accent-300-color))',
                    500: 'rgb(var(--accent-500-color))',
                    700: 'rgb(var(--accent-700-color))',
                },

                light: 'rgb(var(--light-color))',
                dark: 'rgb(var(--dark-color))',
                black: 'rgb(var(--black-color))',
                white: 'rgb(var(--white-color))',

                gray: {
                    DEFAULT: 'rgb(var(--gray-color))',
                    50: 'rgb(var(--gray-50-color))',
                    100: 'rgb(var(--gray-100-color))',
                    200: 'rgb(var(--gray-200-color))',
                    300: 'rgb(var(--gray-300-color))',
                    400: 'rgb(var(--gray-400-color))',
                    500: 'rgb(var(--gray-500-color))',
                    600: 'rgb(var(--gray-600-color))',
                    700: 'rgb(var(--gray-700-color))',
                    800: 'rgb(var(--gray-800-color))',
                    900: 'rgb(var(--gray-900-color))',
                },

                red: {
                    DEFAULT: 'rgb(var(--red-color))',
                    50: 'rgb(var(--red-50-color))',
                    100: 'rgb(var(--red-100-color))',
                    200: 'rgb(var(--red-200-color))',
                    300: 'rgb(var(--red-300-color))',
                    400: 'rgb(var(--red-400-color))',
                    500: 'rgb(var(--red-500-color))',
                    600: 'rgb(var(--red-600-color))',
                },

                yellow: {
                    DEFAULT: 'rgb(var(--yellow-color))',
                    50: 'rgb(var(--yellow-50-color))',
                    100: 'rgb(var(--yellow-100-color))',
                    200: 'rgb(var(--yellow-200-color))',
                    300: 'rgb(var(--yellow-300-color))',
                    400: 'rgb(var(--yellow-400-color))',
                    500: 'rgb(var(--yellow-500-color))',
                    600: 'rgb(var(--yellow-600-color))',
                },

                danger: 'rgb(var(--danger-color))',
                warning: 'rgb(var(--warning-color))',
                info: 'rgb(var(--info-color))',
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
