import { useEffect, useState } from 'react'

export const useFilter = (
	items: Array<any>,
	value: string,
	sortingValue: string | boolean | undefined
) => {
	const [mutateArray, setMutateArray] = useState(items)

	useEffect(() => {
		let sortingArray = [...mutateArray]
		switch (sortingValue) {
			case sortingValue:
				sortingArray = [...items]
				sortingArray = sortingArray.filter(e =>
					sortingValue === 'string'
						? e[value].toLowerCase().includes(sortingValue)
						: e[value] === sortingValue
				)
				break
			default:
				break
		}
		setMutateArray(sortingArray)
	}, [sortingValue, value])

	return [mutateArray]
}
