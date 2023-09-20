import {
	Autocomplete,
	Button,
	Fab,
	FormControl,
	FormControlLabel,
	FormLabel,
	Paper,
	Popper,
	Radio,
	RadioGroup,
	Stack,
	styled,
	Switch,
	TextField,
	Typography,
} from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const RadioExample = () => {
	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på Radiobuttons</Typography>

			<InnerPaper variant="padded">
				<FormControl>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="superawesome"
						name="radio-buttons-group"
					>
						<FormControlLabel value="superawesome" control={<Radio />} label="Superawesome" />
						<FormControlLabel value="awesome" control={<Radio />} label="Awesome" />
						<FormControlLabel value="other" control={<Radio />} label="Other" disabled />
					</RadioGroup>
				</FormControl>
			</InnerPaper>
		</Paper>
	)
}
