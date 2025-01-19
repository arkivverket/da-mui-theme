import { Box, Slider } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const SliderExample = () => {
	return (
		<ExampleWrapper title="Eksempel på Slider">
			<Box width={500}>
				<Slider />
			</Box>
		</ExampleWrapper>
	)
}
