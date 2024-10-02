import Wrapper from '@/app/--wrapper'
import Products from '@/components/Products'
import { RootState } from '@/store/store'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'

const Favorite = () => {
	const favoritesProduct = useSelector(
		(state: RootState) => state.favoriteReducer.items
	)
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Wrapper>
				<View style={{ paddingTop: 30 }}>
					<Text style={{ fontWeight: '700', fontSize: 20, marginBottom: 15 }}>
						Favorites
					</Text>
					<Products productsType='default' items={favoritesProduct} />
				</View>
			</Wrapper>
		</ScrollView>
	)
}

export default Favorite

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		paddingBottom: 90,
		gap: 50,
	},
})
