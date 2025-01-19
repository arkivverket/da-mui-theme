import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Grid2 as Grid } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import { useState } from "react"
import { CloseOutlined as CloseIcon } from "@mui-symbols-material/w400"

export const DialogExample = () => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<ExampleWrapper title="Eksempel på Dialogs">
			<Grid size={{ xs: 12 }}>
				<Button variant="outlined" onClick={handleClickOpen}>
					Open simple dialog
				</Button>
				<Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
					<DialogTitle>Dialog title</DialogTitle>
					<IconButton
						aria-label="close"
						sx={theme => ({
							position: "absolute",
							right: 8,
							top: 8,
							color: theme.palette.grey[500],
						})}
						onClick={handleClose}
					>
						<CloseIcon />
					</IconButton>
					<DialogContent>
						Text goes here
						<Box sx={{ py: 2 }}>
							<Button variant="contained" color="primary">
								Label
							</Button>
							<Button variant="text" color="secondary">
								Label
							</Button>
						</Box>
					</DialogContent>
				</Dialog>
			</Grid>
		</ExampleWrapper>
	)
}
