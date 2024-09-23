import ProductCard from '@/components/ui/ProductCard'
import { items } from '@/constants/product.items'
import { useFilter } from '@/hooks/useFilter'

import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

interface IProductsProps {
	sortingValue?: string
}

const Products: React.FC<IProductsProps> = ({ sortingValue }) => {
	const [mutateArray] = useFilter(items, sortingValue)

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
