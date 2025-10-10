import {  Grid, Paper, Typography } from "@mui/material"

type ExampleWrapperProps = {
	title: string
	children: React.ReactNode
}

export const ExampleWrapper = ({ title, children }: ExampleWrapperProps) => {
	return (
		<Paper variant="padded">
			<Typography variant="h2" sx={{ mb: 4 }}>
				{title}
			</Typography>

			<Grid container spacing={2}>
				{children}
			</Grid>
		</Paper>
	)
}
