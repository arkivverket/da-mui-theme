import { Box, Grid, Paper, Stack, styled, Typography } from "@mui/material"
import { SystemProps } from "@mui/system"

const ColorDropRectangle = styled("div")({
	boxSizing: "border-box",
	position: "relative",

	border: "2px solid #F5F5F5",
	boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.1)",
	borderRadius: "20px 20px 20px 0px",
})

const ColorDropStack = styled(Stack)(({ theme }) => ({
	borderColor: theme.palette.secondary.main,
	borderWidth: "1px",
	borderStyle: "solid",
	padding: "12px",
	margin: "12px",
	alignItems: "center",
	justifyContent: "center",

	"&:first-child": {
		marginLeft: "0px",
	},

	"& > .MuiTypography-root": {
		fontWeight: "bold",
		textAlign: "center",
	},
}))

const ColorDrop = ({ name, path, size, ...props }: { name: string; path: string; size: number } & SystemProps<{}>) => {
	const paletteName = `${path}.${name.toLowerCase()}`
	const boxSize = `${size}px`

	return (
		<ColorDropStack {...props}>
			<ColorDropRectangle sx={{ backgroundColor: paletteName, height: boxSize, width: boxSize }} />
			<Typography variant="body1">{name}</Typography>
		</ColorDropStack>
	)
}

const PaletteDisplay = ({ name, path }: { name: string; path: string }) => {
	return (
		<Stack sx={{ maxWidth: { xs: "100%", md: "80%", xl: "60%" } }}>
			<Typography variant="h4">{name}</Typography>
			<Box display="grid" gridTemplateAreas={'"a a b c" "a a d e"'}>
				<ColorDrop path={path} name="Main" size={100} gridArea="a" />
				<ColorDrop path={path} name="Dark" size={50} gridArea="b" />
				<ColorDrop path={path} name="50p" size={50} gridArea="c" />
				<ColorDrop path={path} name="Light" size={50} gridArea="d" />
				<ColorDrop path={path} name="25p" size={50} gridArea="e" />
			</Box>
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
			</Grid>
		</Paper>
	)
}
