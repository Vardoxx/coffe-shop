import CMainLayout from '@/components/MainLayout'
import { Slot } from 'expo-router'

import React from 'react'
import { StyleSheet } from 'react-native'

const MainLayout = () => {
	return (
		<CMainLayout>
			<Slot />
		</CMainLayout>
	)
}

export default MainLayout

const styles = StyleSheet.create({})
