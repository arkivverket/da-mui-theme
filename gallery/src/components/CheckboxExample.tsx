import { Checkbox, Grid2 as Grid } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const CheckboxExample = () => {
	return (
		<ExampleWrapper title="Checkbox">
			<Grid>
				<Checkbox />
				<Checkbox indeterminate />
				<Checkbox disabled />
				<Checkbox checked disabled />
			</Grid>
		</ExampleWrapper>
	)
}
