import SearchBar from "@digitalarkivet/mui-theme/components/SearchBar"
import { ExampleWrapper } from "./ExampleWrapper"

export const SearchBarExample = () => {
	return (
		<ExampleWrapper title="Eksempel på søkefelt">
			<SearchBar photoSearch handlePhotoClick={() => alert("handlePhotoClick callback")} />
		</ExampleWrapper>
	)
}
