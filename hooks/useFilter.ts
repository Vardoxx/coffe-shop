import { useEffect, useState } from 'react'

export const useFilter = (
	items: Array<any>,
	sortingValue: string | undefined
) => {
	const [mutateArray, setMutateArray] = useState(items)

	useEffect(() => {
		let sortingArray = [...mutateArray]
		switch (sortingValue) {
			case sortingValue:
				sortingArray = [...items]
				sortingArray = sortingArray.filter(e => e.title.includes(sortingValue))
				break
		}
		setMutateArray(sortingArray)
	}, [sortingValue])

	return [mutateArray]
}
