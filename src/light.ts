import { PaletteColor, createTheme } from "@mui/material/styles"

/**
 * Extra colors used by Arkivverket
 */

interface BrandGreen {
	variant1: string
	variant2: string
	variant3: string
	variant4: string
	variant5: string
	variant6: string
}

interface BrandGrey {
	variant1: string
	variant2: string
	variant3: string
	variant4: string
	variant5: string
	variant6: string
	variant7: string
}

interface BrandBlue {
	variant1: string
}

interface BrandOrage {
	variant1: string
	variant2: string
	variant3: string
	variant4: string
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
		brandOrange: BrandOrage
		brandYellow: BrandYellow
		brandBlack: BrandBlack
		brandWhite: BrandWhite
	}

	interface PaletteOptions {
		secondaryResult: PaletteColor;
		brandGreen: BrandGreen
		brandBlue: BrandBlue
		brandOrange: BrandOrage
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

/**
 * Arkivverket colors
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
			contrastText: "#ffffff",
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
			variant1: "#F9FAF7",
			variant2: "#DFF0C2",
			variant3: "#C6D7A9",
			variant4: "#AEBF90",
			variant5: "#7C8E5D",
			variant6: "#2F4029",
		},
		brandBlue: {
			variant1: "#E3ECF9",
		},
		brandOrange: {
			variant1: "#FCD1A4",
			variant2: "#FEB37F",
			variant3: "#FF965B",
			variant4: "#A73C2E",
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
			variant1: "#F8F8F8",
			variant2: "#EBEBEB",
			variant3: "#D7D7D7",
			variant4: "#C2C2C2",
			variant5: "#AEAEAE",
			variant6: "#636363",
			variant7: "#1D1D1D",
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
	}
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
			MuiButton: {
				defaultProps: {
					disableElevation: true,
				}
			},
			MuiSwitch: {
				styleOverrides: {
					colorPrimary: {
						color: themeColors.palette.text.primary,
						"&.Mui-disabled": {
							color: themeColors.palette.brandGrey.variant5,
						}
					},
					track: {
						opacity: 1,
						backgroundColor: "#EDF1E8", // This color doesn't exist in the theme ¯\_(ツ)_/
						".Mui-checked.Mui-checked + &": {
							opacity: 1,
							backgroundColor: themeColors.palette.brandGreen.variant2,
						},
						".Mui-disabled.Mui-disabled + &": {
							opacity: 1,
							backgroundColor: themeColors.palette.brandGrey.variant2,
						}
					}
				},
			}
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
