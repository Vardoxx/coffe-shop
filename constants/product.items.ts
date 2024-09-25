import { generateId } from '@/utils/generatorId'
import { ImageProps } from 'react-native'

export interface IProductItems {
	id: number
	srcImg: ImageProps
	title: string
	description: string
	cost: number
	specialOffer: boolean
}

export const items: IProductItems[] = [
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: true,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee1.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee2.png'),
		title: 'Cappuccino',
		description: 'With sugar',
		cost: 200.0,
		specialOffer: true,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee2.png'),
		title: 'Latte',
		description: 'With sugar',
		cost: 130.0,
		specialOffer: false,
	},
	{
		id: generateId(),
		srcImg: require('../assets/coffee3.png'),
		title: 'Coffee',
		description: 'With sugar',
		cost: 80.0,
		specialOffer: false,
	},
]
