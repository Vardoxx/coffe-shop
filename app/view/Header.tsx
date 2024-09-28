import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Wrapper from '../--wrapper'

const Header = ({ srcImg, title, description }: any) => {
	const coffee = require('../../assets/coffee5.png')
	return (
		<View style={{ width: '100%', height: '60%' }}>
			<ImageBackground
				resizeMode='cover'
				style={styles.container}
				source={srcImg}
			>
				<View style={{ position: 'absolute', bottom: '40%' }}>
					<Wrapper>
						<View
							style={{
								display: 'flex',
								gap: 5,
								width: 'auto',
							}}
						>
							<Text
								style={{
									fontSize: 30,
									color: 'white',
									fontWeight: 'semibold',
									textShadowColor: 'black',
									textShadowRadius: 4,
								}}
							>
								{title}
							</Text>
							<Text
								style={{
									fontSize: 14,
									color: 'white',
									fontWeight: 'medium',
									textShadowColor: 'black',
									textShadowRadius: 4,
								}}
							>
								{description}
							</Text>
						</View>
						<View></View>
					</Wrapper>
				</View>
			</ImageBackground>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		position: 'relative',
	},
})
