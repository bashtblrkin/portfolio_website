/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import theme from "tailwindcss/defaultTheme";

module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './sections/**/*.{js,ts,jsx,tsx,mdx}',
        './hoc/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'grey': '#EACDC2',
                'darkBlue': '#151030',
                'black': '#1A1423',
                'aqua': '#377DB7',
                'violet': '#915EFF',
                'pink': '#C3296A',
                'green': '#00C7A3',
                'yellow': '#C1CE2C'
            }
        },
        boxShadow: {
            card: "0px 35px 120px -15px #211e35",
        },
        screens: {
            xs: '450px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        backgroundImage: {
            'main-pattern': 'url(/images/main_bg.png)'
        }
    },
    plugins: [
        plugin(({addUtilities, addComponents}) => {
            addUtilities({
                '.paddingX': {
                    paddingRight: '1.25rem',
                    paddingLeft: '1.25rem',
                    [`@media (min-width: ${theme.screens.md})`]: {
                        paddingRight: '4rem',
                        paddingLeft: '4rem',
                    },
                },
                '.black-gradient': {
                    background: 'linear-gradient(to right, #434343, #000000)'
                },
                '.violet-gradient': {
                    background: 'linear-gradient(180deg, #915EFF 0%, rgba(217, 217, 217, 0.00) 100%)'
                },
                '.green-pink-gradient': {
                    background: 'linear-gradient(#00C7A3, #915EFF)'
                },
                '.hash-span': {
                    marginTop: '-100px',
                    paddingBottom: '100px',
                    display: 'block'
                }
            })
            addComponents({
                '.header': {
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    [`@media (min-width: ${theme.screens.lg})`]: {
                        fontSize: '80px',
                        lineHeight: '98px'
                    },
                    [`@media (min-width: ${theme.screens.sm})`]: {
                        fontSize: '60px'
                    },
                    [`@media (min-width: ${theme.screens.xs})`]: {
                        fontSize: '50px'
                    }
                },
                '.subHeader': {
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    [`@media (min-width: ${theme.screens.lg})`]: {
                        fontSize: '30px',
                        lineHeight: '40px'
                    },
                    [`@media (min-width: ${theme.screens.sm})`]: {
                        fontSize: '24px'
                    },
                    [`@media (min-width: ${theme.screens.xs})`]: {
                        fontSize: '20px'
                    }
                },
                '.sectionHeader': {
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    [`@media (min-width: ${theme.screens.md})`]: {
                        fontSize: '60px'
                    },
                    [`@media (min-width: ${theme.screens.sm})`]: {
                        fontSize: '50px'
                    },
                    [`@media (min-width: ${theme.screens.xs})`]: {
                        fontSize: '40px'
                    },
                },
                '.sectionSubHeader': {
                    color: '#EACDC2',
                    fontSize: '17px'
                }
            })
        })
    ],
}
