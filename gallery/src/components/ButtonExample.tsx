import { Box, Button, Grid2 as Grid, Stack, Typography } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const ButtonExample = () => {
	const colorOptions = ["primary", "secondary", "error", "warning", "info"] as const
	const variantOptions: Array<"contained" | "outlined" | "text"> = ["contained", "outlined", "text"]

	const buttonsToUse: Array<{ color: (typeof colorOptions)[number]; variants: (typeof variantOptions)[number][] }> = [
		{ color: "primary", variants: ["contained"] },
		{ color: "secondary", variants: ["outlined", "text"] },
		{ color: "error", variants: ["contained"] },
		{ color: "warning", variants: ["contained"] },
		{ color: "info", variants: ["contained"] },
	]

	return (
		<ExampleWrapper title="Eksempel på knapper">
			<Grid size={{ xs: 12 }}>
				<Typography variant="h4" sx={{ my: 3 }}>
					Knapper som kan brukes:
				</Typography>
				<Typography variant="body">Default variant er "outlined" og default farge er "secondary".</Typography>
			</Grid>

			{buttonsToUse.map(({ color, variants }) =>
				variants.map(variant => (
					<ButtonGroup
						key={`${color}-${variant}`}
						label={`${capitalize(color)} ${capitalize(variant)}`}
						color={color}
						variant={variant}
					/>
				)),
			)}

			<Typography variant="h4" sx={{ my: 3 }}>
				Knapper som{" "}
				<Box component="span" sx={{ textDecoration: "underline", fontWeight: "bold" }}>
					ikke
				</Box>{" "}
				skal brukes:
			</Typography>
			<Grid container>
				{colorOptions
					.flatMap(color => variantOptions.map(variant => ({ color, variant })))
					.filter(
						({ color, variant }) =>
							// Filter out the buttons that are already used
							!buttonsToUse.some(btn => btn.color === color && btn.variants.includes(variant)),
					)
					.map(({ color, variant }) => (
						<ButtonGroup
							key={`${color}-${variant}`}
							label={`${capitalize(color)} ${capitalize(variant)}`}
							color={color}
							variant={variant}
						/>
					))}
			</Grid>
		</ExampleWrapper>
	)
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const ButtonGroup = ({
	label,
	color = "secondary", // Default to 'secondary' color if not provided
	variant = "outlined", // Default to 'outlined' variant if not provided
}: {
	label: string
	color?: "primary" | "secondary" | "error" | "warning" | "info"
	variant?: "contained" | "outlined" | "text"
}) => {
	return (
		<Grid size={{ xs: 12, sm: 6, lg: 4 }}>
			<Typography variant="section" sx={{ my: 2 }}>
				{label}
			</Typography>
			<Stack spacing={2} direction="row">
				<Button variant={variant} color={color}>
					Enabled
				</Button>
				{["primary", "secondary"].includes(color) && (
					<Button variant={variant} color={color} disabled startIcon={<>←</>} endIcon={<>→</>}>
						Disabled
					</Button>
				)}
			</Stack>
		</Grid>
	)
}
