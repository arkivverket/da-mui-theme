import { Container, Stack, Typography } from "@mui/material"
import { Colors } from "./Colors"

export const Gallery = () => (
	<Container maxWidth="xl">
		<Typography variant="h1">Arkivverket MUI theme</Typography>
		<Stack>
			<Colors />
		</Stack>
	</Container>
)
