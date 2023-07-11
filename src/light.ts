import { createTheme } from "@mui/material/styles"

/**
 * Extra colors used by Arkivverket
 */
declare module "@mui/material/styles" {
	interface TypeText {
		"25p": string
		"50p": string
		white: string
	}

	interface PaletteColor {
		"25p": string
		"50p": string
	}

	interface SimplePaletteColorOptions {
		"25p": string
		"50p": string
	}

	interface TypeBackground {
		black: string
		white: string
		disabled: string
		border: string
		hover: string
		selected: string
	}
}

/**
 * Arkivverket colors
 */
const themeColors = createTheme({
	palette: {
		background: {
			default: "#f5f5f5",
			paper: "#ffffff",
			black: "#000",
			white: "#fff",
			disabled: "rgba(224, 224, 224, 1)",
			border: "rgba(196, 196, 196, 1)",
			hover: "rgba(247, 248, 252, 1)",
			selected: "rgba(240, 241, 249, 1)",
		},
		text: {
			secondary: "rgba(0,0,0,0.6)",
			primary: "rgba(0,0,0,0.87)",
			disabled: "rgba(0,0,0,0.38)",
			"25p": "rgba(245, 245, 245, 1)",
			"50p": "rgba(144, 144, 144, 1)",
			white: "#fff",
		},
		divider: "rgba(0,0,0,0.12)",
		primary: {
			main: "#3f51b5",
			contrastText: "#ffffff",
			dark: "#002884",
			light: "#757de8",
			"50p": "rgba(159, 168, 218, 1)",
			"25p": "rgba(207, 212, 237, 1)",
		},
		secondary: {
			main: "#daefef",
			dark: "#a8bdbd",
			light: "#e9ffff",
			contrastText: "#1d1d1d",
			"50p": "rgba(237, 247, 247, 1)",
			"25p": "rgba(246, 251, 251, 1)",
		},
		error: {
			main: "#d32f2f",
			dark: "#c62828",
			light: "#ef5350",
			contrastText: "#ffffff",
			"50p": "rgba(233, 151, 151, 1)",
			"25p": "rgba(244, 203, 203, 1)",
		},
		warning: {
			main: "#ed6c02",
			dark: "#e65100",
			light: "#ff9800",
			contrastText: "#ffffff",
			"50p": "rgba(246, 182, 128, 1)",
			"25p": "rgba(251, 218, 192, 1)",
		},
		info: {
			main: "#0288d1",
			dark: "#01579b",
			light: "#03a9f4",
			contrastText: "#ffffff",
			"50p": "rgba(128, 195, 232, 1)",
			"25p": "rgba(192, 225, 244, 1)",
		},
		success: {
			main: "#2e7d32",
			dark: "#1b5e20",
			light: "#4caf50",
			contrastText: "#ffffff",
			"50p": "rgba(192, 225, 244, 1)",
			"25p": "rgba(203, 223, 204, 1)",
		},
	},
	typography: {
		fontSize: 14, // 1 rem is still 16px
		fontFamily: ["'Source Sans 3'", "'Source Sans Pro'", "'Helvetica Neue'", "Arial", "sans-serif"].join(","),
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
})

/**
 * The Arkivverket MUI theme
 */
const theme = createTheme(
	{
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
			MuiTextField: {
				defaultProps: {
					size: "small",
					fullWidth: true,
				},
			},
		},
	},
	themeColors,
)

declare module "@mui/material/Paper" {
	interface PaperPropsVariantOverrides {
		padded: true
	}
}

export default theme
