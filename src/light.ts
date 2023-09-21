import { PaletteColor, createTheme } from "@mui/material/styles"

/**
 * Module augmentations
 */

interface BrandGreen {
	variant05: string
	variant1: string
	variant2: string
	variant3: string
	variant4: string
	variant5: string
}

interface BrandGrey {
	variant05: string
	variant1: string
	variant2: string
	variant3: string
	variant4: string
	variant5: string
	variant6: string
}

interface BrandBlue {
	variant1: string
}

interface BrandOrange {
	variant2: string
	variant3: string
	variant4: string
	variant5: string
}

interface BrandYellow {
	variant1: string
}

interface BrandBlack {
	variant1: string
}

interface BrandWhite {
	variant1: string
}

declare module "@mui/material/styles" {
	interface TypeBackground {
		content: string
		assets: string
	}

	interface TypeText {
		primaryWhite: string
	}

	interface Palette {
		brandGreen: BrandGreen
		brandGrey: BrandGrey
		brandBlue: BrandBlue
		brandOrange: BrandOrange
		brandYellow: BrandYellow
		brandBlack: BrandBlack
		brandWhite: BrandWhite
	}

	interface PaletteOptions {
		secondaryResult: PaletteColor;
		brandGreen: BrandGreen
		brandBlue: BrandBlue
		brandOrange: BrandOrange
		brandYellow: BrandYellow
		brandBlack: BrandBlack
		brandWhite: BrandWhite
		brandGrey: BrandGrey
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		secondaryResult: true
	}
}

declare module '@mui/material/Fab' {
	interface FabPropsColorOverrides {
		secondaryResult: true
	}
}

declare module "@mui/material/Paper" {
	interface PaperPropsVariantOverrides {
		padded: true
	}
}

/**
 * Digitalarkivet colors
 */

const themeColors = createTheme({
	shape: {
		borderRadius: 1
	},
	palette: {
		background: {
			default: "#F9FAF7",
			content: "#FFFFFF",
			assets: "#F8F8F8",
		},
		text: {
			primary: "#1D1D1D",
			primaryWhite: "#FFFFFF",
			secondary: "#636363",
			disabled: "#AEAEAE",
		},
		primary: {
			main: "#2F4029",
			contrastText: "#FFFFFF",
			dark: "#2B3B26",
			light: "#505F4B",
		},
		secondary: {
			main: "#DFF0C2",
			contrastText: "#1D1D1D",
			dark: "#CDDDB2",
			light: "#E4F2CC",
		},
		secondaryResult: {
			main: '#E3ECF9',
			contrastText: '#1D1D1D',
			dark: '#D1D9E5',
			light: '#E7EFFA',
		},
		brandGreen: {
			variant05: "#F9FAF7",
			variant1: "#DFF0C2",
			variant2: "#C6D7A9",
			variant3: "#AEBF90",
			variant4: "#7C8E5D",
			variant5: "#2F4029",
		},
		brandBlue: {
			variant1: "#E3ECF9",
		},
		brandOrange: {
			variant2: "#FCD1A4",
			variant3: "#FEB37F",
			variant4: "#FF965B",
			variant5: "#A73C2E",
		},
		brandYellow: {
			variant1: "#FBEEC8",
		},
		brandBlack: {
			variant1: "#000000",
		},
		brandWhite: {
			variant1: "#FFFFFF",
		},
		brandGrey: {
			variant05: "#F8F8F8",
			variant1: "#EBEBEB",
			variant2: "#D7D7D7",
			variant3: "#C2C2C2",
			variant4: "#AEAEAE",
			variant5: "#636363",
			variant6: "#1D1D1D",
		},
	},
	typography: {
		fontSize: 14, // 1 rem is still 16px
		fontFamily: ["'Neue Haas Grotesk'", "'Source Sans 3'", "'Source Sans Pro'", "'Helvetica Neue'", "Arial", "sans-serif"].join(","),
		body1: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: "22px",
			letterSpacing: "0.15px",
		},
	},
})

/**
 * The Digitalarkivet MUI theme
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
			MuiButton: {
				defaultProps: {
					disableElevation: true,
					sx: {
						textTransform: "none",
					},
				},
			},
			MuiFab: {
				defaultProps: {
					color: "primary",
					sx: {
						boxShadow: 0,
						":active": {
							boxShadow: 0,
						},
						textTransform: "none",
					},
				},
			},
			MuiRadio: {
				styleOverrides: {
					colorPrimary: {
						"& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path":{
							color: "#EDF1E8", // This color doesn't exist in the theme ¯\_(ツ)_/¯
							stroke: "#EDF1E8", // This color doesn't exist in the theme ¯\_(ツ)_/¯
							strokeWidth: 3,
						},
						"&.Mui-checked": {
							"& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path":{
								color: themeColors.palette.brandGreen.variant1,
								stroke: themeColors.palette.brandGreen.variant1,
							},
						},
						"&.Mui-disabled": {
							"& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root) path":{
								color: themeColors.palette.brandGrey.variant1,
								stroke: themeColors.palette.brandGrey.variant1,
							},
						},
					},
				},
			},
			MuiSwitch: {
				styleOverrides: {
					colorPrimary: {
						color: themeColors.palette.text.primary,
						"&.Mui-disabled": {
							color: themeColors.palette.brandGrey.variant4,
						},
					},
					track: {
						opacity: 1,
						backgroundColor: "#EDF1E8", // This color doesn't exist in the theme ¯\_(ツ)_/¯
						".Mui-checked.Mui-checked + &": {
							opacity: 1,
							backgroundColor: themeColors.palette.brandGreen.variant1,
						},
						".Mui-disabled.Mui-disabled + &": {
							opacity: 1,
							backgroundColor: themeColors.palette.brandGrey.variant1,
						},
					},
				},
			},
			MuiTextField: {
				styleOverrides: {
					root: {
						"& .MuiOutlinedInput-root": {
							"&.Mui-focused fieldset": {
								borderWidth: "1px",
							},
						},
					},
				},
				variants: [
					{
						props: {
							variant: "standard",
						},
						style: {
							"& .MuiInput-underline:after": {
								borderBottomWidth: "1px",
							},
						},
					},
				],
			},
		},
	},
	themeColors,
)

export default theme
