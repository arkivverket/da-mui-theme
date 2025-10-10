import { Fab,  Grid, Stack, Tooltip, Typography } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import { TuneOutlined } from "@mui/icons-material"

type FabSectionProps = {
	title: string
	color: "primary" | "secondary" | "error"
}

const FabSection = ({ title, color }: FabSectionProps) => (
	<Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
		<Typography variant="section">{title}</Typography>

		<Stack spacing={2} direction="row" alignItems="center">
			<Fab variant="extended" color={color}>
				<TuneOutlined />
				Extended
			</Fab>
			<Tooltip title="Tooltip">
				<Fab color={color}>E</Fab>
			</Tooltip>
		</Stack>
	</Grid>
)

export const FabExample = () => {
	return (
		<ExampleWrapper title="Eksempel på Fabs">
			<FabSection title="Primary" color="primary" />
			<FabSection title="Secondary" color="secondary" />
		</ExampleWrapper>
	)
}
