import { Box, Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import React from "react"
import { ExampleWrapper } from "./ExampleWrapper"

type TextFieldSectionProps = {
	title: string
	fields: Array<Array<React.ReactNode>>
}

const TextFieldSection = ({ title, fields }: TextFieldSectionProps) => (
	<Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
		<Typography variant="section">{title}</Typography>

		{fields.map((field, index) => (
			<Box key={index} sx={{ display: "flex", gap: 2, alignItems: "baseline", marginBottom: 2 }}>
				{field.map((item, idx) => (
					<React.Fragment key={idx}>{item}</React.Fragment>
				))}
			</Box>
		))}
	</Grid>
)

export const TextFieldExample = () => {
	const sections = [
		{
			title: "Contained (default)",
			fields: [
				[
					<TextField label="Enabled" helperText="Helper text" />,
					<Button variant="contained" color="primary">
						Button
					</Button>,
				],
				[<TextField label="Disabled" disabled />],
				[<TextField label="With error" error />],
			],
		},
		{
			title: "Standard",
			fields: [
				[<TextField label="Enabled" variant="standard" />],
				[<TextField label="Disabled" variant="standard" disabled />],
				[<TextField label="With error" variant="standard" error />],
			],
		},

		{
			title: "Filled",
			fields: [
				[<TextField label="Enabled" variant="filled" />],
				[<TextField label="Disabled" variant="filled" disabled />],
				[<TextField label="With error" variant="filled" error />],
			],
		},

		{
			title: "Multiline filled (rich)",
			fields: [[<TextField multiline fullWidth label="Rich" variant="filled" />]],
		},
		{
			title: "Multiline standard (rich)",
			fields: [[<TextField multiline fullWidth label="Rich" error />]],
		},
	]

	return (
		<ExampleWrapper title="Eksempel på tekstinput">
			<Grid container>
				{sections.map((section, index) => (
					<TextFieldSection key={index} title={section.title} fields={section.fields} />
				))}
			</Grid>
		</ExampleWrapper>
	)
}
