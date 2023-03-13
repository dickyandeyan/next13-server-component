export async function getProducts() {
	const res = await fetch(process.env.BASE_API_URL)
	return res.json()
}

export async function getProduct(id) {
	const res = await fetch(`${process.env.BASE_API_URL}/${id}`)
	return res.json()
}