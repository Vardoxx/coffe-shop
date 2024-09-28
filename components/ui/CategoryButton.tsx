import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ICategoryButtonProps {
	title: string
	onPress: () => void
	isActive: boolean
	icon: boolean
	fontSize?: number
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({
	title,
	onPress,
	isActive,
	icon,
	fontSize,
}) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.container, isActive ? styles.containerActive : null]}
		>
			{icon && (
				<Ionicons
					name='cafe-outline'
					size={24}
					color={isActive ? 'white' : 'black'}
				/>
			)}
			<Text
				style={{
					color: isActive ? 'white' : 'black',
					fontSize: fontSize || 16,
				}}
			>
				{title}
			</Text>
		</Pressable>
	)
}

export default CategoryButton

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		paddingVertical: 9,
		paddingHorizontal: 15,
		alignItems: 'center',
		backgroundColor: 'white',
		minWidth: 'auto',
		borderRadius: 24,
		elevation: 5,
	},
	containerActive: {
		backgroundColor: '#00582F',
	},
})
