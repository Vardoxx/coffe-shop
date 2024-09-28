import { Href } from 'expo-router'

export interface IMainLayoutItems {
	icon: 'home' | 'heart' | 'cart' | 'person'
	path: Href<string>
}

export const items: IMainLayoutItems[] = [
	{
		icon: 'home',
		path: '/main/home',
	},
	{
		icon: 'heart',
		path: '/main/favorite',
	},
	{
		icon: 'cart',
		path: '/main/cart',
	},
	{
		icon: 'person',
		path: '/main/user',
	},
]
