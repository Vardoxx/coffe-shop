import { useIdChecker } from '@/hooks/useIdChecker'
import { addToFavorites } from '@/store/slices/favorite.slice'
import { removeViewItem } from '@/store/slices/view.slice'
import { RootState } from '@/store/store'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content'
import Header from './Header'

const ViewScreen = () => {
	const dispatch = useDispatch()
	const backUp = useRouter()
	const viewItem = useSelector((state: RootState) => state.viewReducer.viewItem)

	const [inFavorite] = useIdChecker()

	const handleBack = () => {
		dispatch(removeViewItem())
		backUp.back()
	}
	return (
		<>
			<View style={styles.leftArrow}>
				<AntDesign
					onPress={handleBack}
					name='arrowleft'
					size={35}
					color='white'
				/>
			</View>
			<View style={styles.heart}>
				<AntDesign
					onPress={() => dispatch(addToFavorites(viewItem))}
					name={inFavorite(Number(viewItem.id)) ? 'heart' : 'hearto'}
					size={30}
					color={inFavorite(Number(viewItem.id)) ? '#FF4848' : 'white'}
				/>
			</View>
			<View style={{ width: '100%', height: '100%' }}>
				<Header
					srcImg={viewItem.srcImg}
					title={viewItem.title}
					description={viewItem.description}
				/>
				<Content />
			</View>
		</>
	)
}

export default ViewScreen

const styles = StyleSheet.create({
	leftArrow: {
		position: 'absolute',
		top: 30,
		left: 25,
		zIndex: 100,
		backgroundColor: 'black',
		borderRadius: 100,
		padding: 5,
	},
	heart: {
		position: 'absolute',
		top: 30,
		right: 25,
		zIndex: 100,
		backgroundColor: 'black',
		borderRadius: 100,
		padding: 7.5,
	},
})
