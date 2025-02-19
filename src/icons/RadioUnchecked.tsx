import { SvgIcon, SvgIconProps } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { SvgIconTypeMap } from "@mui/material"

const RadioUncheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 -960 960 960">
			<path d="M480.13-120q-74.44 0-139.79-28.34t-114.48-77.42q-49.13-49.08-77.49-114.37Q120-405.42 120-479.87q0-74.67 28.34-140.41 28.34-65.73 77.42-114.36 49.08-48.63 114.37-76.99Q405.42-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.44-28.34 139.79t-76.92 114.48q-48.58 49.13-114.26 77.49Q554.81-120 480.13-120Zm-.13-30.77q137.38 0 233.31-96.04 95.92-96.04 95.92-233.19 0-137.38-95.92-233.31-95.93-95.92-233.31-95.92-137.15 0-233.19 95.92-96.04 95.93-96.04 233.31 0 137.15 96.04 233.19 96.04 96.04 233.19 96.04ZM480-480Z" />
		</SvgIcon>
	),
	{ muiName: "RadioUncheckedIcon" },
)

export default RadioUncheckedIcon
