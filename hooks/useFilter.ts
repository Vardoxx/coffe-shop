import { IProductItems } from '@/constants/product.items'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const useFilter = (
	items: IProductItems[],
	value: keyof IProductItems,
	sortingValue: string | boolean | undefined
) => {
	const [mutateArray, setMutateArray] = useState<IProductItems[]>(items)

	const favorites = useSelector(
		(state: RootState) => state.favoriteReducer.items
	)

	useEffect(() => {
		let sortingArray = [...mutateArray]
		switch (sortingValue) {
			case sortingValue:
				sortingArray = [...items]
				sortingArray = sortingArray.filter(e => e[value] === sortingValue)
				break
			default:
				break
		}
		setMutateArray(sortingArray)
	}, [sortingValue, value, favorites])

	return [mutateArray]
}
