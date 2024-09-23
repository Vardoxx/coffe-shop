export function generateId(): number {
	return Math.floor((Date.now() / 1000) * (Math.random() / 9))
}
