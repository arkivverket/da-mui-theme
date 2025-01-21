import * as React from "react"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Menu, { MenuProps } from "@mui/material/Menu"
import { Box, buttonBaseClasses, MenuItem } from "@mui/material"
import { KeyboardArrowDownOutlined } from "@mui/icons-material"

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.customShape.borderRadiusFull,
	display: "flex",
	alignItems: "center",
	fontSize: theme.typography.label.fontSize,
	height: theme.spacing(4),
	[`&.${buttonBaseClasses.root}`]: {
		padding: theme.spacing(1, 1.5),
	},
	[`& .MuiButton-startIcon`]: {
		marginLeft: 0,
	},
}))

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: theme.customShape.borderRadiusSm,
		marginTop: theme.spacing(1),
		minWidth: 180,
		boxShadow: theme.customShadows.variant1,
		"& .MuiMenu-list": {
			padding: theme.spacing(1, 0),
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
		},
	},
}))

interface ActionChipProps {
	label: string
	startIcon?: React.ReactNode
	menuItems: Array<React.ReactNode>
}

export default function ActionChip({ label, startIcon, menuItems }: ActionChipProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box>
			<StyledButton
				id="action-chip-button"
				aria-controls={open ? "action-chip-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="outlined"
				disableElevation
				onClick={handleClick}
				startIcon={startIcon}
				endIcon={<KeyboardArrowDownOutlined />}
			>
				<Box component="span" className="MuiChip-label MuiChip-labelMedium">
					<Box>{label}</Box>
				</Box>
			</StyledButton>
			<StyledMenu
				id="action-chip-menu"
				MenuListProps={{
					"aria-labelledby": "action-chip-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{menuItems.map((item, index) => (
					<MenuItem key={index}>{item}</MenuItem>
				))}
			</StyledMenu>
		</Box>
	)
}
