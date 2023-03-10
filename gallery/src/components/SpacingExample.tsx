import { DaToggleButtonGroup } from "@da-mui-theme/DaToggleButtonGroup"
import { Autocomplete, Paper, Popper, Stack, styled, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { ArrowDropDown } from "@mui/icons-material"
import { DaToggleButton } from "@da-mui-theme/DaToggleButton"

const InnerPaper = styled(Paper)({
	maxWidth: "600px",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})

export const SpacingExample = () => {
	const [groupValue, setGroupValue] = useState("1")
	const [isExtraSelected, setIsExtraSelected] = useState(false)
	const [isOpen, setOpen] = useState(false)
	const popperRef = useRef<HTMLButtonElement>(null)

	return (
		<Paper variant="padded">
			<Typography variant="h2">Eksempel på spacing</Typography>

			<InnerPaper variant="padded">
				<Typography variant="h4">Søk og filter</Typography>
				<form onSubmit={e => e.preventDefault()}></form>
				<Stack>
					<TextField label="Søk" />
					<Autocomplete
						renderInput={params => <TextField {...params} label="Dropdown" />}
						options={["a", "b", "c", "d"]}
						multiple
						freeSolo={false}
					/>
					<Typography variant="h2">Subtitle</Typography>
					<DaToggleButtonGroup
						palette="info"
						value={groupValue}
						onChange={(_, val) => {
							if (val == "--showmore--") {
								setOpen(!isOpen)
							} else {
								setOpen(false)
								setIsExtraSelected(false)
								setGroupValue(val)
							}
						}}
						exclusive
					>
						<DaToggleButton value="1">Valg 1</DaToggleButton>
						<DaToggleButton value="2">Valg 2</DaToggleButton>
						<DaToggleButton value="3">Valg 3</DaToggleButton>
						<DaToggleButton
							selected={isExtraSelected || isOpen}
							sx={{ flex: "0 1 auto" }}
							ref={popperRef}
							value="--showmore--"
						>
							<ArrowDropDown />
						</DaToggleButton>
					</DaToggleButtonGroup>
					<Popper anchorEl={popperRef.current} open={isOpen} sx={{ backgroundColor: "white" }}>
						<DaToggleButtonGroup
							orientation="vertical"
							value={groupValue}
							palette="info"
							onChange={(_, val) => {
								setIsExtraSelected(true)
								setGroupValue(val)
								setOpen(false)
							}}
							exclusive
						>
							<DaToggleButton value="extra-1">Ekstra 1</DaToggleButton>
							<DaToggleButton value="extra-2">Ekstra 2</DaToggleButton>
							<DaToggleButton value="extra-3">Ekstra 3</DaToggleButton>
						</DaToggleButtonGroup>
					</Popper>
				</Stack>
			</InnerPaper>
		</Paper>
	)
}
