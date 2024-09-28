import Button from '@/components/ui/Button'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
	const backGround = require('../assets/bg.png')
	const coffeeBag = require('../assets/coffeeBag.png')
	return (
		<ImageBackground
			source={backGround}
			resizeMode='cover'
			style={styles.container}
		>
			<View style={styles.contentContainer}>
				<Image source={coffeeBag} />
				<Text
					style={{
						color: 'white',
						fontSize: 24,
						fontWeight: 'semibold',
						textAlign: 'center',
						width: 200,
					}}
				>
					Coffee so good, your taste buds will love it
				</Text>
				<Text
					style={{
						color: 'white',
						fontSize: 14,
						fontWeight: 'medium',
						textAlign: 'center',
						width: 250,
					}}
				>
					The best grain, the finest rosa, the most powerful flavor.
				</Text>

				<Button link={true} href='/main/home' title='Get started' />
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D4A56D',
		zIndex: 1000,
	},

	contentContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
	},
})
