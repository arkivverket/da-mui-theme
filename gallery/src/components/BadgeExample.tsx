import { DaBadge } from "@da-mui-theme/components/DaBadge"
import { ExampleWrapper } from "./ExampleWrapper"
import { Grid2 as Grid } from "@mui/material"
import { FeaturedSeasonalAndGiftsFilledOutlined as GiftIcon } from "@mui-symbols-material/w400"

export const BadgeExample = () => {
	const colorOptions = ["error", "warning", "info", "success", "news"] as const

	const allItems = [
		...colorOptions.map(color => <DaBadge key={color} color={color} label={color} icon={<GiftIcon />} />),
		<DaBadge key="neutral-1" color="neutral" label="neutral" />,
		<DaBadge key="neutral-2" color="neutral" label="neutral" icon={<GiftIcon />} />,
	]

	return (
		<ExampleWrapper title="Eksempel på DA-Badges">
			{allItems.map((item, index) => (
				<Grid key={index} size={{ xs: 6, sm: 4, md: 3, lg: 1.7 }}>
					{item}
				</Grid>
			))}
		</ExampleWrapper>
	)
}
