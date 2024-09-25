import ProductCard from '@/components/ui/ProductCard'
import { items } from '@/constants/product.items'
import { useFilter } from '@/hooks/useFilter'

import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import NotFound from './ui/NotFound'

interface IProductsProps {
	sortingValue?: string | boolean
	value: any
}

const Products: React.FC<IProductsProps> = ({ sortingValue, value }) => {
	const [mutateArray] = useFilter(items, value, sortingValue)
	if (!mutateArray.length) return <NotFound />

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
					onPress={() => console.log(e.id)}
				/>
			))}
		</ScrollView>
	)
}

export default Products

const styles = StyleSheet.create({})
