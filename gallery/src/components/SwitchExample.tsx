import { Autocomplete, Button, Fab, Paper, Popper, Stack, styled, Switch, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const SwitchExample = () => {
	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på Switches</Typography>

			<InnerPaper variant="padded">
				<Switch />
				&nbsp;
				<Switch disabled />
			</InnerPaper>
		</Paper>
	)
}
