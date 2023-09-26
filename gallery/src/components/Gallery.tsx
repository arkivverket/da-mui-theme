import { Autocomplete, Container, Stack, Switch, Typography } from "@mui/material"
import { Colors } from "./Colors"
import { ButtonExample } from "./ButtonExample"
import { SwitchExample } from "./SwitchExample"
import { RadioExample } from "./RadioExample"
import { FabExample } from "./FabExample"
import { TextFieldExample } from "./TextFieldExample"
import { SelectExample } from "./SelectExample"
import { AutoCompleteExample } from "./AutoCompleteExample"

export const Gallery = () => (
	<Container maxWidth="xl">
		<Typography variant="h1">Digitalarkivet MUI theme</Typography>
		<Stack>
			<Colors />
			<ButtonExample />
			<FabExample />
			<TextFieldExample />
			<SelectExample />
			<AutoCompleteExample />
			<SwitchExample />
			<RadioExample />
		</Stack>
	</Container>
)
