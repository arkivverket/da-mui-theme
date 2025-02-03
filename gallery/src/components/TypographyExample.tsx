import { Stack, Typography } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const TypographyExample = () => {
	const tokens = [
		{
			title: "Display Huge",
			token: "displayHuge",
		},
		{
			title: "Display 1",
			token: "display1",
		},
		{
			title: "Display 2",
			token: "display2",
		},
		{
			title: "Display 3",
			token: "display3",
		},
		{
			title: "Display 4",
			token: "display4",
		},

		{
			title: "Section",
			token: "section",
		},
		{
			title: "Body Large",
			token: "bodyLarge",
		},
		{
			title: "Body Large Bold",
			token: "bodyLargeBold",
		},
		{
			title: "Caption",
			token: "caption",
		},
		{
			title: "Caption bold / button link small",
			token: "captionBold",
		},
		{
			title: "label",
			token: "label",
		},
		{
			title: "Label bold",
			token: "labelBold",
		},
		{
			title: "Label mono",
			token: "labelMono",
		},
		{
			title: "Body mono",
			token: "bodyMono",
		},
	] as const

	return (
		<ExampleWrapper title="Eksempel på Typografi">
			<Stack spacing={2}>
				{tokens.map(({ token, title }, idx) => (
					<Typography key={idx} variant={token}>
						{title}
					</Typography>
				))}
			</Stack>
		</ExampleWrapper>
	)
}
