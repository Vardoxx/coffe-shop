import MainLayout from '@/components/MainLayout'
import { store } from '@/store/store'
import { Slot } from 'expo-router'
import React from 'react'
import { Provider } from 'react-redux'
import ToastManager from 'toastify-react-native'

export default function RootLayout() {
	return (
		<Provider store={store}>
			<ToastManager duration={2000} width={350} />
			<MainLayout>
				<Slot />
			</MainLayout>
		</Provider>
	)
}
