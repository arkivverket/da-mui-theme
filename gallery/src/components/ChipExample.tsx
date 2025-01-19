import { Stack, Grid2 as Grid, Typography, Box, Chip } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import FilterChip from "@da-mui-theme/components/FilterChip"
import ActionChip from "@da-mui-theme/components/ActionChip"

export const ChipExample = () => {
	return (
		<ExampleWrapper title="Eksempel på Chips">
			<Grid size={{ xs: 12 }}>
				<FilterChips />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<ActionChips />
			</Grid>
			<ChipSection title="Variants" description="Different styling for variants">
				<Chip variant="filter" label="filter" />
				<Chip variant="action" label="action" />
				<Chip variant="input" label="input" />
			</ChipSection>
		</ExampleWrapper>
	)
}

type ChipSectionProps = {
	title: string
	description: string
	descriptionComponent?: string
	children: React.ReactNode
}

const ChipSection = ({ title, description, descriptionComponent, children }: ChipSectionProps) => (
	<Box>
		<Typography variant="section" component="div">
			{title}
		</Typography>
		<Typography variant="caption" component="div">
			{description}
			{descriptionComponent && (
				<Typography variant="bodyMono" component="span">
					{descriptionComponent}
				</Typography>
			)}
		</Typography>
		<Box sx={{ display: "flex", gap: 2 }}>{children}</Box>
	</Box>
)

const ActionChips = () => (
	<ChipSection title="ActionChip" description="Made using the " descriptionComponent="<ActionChip>">
		<Stack direction="row" spacing={2}>
			<ActionChip label="Action" menuItems={["Item 1", "Item 2", "Item 3"]} />
		</Stack>
	</ChipSection>
)

const FilterChips = () => (
	<ChipSection title="FilterChip" description="Made using the " descriptionComponent="<FilterChip>">
		{Array.from({ length: 5 }).map((_, i) => (
			<FilterChip key={i} label={`Label`} />
		))}
	</ChipSection>
)
