import { ScrollView, StyleSheet } from 'react-native'

import Content from './Content'
import Header from './Header'

const Home = () => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Header />
			<Content />
		</ScrollView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		paddingBottom: 60,
		gap: 50,
	},
})
