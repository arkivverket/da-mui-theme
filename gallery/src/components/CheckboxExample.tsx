import { Checkbox, Grid } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const CheckboxExample = () => {
	return (
		<ExampleWrapper title="Checkbox">
			<Grid>
				<Checkbox />
				<Checkbox indeterminate />
				<Checkbox checked />
				<Checkbox disabled />
				<Checkbox indeterminate disabled />
				<Checkbox checked disabled />
			</Grid>
		</ExampleWrapper>
	)
}
