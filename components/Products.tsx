import { IProductItems } from '@/constants/product.items'
import { useFilter } from '@/hooks/useFilter'
import { useIdChecker } from '@/hooks/useIdChecker'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import NotFound from './ui/NotFound'
import ProductCard from './ui/ProductCard'

interface IProductsProps {
	sortingValue?: string | boolean
	value?: any
	items: IProductItems[]
	productsType: 'cart' | 'scrollable' | 'default'
}

const Products: React.FC<IProductsProps> = ({
	sortingValue,
	value,
	items,
	productsType,
}) => {
	const [mutateArray] = useFilter(items, value, sortingValue)

	const [inFavorite, inCart] = useIdChecker()

	if (!mutateArray.length) {
		if (productsType === 'cart') return <NotFound title='Your cart empty' />
		if (productsType === 'default')
			return <NotFound title='Your favorites list empty' />
		else return <NotFound title='Not found' />
	}

	if (productsType === 'scrollable')
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
						productType='default'
					/>
				))}
			</ScrollView>
		)
	if (productsType === 'default')
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
						productType='default'
					/>
				))}
			</View>
		)
	if (productsType === 'cart') {
		return (
			<ScrollView
				style={{
					width: '100%',
					height: 500,
					display: 'flex',
					flexDirection: 'column',
				}}
				contentContainerStyle={{
					display: 'flex',
					alignItems: 'center',
					gap: 15,
					paddingBottom: 30,
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
						cupSize={e.cupSize}
						sugarLvl={e.sugarLvl}
						quantity={e.quantity}
						productType='cart'
					/>
				))}
			</ScrollView>
		)
	}
}

export default Products

const styles = StyleSheet.create({})
