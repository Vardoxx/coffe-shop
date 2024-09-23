import { Href, Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface IButtonProps {
	title: string
	href?: Href<string | object>
	width?: number
	onPress?: () => void
}

const Button: React.FC<IButtonProps> = ({ onPress, title, href, width }) => {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Link href={href!}>
				<Text style={styles.text}>{title}</Text>
			</Link>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 20,
		elevation: 3,
		backgroundColor: '#00512C',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
})

export default Button
