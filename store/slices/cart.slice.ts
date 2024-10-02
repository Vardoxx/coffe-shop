import { IProductItems } from '@/constants/product.items'
import { createSlice } from '@reduxjs/toolkit'
import { Toast } from 'toastify-react-native'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [] as IProductItems[],
		totalCost: 0 as number,
	},
	reducers: {
		addToCart: (state, action) => {
			const product: IProductItems = action.payload

			const existingItemIndex = state.items.findIndex(i => i.id === product.id)

			if (existingItemIndex >= 0) {
				state.items.splice(existingItemIndex, 1)
				Toast.warn('Product remove from cart!', 'top')
			} else {
				state.items.push({ ...product, quantity: 1 } as any)
				Toast.success('Product add to cart!', 'top')
			}
			state.totalCost += product.cost
		},

		incrementQuantity: (state, action) => {
			const product = action.payload
			const existingItemIndex = state.items.findIndex(i => i.id === product.id)

			if (existingItemIndex >= 0) {
				const item = state.items[existingItemIndex]
				item.quantity!++
				state.totalCost += item.cost
			}
		},

		decrementQuantity: (state, action) => {
			const productId = action.payload.id
			const existingItemIndex = state.items.findIndex(i => i.id === productId)

			if (existingItemIndex >= 0 && productId) {
				const item = state.items[existingItemIndex]
				item.quantity!--
				state.totalCost -= item.cost
				if (item.quantity! <= 0) {
					state.items.splice(existingItemIndex, 1)
					Toast.warn('Product remove from cart!', 'top')
				}
			}
		},
	},
})

export const { addToCart, incrementQuantity, decrementQuantity } =
	cartSlice.actions

export default cartSlice.reducer
