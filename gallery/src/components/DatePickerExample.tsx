import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { nbNO } from "@mui/x-date-pickers/locales"
import dayjs from "dayjs"
import "dayjs/locale/nb"
import { ExampleWrapper } from "./ExampleWrapper"
import { InnerPaper } from "./InnerPaper"

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
					<DatePicker />
				</InnerPaper>
			</ExampleWrapper>
		</LocalizationProvider>
	)
}
