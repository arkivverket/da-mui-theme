import { Autocomplete, Button, Fab, Paper, Popper, Stack, styled, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const ButtonExample = () => {
	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på knapper</Typography>

			<Typography variant="h3">Primary</Typography>

			<InnerPaper variant="padded">
				<Button variant="contained">Enabled</Button>
				&nbsp;
				<Button variant="contained" disabled>
					Disabled
				</Button>
			</InnerPaper>

			<Typography variant="h3">Secondary</Typography>

			<InnerPaper variant="padded">
				<Button variant="contained" color="secondary">
					Enabled
				</Button>
				&nbsp;
				<Button variant="contained" color="secondary" disabled>
					Disabled
				</Button>
			</InnerPaper>

			<Typography variant="h3">Secondary Result</Typography>

			<InnerPaper variant="padded">
				<Button variant="contained" color="secondaryResult">
					Enabled
				</Button>
				&nbsp;
				<Button variant="contained" color="secondaryResult" disabled>
					Disabled
				</Button>
			</InnerPaper>
		</Paper>
	)
}
