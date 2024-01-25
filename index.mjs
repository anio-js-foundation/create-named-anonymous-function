export default function(name, fn) {
	let tmp = {
		[`${name}`](...args) {
			return fn(...args)
		}
	}

	return tmp[`${name}`]
}
