import { IProductItems } from '@/constants/product.items'
import { addToFavorites } from '@/store/slices/favorite.slice'
import { addViewItem } from '@/store/slices/view.slice'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import {
	Image,
	ImageProps,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useDispatch } from 'react-redux'

interface IProductCardProps {
	id: number
	srcImg: ImageProps
	title: string
	description: string
	cost: number
	isFavorite: 'heart' | 'hearto'
	viewItem: IProductItems
}

const ProductCard: React.FC<IProductCardProps> = ({
	id,
	srcImg,
	title,
	description,
	cost,
	isFavorite,
	viewItem,
}) => {
	const router = useRouter()

	const coffeeImg = srcImg
	const dispatch = useDispatch()

	const handleViewItem = () => {
		router.push('/view')
		dispatch(addViewItem(viewItem))
	}

	const handleAddToFavorite = () => {
		dispatch(addToFavorites({ id, srcImg, title, description, cost }))
	}

	return (
		<Pressable onPress={handleViewItem}>
			<View key={id} style={styles.container}>
				<Image resizeMode='cover' style={styles.image} source={coffeeImg} />
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

				<AntDesign
					onPress={() => handleAddToFavorite()}
					name={isFavorite}
					color='#FF4848'
					size={25}
					style={{ position: 'absolute', bottom: 60, right: 14, zIndex: 2000 }}
				/>

				<AntDesign
					name='pluscircle'
					color='#00512C'
					size={30}
					style={{ position: 'absolute', bottom: 10, right: 12 }}
				/>
			</View>
		</Pressable>
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
