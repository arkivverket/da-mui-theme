import React, { useState } from "react"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import { Avatar, Box, Chip, IconButton, InputAdornment, outlinedInputClasses, Tooltip } from "@mui/material"
import { SearchOutlined as SearchIcon, CameraAltOutlined as CameraIcon, CloseOutlined as ClearIcon } from "@mui/icons-material"

const DEFAULT_PHOTO_SEARCH_TITLE = "Søk med bilde"

interface SearchBarProps extends Omit<TextFieldProps<"outlined">, "variant"> {
	value?: string
	photoSearch?: boolean | { enabled: boolean; title?: string } // Enables photo search functionality
	onPhotoSearch?: (file: File | null) => void // Callback for photo search
}

const StyledSearchBar = styled(TextField)<SearchBarProps>(({ theme }) => ({
	[`& .${outlinedInputClasses.root}`]: {
		borderRadius: "625rem",
		[`& .${outlinedInputClasses.disabled}`]: {
			backgroundColor: theme.palette.borders.disabled,
		},
	},
}))

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>((props, ref) => {
	const { onChange, value: valueProp, photoSearch, onPhotoSearch, ...otherProps } = props

	const [value, setValue] = useState<string>(valueProp ?? "")
	const [selectedImage, setSelectedImage] = useState<File | null>(null)
	const [isReadOnly, setIsReadOnly] = useState(false)

	const photoSeachTitle =
		typeof photoSearch === "boolean" ? DEFAULT_PHOTO_SEARCH_TITLE : photoSearch?.title || DEFAULT_PHOTO_SEARCH_TITLE

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		onChange?.(event)
	}

	const handleClear = () => {
		setValue("")
		setIsReadOnly(false)

		if (onChange) {
			onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
		}
	}

	const handlePhotoClick = () => {
		const fileInput = document.createElement("input")
		fileInput.type = "file"
		fileInput.accept = "image/*"
		fileInput.onchange = (event: Event) => {
			const target = event.target as HTMLInputElement
			const file = target.files?.[0] || null
			setValue("")
			setSelectedImage(file)
			setIsReadOnly(true)
			onPhotoSearch?.(file)
		}
		fileInput.click()
	}

	const handleRemoveImage = () => {
		setSelectedImage(null)
		setIsReadOnly(false)
	}

	return (
		<Box style={{ position: "relative" }}>
			<StyledSearchBar
				inputRef={ref}
				variant="outlined"
				value={valueProp ?? value}
				onChange={handleChange}
				slotProps={{
					input: {
						readOnly: isReadOnly,
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
						endAdornment: (
							<>
								<InputAdornment position="end" sx={{ visibility: value ? "visible" : "hidden" }}>
									<IconButton onClick={handleClear}>
										<ClearIcon />
									</IconButton>
								</InputAdornment>
								{photoSearch && (typeof photoSearch === "boolean" || photoSearch?.enabled) && (
									<InputAdornment position="end">
										<Tooltip title={photoSeachTitle} arrow>
											<IconButton onClick={handlePhotoClick}>
												<CameraIcon />
											</IconButton>
										</Tooltip>
									</InputAdornment>
								)}
							</>
						),
					},
				}}
				{...otherProps}
			/>
			{selectedImage && (
				<Chip
					avatar={<Avatar alt={selectedImage.name} src={URL.createObjectURL(selectedImage)} />}
					label="Photo"
					onDelete={handleRemoveImage}
					variant="input"
					sx={{
						position: "absolute",
						top: "50%",
						left: "30%",
						transform: "translate(-50%, -50%)",
						zIndex: 10,
					}}
				/>
			)}
		</Box>
	)
})

export default SearchBar
