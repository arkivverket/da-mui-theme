import { PaletteOptions, styled, ToggleButtonGroup, ToggleButtonGroupProps } from "@mui/material"

type DaToggleButtonGroupProps = ToggleButtonGroupProps & {
	palette?: keyof Pick<PaletteOptions, "primary" | "secondary" | "info" | "error" | "warning" | "success">
}

export const DaToggleButtonGroup = styled(ToggleButtonGroup, {
	shouldForwardProp: propName => {
		return propName != "palette"
	},
})<DaToggleButtonGroupProps>(({ theme, palette }) => {
	// Find the correct palette to use - default is primary
	let colorBase = theme.palette[palette ?? "primary"]

	return {
		"& .MuiToggleButtonGroup-grouped, & .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
			borderWidth: "1px",
			borderColor: colorBase.main,
		},
		"& .MuiToggleButton-root": {
			color: colorBase.main,
			backgroundColor: theme.palette.background.white,
			marginLeft: "1px",

			"&:first-of-type": {
				marginLeft: "0",
			},

			"&:hover": {
				backgroundColor: colorBase["25p"],
			},

			"&:hover:not(:first-of-type)": {
				borderLeftWidth: "1px",
				borderColor: colorBase.main,
			},

			"&.Mui-selected, &.Mui-selected:hover": {
				backgroundColor: colorBase.main,
				color: colorBase.contrastText,
			},
		},

		// For vertical groups, switch top/left border and margins
		"&.MuiToggleButtonGroup-vertical": {
			"& .MuiToggleButton-root": {
				marginLeft: "0px",
			},
		},
	}
})
