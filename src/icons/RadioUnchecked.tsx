import { SvgIcon, SvgIconProps } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap } from "@mui/material"

const RadioUncheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path
				d="M11.5 0.8C17.2 0.8 22.2 5.8 22.2 11.5C22.2 17.2 17.2 22.2 11.5 22.2C5.8 22.2 0.8 17.2 0.8 11.5C0.8 5.8 5.8 0.8 11.5 0.8Z"
				fill="white"
				stroke="#1D1D1D"
				strokeWidth={1}
			/>
		</SvgIcon>
	),
	{ muiName: "RadioUncheckedIcon" },
)

export default RadioUncheckedIcon
