import { SvgIcon, SvgIconProps } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap } from "@mui/material"

const RadioCheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path
				d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1Z"
				fill="white"
				stroke="#0D0D0D"
				strokeWidth={2}
			/>
			<circle cx="12" cy="12" r="6" fill="#0D0D0D" />
		</SvgIcon>
	),
	{ muiName: "RadioCheckedIcon" },
)

export default RadioCheckedIcon
