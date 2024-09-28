import Wrapper from '@/app/--wrapper'
import { Feather, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
	return (
		<Wrapper>
			<View style={styles.header}>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
						gap: 5,
					}}
				>
					<Feather name='map-pin' size={14} color='#00512C' />
					<Text style={{ fontWeight: '600', borderBottomWidth: 1 }}>
						Jakarta, Indonesia
					</Text>
				</View>
				<Ionicons name='notifications-outline' size={30} color='#00512C' />
				<Text
					style={{
						position: 'absolute',
						bottom: 5,
						fontWeight: '500',
						color: 'gray',
					}}
				>
					Good morning,
					<Text style={{ fontWeight: '700', color: 'black' }}>Alex</Text>!
				</Text>
			</View>
		</Wrapper>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		minHeight: 66 + 33,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})
