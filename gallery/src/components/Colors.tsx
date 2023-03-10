import { Box, Grid, Paper, Stack, StackProps, styled, Typography } from "@mui/material"

const ColorDropRectangle = styled("div")({
	boxSizing: "border-box",
	position: "relative",

	border: "2px solid #F5F5F5",
	boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.1)",
	borderRadius: "20px 20px 20px 0px",

	width: "50px",
	height: "50px",

	"&.big": {
		width: "100px",
		height: "100px",
	},
})

const ColorDropStack = styled(Stack)(({ theme }) => ({
	borderColor: theme.palette.secondary.main,
	borderWidth: "1px",
	borderStyle: "solid",
	padding: "12px",
	alignItems: "center",
	justifyContent: "center",

	"&:first-of-type": {
		marginLeft: "0px",
	},

	"& > .MuiTypography-root": {
		fontWeight: "bold",
		textAlign: "center",
	},
}))

const ColorDrop = ({ name, path, big, ...props }: { big?: boolean; name: string; path: string } & StackProps) => {
	const paletteName = `${path}.${name.toLowerCase()}`

	return (
		<ColorDropStack {...props}>
			<ColorDropRectangle sx={{ backgroundColor: paletteName }} className={big ? "big" : ""} />
			<Typography variant="body1">{name}</Typography>
		</ColorDropStack>
	)
}

const PaletteDisplay = ({ name, path }: { name: string; path: string }) => {
	return (
		<Stack sx={{ maxWidth: { xs: "100%", md: "80%", xl: "60%" } }}>
			<Typography variant="h4">{name}</Typography>
			<Box display="grid" gridTemplateAreas={{ xs: '"a a" "b c" "d e"', md: '"a a b c" "a a d e"' }}>
				<ColorDrop path={path} name="Main" big gridArea="a" />
				<ColorDrop path={path} name="Dark" gridArea="b" />
				<ColorDrop path={path} name="50p" gridArea="c" />
				<ColorDrop path={path} name="Light" gridArea="d" />
				<ColorDrop path={path} name="25p" gridArea="e" />
			</Box>
		</Stack>
	)
}

const TextPaletteDisplay = ({}) => {
	return (
		<Stack sx={{ maxWidth: { xs: "100%", md: "80%", xl: "60%" } }}>
			<Typography variant="h4">Text</Typography>
			<Box display="grid" gridTemplateAreas={'"a a b c" "a a d e" "a a f g"'}>
				<ColorDrop path={"text"} name="Primary" big gridArea="a" />
				<ColorDrop path={"text"} name="Secondary" gridArea="b" />
				<ColorDrop path={"text"} name="50p" gridArea="c" />
				<ColorDrop path={"text"} name="Disabled" gridArea="d" />
				<ColorDrop path={"text"} name="25p" gridArea="e" />
				<ColorDrop path={"text"} name="White" gridArea="f" />
			</Box>
		</Stack>
	)
}

const BackgroundPaletteDisplay = ({}) => {
	const dropSx = {
		justifyContent: "flex-start",
	}

	return (
		<Stack sx={{ maxWidth: { xs: "100%", md: "80%", xl: "60%" } }}>
			<Typography variant="h4">Backgrounds</Typography>
			<Stack>
				<ColorDrop path={"background"} name="Black" direction={"row"} sx={{ ...dropSx }} />
				<ColorDrop path={"background"} name="White" direction={"row"} sx={{ ...dropSx }} />
				<ColorDrop path={"background"} name="Disabled" direction={"row"} sx={{ ...dropSx }} />
				<ColorDrop path={"background"} name="Border" direction={"row"} sx={{ ...dropSx }} />
				<ColorDrop path={"background"} name="Hover" direction={"row"} sx={{ ...dropSx }} />
				<ColorDrop path={"background"} name="Selected" direction={"row"} sx={{ ...dropSx }} />
				<ColorDrop path={"background"} name="Primary" direction={"row"} sx={{ ...dropSx }} />
			</Stack>
		</Stack>
	)
}

export const Colors = () => {
	return (
		<Paper variant="padded">
			<Typography variant="h2">Fargepalett</Typography>

			<Grid container>
				<Grid item xs={6}>
					<PaletteDisplay name="Primary colors" path="primary" />
				</Grid>
				<Grid item xs={6}>
					<PaletteDisplay name="Info" path="info" />
				</Grid>
				<Grid item xs={6}>
					<PaletteDisplay name="Secondary colors" path="secondary" />
				</Grid>
				<Grid item xs={6}>
					<PaletteDisplay name="Error" path="error" />
				</Grid>

				<Grid item xs={6}>
					<TextPaletteDisplay />
				</Grid>

				<Grid item xs={6}>
					<PaletteDisplay name="Warning" path="warning" />
				</Grid>
				<Grid item xs={6}>
					<PaletteDisplay name="Success" path="success" />
				</Grid>
				<Grid item xs={6}>
					<BackgroundPaletteDisplay />
				</Grid>
			</Grid>
		</Paper>
	)
}
