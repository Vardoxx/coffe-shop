import Wrapper from '@/app/--wrapper'
import Products from '@/components/Products'
import CategoryButton from '@/components/ui/CategoryButton'
import { items as categoryItems } from '@/constants/category.items'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Categories = () => {
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
						isActive={active === e.value ? true : false}
					/>
				))}
			</ScrollView>
			<Products sortingValue={active} />
		</View>
	)
}

export default Categories

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
