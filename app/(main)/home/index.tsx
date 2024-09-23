import { StyleSheet, View } from 'react-native'
import Categories from './Categories'
import Header from './Header'

const Home = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Categories />
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: '100%',
		height: '100%',
		gap: 50,
	},
})
