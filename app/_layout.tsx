import { store } from '@/store/store'
import { Slot } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import ToastManager from 'toastify-react-native'

export default function RootLayout() {
	return (
		<Provider store={store}>
			<View style={{ zIndex: 10000 }}>
				<ToastManager duration={2000} width={350} />
			</View>
			<Slot />
		</Provider>
	)
}
