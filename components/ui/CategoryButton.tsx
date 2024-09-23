import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ICategoryButtonProps {
	title: string
	onPress?: () => void
	isActive: boolean
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({
	title,
	onPress,
	isActive,
}) => {
	return (
		<Pressable
			onPress={onPress}
			style={isActive ? styles.containerActive : styles.container}
		>
			<Ionicons
				name='cafe-outline'
				size={24}
				color={isActive ? 'white' : 'black'}
			/>
			<Text style={{ color: isActive ? 'white' : 'black' }}>{title}</Text>
		</Pressable>
	)
}

export default CategoryButton

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		padding: 9,
		alignItems: 'center',
		backgroundColor: 'white',
		minWidth: 'auto',
		borderRadius: 24,

		elevation: 5,
	},
	containerActive: {
		display: 'flex',
		flexDirection: 'row',
		padding: 9,
		alignItems: 'center',
		backgroundColor: '#00582F',
		minWidth: 'auto',
		borderRadius: 24,
	},
})
