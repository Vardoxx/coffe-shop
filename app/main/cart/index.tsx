import Wrapper from '@/app/--wrapper'
import Products from '@/components/Products'
import Button from '@/components/ui/Button'
import { RootState } from '@/store/store'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Cart = () => {
	const cartItems = useSelector((state: RootState) => state.cartReducer.items)
	const totalCost = useSelector(
		(state: RootState) => state.cartReducer.totalCost
	)

	const visa = require('../../../assets/visa.png')
	const masterCard = require('../../../assets/masterCard.png')

	return (
		<View style={styles.container}>
			<View style={{ paddingTop: 30 }}>
				<Wrapper>
					<Text style={{ fontWeight: '700', fontSize: 20, marginBottom: 15 }}>
						Cart
					</Text>
				</Wrapper>
				<Products productsType='cart' items={cartItems} />
			</View>
			<Wrapper>
				<Text style={{ fontWeight: '500', fontSize: 15, marginBottom: 5 }}>
					Payment:
				</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 15,
						height: 33,
						marginBottom: 30,
					}}
				>
					<Image style={{ marginBottom: 30 }} source={visa} />
					<Image
						style={{ marginBottom: 30, height: 24, width: 38 }}
						resizeMode='stretch'
						source={masterCard}
					/>
				</View>
				<View>
					<Button
						onPress={() => console.log(cartItems)}
						title={`Buy | ${totalCost} ₽`}
						link={false}
					/>
				</View>
			</Wrapper>
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBottom: 60,
		gap: 50,
		height: '95%',
	},
	dataContainer: {
		display: 'flex',
	},
})
