import { Autocomplete, Button, Fab, Grid, Paper, Popper, Stack, styled, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const TextFieldExample = () => {
	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på tekstinput</Typography>

			<Grid container>
				<Grid item xs={6}>
					<Typography variant="h3">Default</Typography>

					<InnerPaper variant="padded">
						<TextField label="Enabled" />
						&nbsp;
						<TextField label="Disabled" disabled />
					</InnerPaper>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h3">Default (error)</Typography>

					<InnerPaper variant="padded">
						<TextField label="Enabled" color="error" />
						&nbsp;
						<TextField label="Disabled" color="error" disabled />
					</InnerPaper>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h3">Default (standard)</Typography>

					<InnerPaper variant="padded">
						<TextField label="Enabled" variant="standard" />
						&nbsp;
						<TextField label="Disabled" variant="standard" disabled />
					</InnerPaper>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h3">Default (error, standard)</Typography>

					<InnerPaper variant="padded">
						<TextField label="Enabled" color="error" variant="standard" />
						&nbsp;
						<TextField label="Disabled" color="error" variant="standard" disabled />
					</InnerPaper>
				</Grid>
			</Grid>
		</Paper>
	)
}
