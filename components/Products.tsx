import { IProductItems } from '@/constants/product.items'
import { useFilter } from '@/hooks/useFilter'
import { useIdChecker } from '@/hooks/useIdChecker'
import { RootState } from '@/store/store'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import NotFound from './ui/NotFound'
import ProductCard from './ui/ProductCard'

interface IProductsProps {
	sortingValue?: string | boolean
	value?: any
	scrollable: boolean
	items: IProductItems[]
}

const Products: React.FC<IProductsProps> = ({
	sortingValue,
	value,
	items,
	scrollable,
}) => {
	const favoritesProducts = useSelector(
		(state: RootState) => state.favoriteReducer.items
	)

	const cartProducts = useSelector(
		(state: RootState) => state.cartReducer.items
	)

	// const favorite = (id: number): 'heart' | 'hearto' => {
	// 	if (favoritesProducts.find(e => e.id === id)) return 'heart'
	// 	else return 'hearto'
	// }

	const cart = (id: number): 'pluscircle' | 'checkcircle' => {
		if (cartProducts.find(e => e.id === id)) return 'checkcircle'
		else return 'pluscircle'
	}

	const [mutateArray] = useFilter(items, value, sortingValue)

	const [inFavorite, inCart] = useIdChecker()

	if (!mutateArray.length) return <NotFound />

	if (scrollable)
		return (
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				removeClippedSubviews={true}
				contentContainerStyle={{
					display: 'flex',
					marginVertical: 15,
					flexDirection: 'row',
					gap: 15,
					paddingHorizontal: 10,
					paddingBottom: 10,
					position: 'relative',
				}}
			>
				{mutateArray.map(e => (
					<ProductCard
						key={e.id}
						id={e.id}
						srcImg={e.srcImg}
						title={e.title}
						description={e.description}
						cost={e.cost}
						isFavorite={inFavorite(e.id) ? 'heart' : 'hearto'}
						isCart={inCart(e.id) ? 'checkcircle' : 'pluscircle'}
						viewItem={e}
					/>
				))}
			</ScrollView>
		)
	else
		return (
			<View
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					rowGap: 15,
				}}
			>
				{mutateArray.map(e => (
					<ProductCard
						key={e.id}
						id={e.id}
						srcImg={e.srcImg}
						title={e.title}
						description={e.description}
						cost={e.cost}
						isFavorite={inFavorite(e.id) ? 'heart' : 'hearto'}
						isCart={inCart(e.id) ? 'checkcircle' : 'pluscircle'}
						viewItem={e}
					/>
				))}
			</View>
		)
}

export default Products

const styles = StyleSheet.create({})
