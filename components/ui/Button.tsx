import { Href, Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface IButtonProps {
	title: string | number
	link: boolean
	onPress: () => void
	href?: Href<string | object>
	width?: number
	height?: number
	fontSize?: number
}

const Button: React.FC<IButtonProps> = ({
	onPress,
	title,
	href,
	link,
	width,
	height,
	fontSize,
}) => {
	return (
		<>
			{link ? (
				<Pressable
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						paddingVertical: 12,
						paddingHorizontal: 32,
						borderRadius: 20,
						elevation: 3,
						backgroundColor: '#00512C',
						width: width,
						height: height,
					}}
					onPress={onPress}
				>
					<Link href={href!}>
						<Text
							style={{
								fontSize: fontSize,
								lineHeight: 21,
								fontWeight: 'bold',
								letterSpacing: 0.25,
								color: 'white',
							}}
						>
							{title}
						</Text>
					</Link>
				</Pressable>
			) : (
				<Pressable
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						paddingVertical: 12,
						paddingHorizontal: 32,
						borderRadius: 20,
						elevation: 3,
						backgroundColor: '#00512C',
						width: width,
						height: height,
					}}
					onPress={onPress}
				>
					<Text
						style={{
							fontSize: fontSize,
							lineHeight: 21,
							fontWeight: 'bold',
							letterSpacing: 0.25,
							color: 'white',
						}}
					>
						{title}
					</Text>
				</Pressable>
			)}
		</>
	)
}

const styles = StyleSheet.create({})

export default Button
