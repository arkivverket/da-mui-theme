import { Box, FormControl, FormControlLabel, IconButton, Radio, RadioGroup } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import { InfoOutlined } from "@mui/icons-material"

export const RadioExample = () => {
	return (
		<ExampleWrapper title="Eksempel på Radiobuttons">
			<FormControl>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="superawesome"
					name="radio-buttons-group"
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<FormControlLabel value="superawesome" control={<Radio />} label="Superawesome" />
						<IconButton>
							<InfoOutlined />
						</IconButton>
					</Box>
					<FormControlLabel value="awesome" control={<Radio />} label="Awesome" />
					<FormControlLabel value="other" control={<Radio />} label="Other" disabled />
					<FormControlLabel value="other2" control={<Radio />} label="Other" checked disabled />
				</RadioGroup>
			</FormControl>
		</ExampleWrapper>
	)
}
