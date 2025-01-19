import { Stack, Tab, Tabs } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import { useState } from "react"

export const TabExample = () => {
	const [tabValue, setTabValue] = useState(0)

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue)
	}

	return (
		<ExampleWrapper title="Eksempel på Tabs">
			<Stack spacing={2} sx={{ maxWidth: "400px" }}>
				<Tabs onChange={handleChange} value={tabValue} aria-label="tabs default example">
					<Tab label="Item One" value={0} />
					<Tab label="Item Two" value={1} />
					<Tab label="Item Three" value={2} />
				</Tabs>

				<Tabs color="content" onChange={handleChange} value={tabValue} aria-label="tabs in content example">
					<Tab label="Item One" value={0} />
					<Tab label="Item Two" value={1} />
					<Tab label="Item Three" value={2} />
				</Tabs>
			</Stack>
		</ExampleWrapper>
	)
}
