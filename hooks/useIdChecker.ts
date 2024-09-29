import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const useIdChecker = () => {
	const favoritesProducts = useSelector(
		(state: RootState) => state.favoriteReducer.items
	)

	const cartProducts = useSelector(
		(state: RootState) => state.cartReducer.items
	)

	const viewProduct = useSelector(
		(state: RootState) => state.viewReducer.viewItem
	)

	const inFavorite = (id: number) => {
		if (favoritesProducts.find(e => e.id === id)) return true
		else return false
	}

	const inCart = (id: number) => {
		if (cartProducts.find(e => e.id === id)) return true
		else return false
	}

	const inView = (id: number) => {
		if (cartProducts.find(e => e.id === id)) return true
		else return false
	}

	return [inFavorite, inCart, inView]
}
