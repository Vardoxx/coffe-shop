import { items } from '@/constants/main-layout.items'
import { Ionicons } from '@expo/vector-icons'
import { Href, Link, usePathname } from 'expo-router'
import React, { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

const MainLayout = ({ children }: PropsWithChildren) => {
	const pathname = usePathname()

	return (
		<>
			<View style={styles.container}>
				{items.map(item => (
					<Link
						key={item.path as string}
						href={item.path as Href<string | object>}
					>
						<View>
							{`/(main)${pathname}` !== item.path ? (
								<Ionicons
									name={`${item.icon}-outline`}
									size={35}
									color='#00512C'
								/>
							) : (
								<Ionicons name={item.icon} size={35} color='#00512C' />
							)}
						</View>
					</Link>
				))}
			</View>
			{children}
		</>
	)
}

export default MainLayout

const styles = StyleSheet.create({
	container: {
		zIndex: 10,
		position: 'absolute',
		bottom: 0,
		left: 0,
		display: 'flex',
		flexDirection: 'row',
		minWidth: '100%',
		minHeight: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: '#fff',
		elevation: 12,
		borderTopRightRadius: 32,
		borderTopLeftRadius: 32,
	},
})
