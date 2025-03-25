import { Stack, Grid2 as Grid, Typography, Box, Chip } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import FilterChip from "@digitalarkivet/mui-theme/components/FilterChip"
import ActionChip from "@digitalarkivet/mui-theme/components/ActionChip"
import { useState } from "react"

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

const ActionChips = () => {
	const [selected, setSelected] = useState("item1")

	const items = [
		{ key: "item1", label: "Item 1" },
		{ key: "item2", label: "Item 2" },
		{ key: "item3", label: "Item 3" },
	]

	return (
		<ChipSection title="ActionChip" description="Made using the " descriptionComponent="<ActionChip>">
			<Stack direction="row" spacing={2}>
				<ActionChip
					label={items.find(i => i.key === selected)?.label ?? "Action"}
					menuItems={items}
					selectedKey={selected}
					onChange={setSelected}
					closeOnSelect
				/>
			</Stack>
		</ChipSection>
	)
}

const FilterChips = () => (
	<ChipSection title="FilterChip" description="Made using the " descriptionComponent="<FilterChip>">
		{Array.from({ length: 5 }).map((_, i) => (
			<FilterChip key={i} label={`Label`} />
		))}
	</ChipSection>
)
