import { IProductItems } from '@/constants/product.items'
import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
	name: 'view',
	initialState: {
		viewItem: {} as Partial<IProductItems>,
	},
	reducers: {
		addViewItem: (state, action) => {
			state.viewItem = action.payload
		},

		removeViewItem: state => {
			state.viewItem = {}
		},
	},
})

export const { addViewItem, removeViewItem } = viewSlice.actions

export default viewSlice.reducer
