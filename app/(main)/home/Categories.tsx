import CategoryButton from '@/components/ui/CategoryButton'
import { items } from '@/constants/category.items'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Categories = () => {
	const [active, setActive] = useState('Cappuccino')
	return (
		<View>
			<Text style={styles.title}>Categories</Text>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					display: 'flex',
					marginVertical: 15,
					flexDirection: 'row',
					gap: 15,
					paddingVertical: 10,
					paddingLeft: 5,
				}}
			>
				{items.map(e => (
					<CategoryButton
						key={e.value}
						title={e.value}
						onPress={() => setActive(e.value)}
						isActive={active === e.value ? true : false}
					/>
				))}
			</ScrollView>
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
