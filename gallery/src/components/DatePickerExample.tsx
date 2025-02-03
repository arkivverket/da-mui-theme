import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { ExampleWrapper } from "./ExampleWrapper"
import { InnerPaper } from "./InnerPaper"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import "dayjs/locale/nb"
import { nbNO } from "@mui/x-date-pickers/locales"

dayjs.locale("nb")

export const DatePickerExample = () => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale="nb"
			localeText={nbNO.components.MuiLocalizationProvider.defaultProps.localeText}
		>
			<ExampleWrapper title="Eksempel på DatePickers">
				<InnerPaper>
					<DatePicker
						slotProps={{
							actionBar: {
								actions: ["clear"],
							},
						}}
						sx={{
							"& .MuiInputBase-input": {
								textTransform: "lowercase",
							},
						}}
					/>
				</InnerPaper>
			</ExampleWrapper>
		</LocalizationProvider>
	)
}
