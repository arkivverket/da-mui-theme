import { Box } from "@mui/material"
import { AddOutlined as AddIcon, RemoveOutlined as RemoveIcon } from "@mui/icons-material"

const ExpandIcon: React.FC = () => {
	return (
		<Box
			sx={{
				".Mui-expanded & > .collapsIconWrapper": {
					display: "none",
				},
				".expandIconWrapper": {
					display: "none",
				},
				".Mui-expanded & > .expandIconWrapper": {
					display: "block",
				},
			}}
		>
			<Box className="expandIconWrapper">
				<RemoveIcon />
			</Box>
			<Box className="collapsIconWrapper">
				<AddIcon />
			</Box>
		</Box>
	)
}

export default ExpandIcon
