import { createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		background: {
			default: "#f5f5f5",
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
			"'Source Sans 3'",
			"'Source Sans Pro'",
			"'Helvetica Neue'",
			"Arial",
			"sans-serif",
		].join(","),
		body1: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: "22px",
			letterSpacing: "0.15px",
		},
		body2: {
			fontWeight: 400,
			fontSize: 14,
			lineHeight: "20px",
			letterSpacing: "0.17px",
		},
		h1: {
			fontWeight: 300,
			fontSize: 96,
			lineHeight: "112px",
			letterSpacing: "-1.5px",
		},
		h2: {
			fontWeight: 300,
			fontSize: 60,
			lineHeight: "72px",
			letterSpacing: "-0.5px",
		},
		h3: {
			fontWeight: 400,
			fontSize: 48,
			lineHeight: "56px",
		},
		h4: {
			fontWeight: 400,
			fontSize: 30,
			lineHeight: "37px",
			letterSpacing: "0.25px",
		},
		h5: {
			fontWeight: 400,
			fontSize: 24,
			lineHeight: "32px",
		},
		// Digitalarkivet header
		h6: {
			color: "#efefef",
			textAlign: "center",
			textTransform: "uppercase",
			fontWeight: 400,
			fontSize: 22,
			letterSpacing: "3px",
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: "28px",
			letterSpacing: "0.15px",
		},
		subtitle2: {
			fontWeight: 600,
			fontSize: 14,
			lineHeight: "22px",
			letterSpacing: "0.1px",
		},
	},
	components: {
		MuiPaper: {
			variants: [
				{
					props: {
						variant: "padded",
					},
					style: {
						padding: "2rem 3rem",
						marginBottom: "1rem",
						borderRadius: "1px",
						boxShadow: "0px 0px 0px 1px #E0E0E0",
					},
				},
			],
		},
	},
});

declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		padded: true
	}
}

export default theme;
