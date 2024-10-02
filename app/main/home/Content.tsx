import Wrapper from '@/app/--wrapper'
import Products from '@/components/Products'
import CategoryButton from '@/components/ui/CategoryButton'
import { items as categoryItems } from '@/constants/category.items'
import { items } from '@/constants/product.items'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Content = () => {
	const [active, setActive] = useState('Cappuccino')

	return (
		<View>
			<Wrapper>
				<Text style={styles.title}>Categories</Text>
			</Wrapper>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					display: 'flex',
					flexDirection: 'row',
					gap: 15,
					paddingVertical: 10,
					paddingHorizontal: 5,
				}}
			>
				{categoryItems.map(e => (
					<CategoryButton
						key={e.value}
						title={e.value}
						onPress={() => setActive(e.value)}
						isActive={active === e.value}
						icon={true}
					/>
				))}
			</ScrollView>
			<Products
				productsType='scrollable'
				items={items}
				value={'title'}
				sortingValue={active}
			/>
			<Wrapper>
				<Text style={styles.title}>Special Offer</Text>
			</Wrapper>
			<Products
				productsType='scrollable'
				items={items}
				value={'specialOffer'}
				sortingValue={true}
			/>
		</View>
	)
}

export default Content

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
	},
	title: {
		fontWeight: '700',
		fontSize: 20,
		marginBottom: 15,
	},
})
