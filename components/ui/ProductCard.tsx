import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import {
	Image,
	ImageProps,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'

interface IProductCardProps {
	id: number
	srcImg: ImageProps
	title: string
	description: string
	cost: number
	onPress: () => void
}

const ProductCard: React.FC<IProductCardProps> = ({
	id,
	srcImg,
	title,
	description,
	cost,
	onPress,
}) => {
	const coffeeImg = srcImg
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={coffeeImg} />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
			<View style={styles.cost}>
				<Text
					style={{
						position: 'absolute',
						top: -2,
						fontWeight: '500',
						fontSize: 12,
					}}
				>
					₽
				</Text>
				<Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
					{cost}
				</Text>
			</View>
			<Pressable
				onPress={onPress}
				hitSlop={{ top: 20, bottom: 10, right: 15, left: 10 }}
			>
				<AntDesign
					name='pluscircle'
					color='#00512C'
					size={33}
					style={{ position: 'absolute', bottom: 10, right: 10 }}
				/>
			</Pressable>
		</View>
	)
}

export default ProductCard

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		display: 'flex',
		width: 152,
		height: 200,
		padding: 4,
		paddingBottom: 11,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		minWidth: 'auto',
		borderRadius: 24,
		elevation: 5,
	},
	image: {
		width: 144,
		height: 105,
		borderRadius: 20,
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	description: {
		fontSize: 10,
		fontWeight: 'regular',
		marginLeft: 10,
	},
	cost: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 10,
	},
})
