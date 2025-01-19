import { Alert, AlertTitle, Box, Button, Stack } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

const titles = {
	error: "Error",
	success: "Vellykket",
	warning: "Forsiktig",
	info: "Veiledning",
	disabled: "Deaktivert",
}

const richText =
	"Fotografiet er en del av en fotoserie med motiver av familien Lind. Flere av de mannlige familiemedlemmene i Lind-familien hadde ledende stillinger."

export const AlertExample = () => {
	const colorOptions = ["error", "warning", "info", "success", "disabled"] as const
	const variantOptions: Array<"standard" | "rich"> = ["standard", "rich"]

	return (
		<ExampleWrapper title="Eksempel på Alerts">
			<Stack spacing={2} sx={{ maxWidth: "400px" }}>
				{colorOptions.map(color =>
					variantOptions.map(variant => (
						<Alert
							key={`${color}-${variant}`}
							severity={color}
							variant={variant}
							icon={variant === "rich" ? false : null}
						>
							<AlertTitle>{titles[color]}</AlertTitle>
							{variant === "rich" ? richText : "Trailing text"}
							{variant === "rich" && color !== "disabled" && (
								<Box sx={{ mt: 2 }}>
									<Button variant="contained" color={color}>
										Label
									</Button>
									<Button variant="text" color={color}>
										Label
									</Button>
								</Box>
							)}
						</Alert>
					)),
				)}
			</Stack>
		</ExampleWrapper>
	)
}
