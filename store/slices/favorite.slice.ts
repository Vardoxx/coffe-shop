import { IProductItems } from '@/constants/product.items'
import { createSlice } from '@reduxjs/toolkit'
import { Toast } from 'toastify-react-native'

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		items: [] as IProductItems[],
	},
	reducers: {
		addToFavorites: (state, action) => {
			const product: IProductItems = action.payload

			const existingItemIndex = state.items.findIndex(i => i.id === product.id)

			if (existingItemIndex >= 0) {
				state.items.splice(existingItemIndex, 1)
				Toast.warn('Product remove from favorite!', 'top')
			} else {
				state.items.push(product as any)
				Toast.success('Product add to favorite!', 'top')
			}
		},
	},
})

export const { addToFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer
