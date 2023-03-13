import {getProduct} from '@/libs/getProducts'

export async function generateMetadata({params: {item}}) {
	const details = await getProduct(item)
	return {title: details.title, description: details.description}
}

export default async function Item({params: {item}}) {
	const details = await getProduct(item)
	const {title, price, description} = details
	return (
		<div>
			<h1>{title}</h1>
			<></>
		</div>
	)
}
