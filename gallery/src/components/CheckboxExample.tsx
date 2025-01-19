import { Box, Checkbox, Grid2 as Grid } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"
import { useState } from "react"

export const CheckboxExample = () => {
	const images = Array.from({ length: 4 }, (_, i) => `https://picsum.photos/200/300?random=${i}`)
	const [selectedImages, setSelectedImages] = useState<string[]>([])

	return (
		<ExampleWrapper title="Checkbox">
			<Grid>
				<Checkbox />
				<Checkbox indeterminate />
				<Checkbox disabled />
				<Checkbox checked disabled />
			</Grid>
		</ExampleWrapper>
	)
}
