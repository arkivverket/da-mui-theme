import { SvgIcon, SvgIconProps } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap } from "@mui/material"

const RadioUncheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<circle cx="14" cy="12" r="9" fill="white" stroke="#1D1D1D" strokeWidth={1} />
		</SvgIcon>
	),
	{ muiName: "RadioUncheckedIcon" },
)

export default RadioUncheckedIcon
