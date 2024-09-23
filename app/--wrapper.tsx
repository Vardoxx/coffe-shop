import React, { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

const Wrapper = ({ children }: PropsWithChildren) => {
	return <View style={styles.wrapper}>{children}</View>
}

export default Wrapper

const styles = StyleSheet.create({
	wrapper: {
		position: 'relative',
		paddingHorizontal: 33,
	},
})
