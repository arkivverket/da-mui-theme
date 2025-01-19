import SearchBar from "@da-mui-theme/components/SearchBar"
import { ExampleWrapper } from "./ExampleWrapper"

export const SearchBarExample = () => {
	return (
		<ExampleWrapper title="Eksempel på søkefelt">
			<SearchBar photoSearch onPhotoSearch={() => alert("onPhotoSearch callback")} />
		</ExampleWrapper>
	)
}
