import {
	Autocomplete,
	Button,
	Fab,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Paper,
	Popper,
	Radio,
	RadioGroup,
	Select,
	SelectChangeEvent,
	Stack,
	styled,
	Switch,
	TextField,
	Typography,
} from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"
import React from "react"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const SelectExample = () => {
	const [awesomeness, setAwesomeness] = React.useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setAwesomeness(event.target.value as string)
	}

	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på Selects</Typography>

			<InnerPaper variant="padded">
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Awesomeness</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={awesomeness}
						label="Awesomeness"
						onChange={handleChange}
					>
						<MenuItem value={10}>Superawesome</MenuItem>
						<MenuItem value={20}>Awesome</MenuItem>
						<MenuItem value={30}>Other</MenuItem>
					</Select>
				</FormControl>
				<br />
				<br />
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Awesomeness</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={awesomeness}
						label="Awesomeness"
						onChange={handleChange}
						disabled
					>
						<MenuItem value={10}>Superawesome</MenuItem>
						<MenuItem value={20}>Awesome</MenuItem>
						<MenuItem value={30}>Other</MenuItem>
					</Select>
				</FormControl>
			</InnerPaper>
		</Paper>
	)
}
