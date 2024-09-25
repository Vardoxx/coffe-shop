import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotFound = () => {
	return (
		<View style={styles.container}>
			<Entypo name='emoji-sad' size={80} color='black' />
			<Text style={styles.text}>Not Found</Text>
		</View>
	)
}

export default NotFound

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		gap: 15,
		alignItems: 'center',
		justifyContent: 'center',
		height: 200,
	},
	text: {
		fontSize: 20,
		fontWeight: '600',
	},
})
