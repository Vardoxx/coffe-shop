import MainLayout from '@/components/Main-layout/MainLayout'
import { Slot } from 'expo-router'
import React from 'react'

export default function RootLayout() {
	return (
		<MainLayout>
			<Slot />
		</MainLayout>
	)
}
