import { Switch } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const SwitchExample = () => {
	return (
		<ExampleWrapper title="Eksempel på Switches">
			<Switch />
			&nbsp;
			<Switch disabled />
		</ExampleWrapper>
	)
}
