import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favorite.slice'
import viewReducer from './slices/view.slice'

const reducer = combineReducers({
	favoriteReducer,
	viewReducer,
})

export const store = configureStore({
	reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
