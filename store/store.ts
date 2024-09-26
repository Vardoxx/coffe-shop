import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favorite.slice'

const reducer = combineReducers({
	favoriteReducer,
})

export const store = configureStore({
	reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
