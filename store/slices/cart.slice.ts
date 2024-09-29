import { IProductItems } from '@/constants/product.items'
import { createSlice } from '@reduxjs/toolkit'
import { Toast } from 'toastify-react-native'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [] as IProductItems[],
	},
	reducers: {
		addToCart: (state, action) => {
			const product: IProductItems = action.payload

			const existingItemIndex = state.items.findIndex(i => i.id === product.id)

			if (existingItemIndex >= 0) {
				state.items.splice(existingItemIndex, 1)
				Toast.warn('Product remove from cart!', 'top')
			} else {
				state.items.push(product as any)
				Toast.success('Product add to cart!', 'top')
			}
		},
	},
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
