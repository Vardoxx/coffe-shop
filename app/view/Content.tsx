import Button from '@/components/ui/Button'
import CategoryButton from '@/components/ui/CategoryButton'
import { cupSizeItems, sugarLvlItems } from '@/constants/category.items'
import { RootState } from '@/store/store'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Wrapper from '../--wrapper'

const Content = () => {
	const [activeSize, setActiveSize] = useState('Medium')
	const [activeSugar, setActiveSugar] = useState('No Sugar')

	const viewItem = useSelector((state: RootState) => state.viewReducer.viewItem)

	return (
		<View style={styles.container}>
			<Wrapper>
				<Text style={styles.title}>Cup Size</Text>
				<View style={styles.options}>
					{cupSizeItems.map(e => (
						<CategoryButton
							key={e.value}
							title={e.value}
							onPress={() => setActiveSize(e.value)}
							isActive={activeSize === e.value}
							icon={false}
							fontSize={20}
						/>
					))}
				</View>
			</Wrapper>

			<Wrapper>
				<Text style={styles.title}>Level Sugar</Text>
				<View style={styles.options}>
					{sugarLvlItems.map(e => (
						<CategoryButton
							key={e.value}
							title={e.value}
							onPress={() => setActiveSugar(e.value)}
							isActive={activeSugar === e.value}
							icon={false}
							fontSize={20}
						/>
					))}
				</View>
			</Wrapper>

			<Wrapper>
				<Text style={styles.title}>About</Text>
			</Wrapper>
			<Wrapper>
				<Text style={styles.about}>
					Coffee is not just a beverage, but an entire culture filled with
					flavors and rituals. In every sip is hidden the story of the meeting
					of sunlight and earth, as well as the labor of people beyond our
					borders. Entering the world of coffee, we plunge into its many facets:
					from strong espresso to delicate cappuccino, from lightly roasted
					beans to rich varieties with floral or chocolate notes.
				</Text>
			</Wrapper>
			<Wrapper>
				<Button
					onPress={() => console.log()}
					height={75}
					link={false}
					title={`Add to cart | ${viewItem.cost} ₽`}
					fontSize={20}
				/>
			</Wrapper>
		</View>
	)
}

export default Content

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '60%',
		backgroundColor: 'white',
		zIndex: 9,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingVertical: 20,
	},
	title: {
		fontWeight: '700',
		fontSize: 20,
	},
	options: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
	},
	about: {
		height: 65,
		fontSize: 12,
		fontStyle: 'italic',
	},
})
