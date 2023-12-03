import { Autocomplete, Button, Fab, Grid, Paper, Popper, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const FabExample = () => {
	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på Fabs</Typography>

			<Grid container>
				<Grid item xs={6}>
					<Typography variant="h3">Primary</Typography>

					<InnerPaper variant="padded">
						<Fab variant="extended">Enabled</Fab>
						&nbsp;
						<Tooltip title="Tooltip">
							<Fab>E</Fab>
						</Tooltip>
						&nbsp;
						<Fab variant="extended" disabled>
							Disabled
						</Fab>
						&nbsp;
						<Fab disabled>D</Fab>
					</InnerPaper>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h3">Secondary</Typography>

					<InnerPaper variant="padded">
						<Fab variant="extended" color="secondary">
							Enabled
						</Fab>
						&nbsp;
						<Tooltip title="Tooltip">
							<Fab color="secondary">E</Fab>
						</Tooltip>
						&nbsp;
						<Fab variant="extended" color="secondary" disabled>
							Disabled
						</Fab>
						&nbsp;
						<Fab color="secondary" disabled>
							D
						</Fab>
					</InnerPaper>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h3">Secondary Result</Typography>

					<InnerPaper variant="padded">
						<Fab variant="extended" color="secondaryResult">
							Enabled
						</Fab>
						&nbsp;
						<Tooltip title="Tooltip">
							<Fab color="secondaryResult">E</Fab>
						</Tooltip>
						&nbsp;
						<Fab variant="extended" color="secondaryResult" disabled>
							Disabled
						</Fab>
						<Fab color="secondaryResult" disabled>
							D
						</Fab>
					</InnerPaper>
				</Grid>
			</Grid>
		</Paper>
	)
}
