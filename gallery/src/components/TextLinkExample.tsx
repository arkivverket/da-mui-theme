import { Link, Typography } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const TextLinkExample = () => {
	return (
		<ExampleWrapper title="Eksempel på tekstlenke">
			<Typography variant="body1">
				Ved hjelp av kunstig intelligens, kan du nå søke på nye måter. Der det tidligere kun var mulig å søke på
				tekstlig beskrivelse (<Link href="#">metadata</Link>) av bildet, kan du nå også søke med{" "}
				<Link href="#">kunstig intelligens</Link> som tolker motivet. Det betyr at du kan søke på mann med hatt foran
				en blå bil, og faktisk få treff uten at det er påført metadata.
			</Typography>
		</ExampleWrapper>
	)
}
