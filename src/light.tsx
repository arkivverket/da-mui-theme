import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            light: '#f2f2f2',
            main: '#1d1d1d',
            dark: '#000000',
        },
        secondary: {
            light: '##F0F9F9',
            main: '##A6D9D8',
            dark: '##222222',
        },
        error: {
            main: '#9c070b',
        },
        info: {
            main: '#96a6bc',
        },
        background: {
            default: '#e5e5e5',
        }
    },
    typography: {
        fontSize: 14, // 1 rem is still 16px
        fontFamily: [
            'Source Sans Pro',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        body1: {
            fontSize: 14,
        },
        h1: {
            color: '#1D1D1D',
            fontWeight: 500,
            fontSize: 24,
            lineHeight: '2rem',
            marginBottom: '1.3rem',
        },
        h2: {
            fontWeight: 500,
            fontSize: 22,
            lineHeight: '1.8rem',
            marginBottom: '1rem',
        },
        h5: {
            fontWeight: 450,
            fontSize: 14,
        },
        h6: {                     // Digitalarkivet header
            color: '#efefef',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 400,
            fontSize: 22,
            letterSpacing: '3px',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#A6D9D8',
                    '&:hover': {
                        backgroundColor: '#99C7C5'
                    },
                    color: '#222222',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    textTransform: 'none',
                    fontSize: 14,
                    minWidth: '120px'
                },
            },
            variants: [{
                props: { variant: 'secondary' },
                style: {
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #A6D9D8',
                    '&:hover': {
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #99C7C5'
                    }
                }
            }],
        }
    },
})

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        secondary: true
    }
}
