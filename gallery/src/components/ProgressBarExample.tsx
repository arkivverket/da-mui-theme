import { useEffect, useState } from "react"
import { ExampleWrapper } from "./ExampleWrapper"
import ProgressBar from "@da-mui-theme/components/ProgressBar"

export const ProgressBarExample = () => {
	const [percentage, setPercentage] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setPercentage(prevPercentage => {
				if (prevPercentage === 100) {
					return 0
				}
				return prevPercentage + 10
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<ExampleWrapper title="Eksempel på Progress Bar">
			<ProgressBar percentage={10} showLabel />
			<ProgressBar percentage={20} showLabel />
			<ProgressBar percentage={30} showLabel />
			<ProgressBar percentage={40} showLabel />
			<ProgressBar percentage={50} showLabel />
			<ProgressBar percentage={percentage} showLabel />
		</ExampleWrapper>
	)
}
