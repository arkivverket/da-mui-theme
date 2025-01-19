import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Typography } from "@mui/material"
import React from "react"
import { InnerPaper } from "./InnerPaper"

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
