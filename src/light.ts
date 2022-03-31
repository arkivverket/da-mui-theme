import { createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		background: {
			default: "#fafafa",
			paper: "#ffffff",
		},
		text: {
			secondary: "rgba(0,0,0,0.6)",
			primary: "rgba(0,0,0,0.87)",
			disabled: "rgba(0,0,0,0.38)",
		},
		divider: "rgba(0,0,0,0.12)",
		primary: {
			main: "#3f51b5",
			contrastText: "#ffffff",
			dark: "#002884",
			light: "#757de8",
		},
		secondary: {
			main: "#daefef",
			dark: "#a8bdbd",
			light: "#e9ffff",
			contrastText: "#1d1d1d",
		},
		error: {
			main: "#d32f2f",
			dark: "#c62828",
			light: "#ef5350",
			contrastText: "#ffffff",
		},
		warning: {
			main: "#ed6c02",
			dark: "#e65100",
			light: "#ff9800",
			contrastText: "#ffffff",
		},
		info: {
			main: "#0288d1",
			dark: "#01579b",
			light: "#03a9f4",
			contrastText: "#ffffff",
		},
		success: {
			main: "#2e7d32",
			dark: "#1b5e20",
			light: "#4caf50",
			contrastText: "#ffffff",
		},
	},
	typography: {
		fontSize: 14, // 1 rem is still 16px
		fontFamily: [
			"Source Sans Pro",
			"Helvetica Neue",
			"Arial",
			"sans-serif",
		].join(","),
		body1: {
			fontSize: 14,
		},
		h1: {
			color: "#1D1D1D",
			fontWeight: 500,
			fontSize: 24,
			lineHeight: "2rem",
			marginBottom: "1.3rem",
		},
		h2: {
			fontWeight: 500,
			fontSize: 22,
			lineHeight: "1.8rem",
			marginBottom: "1rem",
		},
		h5: {
			fontWeight: 450,
			fontSize: 14,
		},
		h6: { // Digitalarkivet header
			color: "#efefef",
			textAlign: "center",
			textTransform: "uppercase",
			fontWeight: 400,
			fontSize: 22,
			letterSpacing: "3px",
		}
	},
	components: {
		MuiPaper: {
			variants: [{
				props: {
					variant: 'padded',
				},
				style: {
					padding: '2rem 3rem',
					marginBottom: '1rem',
				}
			}]
		}
	}
})

declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		padded: true
	}
}

export default theme;
