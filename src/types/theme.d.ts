import type { DaBadgeClassKey, DaBadgeProps } from "@digitalarkivet/mui-theme/components/DaBadge"
import type { ProgressBarProps } from "@digitalarkivet/mui-theme/components/ProgressBar"
import type { PaletteColorOptions } from "@mui/material"
import type { OverridesStyleRules } from "@mui/material/styles/overrides"

export type BorderColor = {
	default: string
	active: string
	line: string
	highlight: string
	disabled: string
	inverted: string
}

export type FillColor = {
	primary: string
	secondary: string
	hover: string
	primaryHover: string
}

/**
 * Module augmentations
 */
declare module "@mui/material/styles" {
	interface Theme {
		customShadows: {
			variant1: string
			variant2: string
			variant3: string
		}
		customShape: {
			borderRadiusNone: string
			borderRadiusSm: string
			borderRadiusMd: string
			borderRadiusFull: string
		}
	}

	interface ThemeOptions {
		customShape?: {
			borderRadiusNone?: string
			borderRadiusSm?: string
			borderRadiusMd?: string
			borderRadiusFull?: string
		}
	}

	interface SimplePaletteColorOptions {
		accent?: string
		content?: string
		background: string
	}

	interface PaletteColor extends SimplePaletteColorOptions {}

	interface Palette {
		news: PaletteColor
		neutral: PaletteColor
		disabled: PaletteColor
		borders: BorderColor
		fills: FillColor
	}

	interface PaletteOptions {
		news: PaletteColorOptions
		neutral: PaletteColorOptions
		disabled: PaletteColorOptions
		fills: FillColor
		borders: BorderColor
	}

	interface TypeText {
		primaryInvert: string
	}

	interface TypeBackground {
		white: string
		green: string
		beige: string
		gray: string
		floating: string
		darkGreen: string
	}
	interface Components {
		DaBadge?: {
			defaultProps?: DaBadgeProps
			styleOverrides?: Partial<OverridesStyleRules<DaBadgeClassKey, "DaBadge", Theme>>
		}
		ProgressBar?: {
			defaultProps?: ProgressBarProps
		}
	}
}

declare module "@mui/material/styles/createTypography" {
	interface FontStyle {
		fontWeightRoman: React.CSSProperties["fontWeight"]
		lineHeight100: React.CSSProperties["lineHeight"]
		lineHeight110: React.CSSProperties["lineHeight"]
		lineHeight120: React.CSSProperties["lineHeight"]
		lineHeight125: React.CSSProperties["lineHeight"]
		lineHeight130: React.CSSProperties["lineHeight"]
		lineHeight140: React.CSSProperties["lineHeight"]
		lineHeight150: React.CSSProperties["lineHeight"]
		fontSize12: React.CSSProperties["fontSize"]
		fontSize14: React.CSSProperties["fontSize"]
		fontSize16: React.CSSProperties["fontSize"]
		fontSize20: React.CSSProperties["fontSize"]
		fontSize24: React.CSSProperties["fontSize"]
		fontSize32: React.CSSProperties["fontSize"]
		fontSize40: React.CSSProperties["fontSize"]
		fontSize48: React.CSSProperties["fontSize"]
		fontSize56: React.CSSProperties["fontSize"]
		fontSize72: React.CSSProperties["fontSize"]
		fontSize96: React.CSSProperties["fontSize"]
	}

	interface Typography {
		body: React.CSSProperties
		bodyBold: React.CSSProperties
		bodyLarge: React.CSSProperties
		bodyLargeBold: React.CSSProperties
		bodyLink: React.CSSProperties
		buttonLink: React.CSSProperties
		buttonLinkSmall: React.CSSProperties
		captionBold: React.CSSProperties
		input: React.CSSProperties
		label: React.CSSProperties
		labelBold: React.CSSProperties

		displayHuge: React.CSSProperties
		display1: React.CSSProperties
		display2: React.CSSProperties
		display3: React.CSSProperties
		display4: React.CSSProperties
	}

	interface TypographyOptions {
		body?: React.CSSProperties
		bodyBold?: React.CSSProperties
		bodyLarge?: React.CSSProperties
		bodyLargeBold?: React.CSSProperties
		bodyLink?: React.CSSProperties
		buttonLink?: React.CSSProperties
		buttonLinkSmall?: React.CSSProperties
		captionBold?: React.CSSProperties
		input?: React.CSSProperties
		label?: React.CSSProperties
		labelBold?: React.CSSProperties
		displayHuge?: React.CSSProperties
		display1?: React.CSSProperties
		display2?: React.CSSProperties
		display3?: React.CSSProperties
		display4?: React.CSSProperties
		section?: React.CSSProperties
		bodyMono?: React.CSSProperties
		labelMono?: React.CSSProperties
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		displayHuge: true
		display1: true
		display2: true
		display3: true
		display4: true
		section: true
		bodyLarge: true
		bodyLargeBold: true
		body: true
		bodyMono: true
		bodyBold: true
		buttonLink: true
		buttonLinkSmall: true
		caption: true
		captionBold: true
		label: true
		labelBold: true
		labelMono: true
	}
}

declare module "@mui/material/Alert" {
	interface AlertProps {
		size?: "small" | "large"
	}
	interface AlertPropsVariantOverrides {
		rich: true
		plain: true
	}
	interface AlertPropsColorOverrides {
		disabled: true
	}
}

declare module "@mui/material/Tabs" {
	interface TabsPropsColorOverrides {
		content: true
	}
}

declare module "@mui/material/Chip" {
	interface ChipOwnProps {
		selected?: boolean
		diableRipple?: boolean
	}

	interface ChipPropsVariantOverrides {
		filter: true
		input: true
		action: true
	}
}

declare module "@mui/material/Paper" {
	interface PaperPropsVariantOverrides {
		padded: true
	}
}
