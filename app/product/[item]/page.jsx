import {getProduct} from '@/libs/getProducts'
import Image from 'next/image'
import {Suspense} from 'react'

export async function generateMetadata({params: {item}}) {
	const details = await getProduct(item)
	return {title: details.title, description: details.description}
}

export default async function Item({params: {item}}) {
	const details = await getProduct(item)
	const {title, price, description, thumbnail} = details
	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<h1 className="text-5xl mb-5 text-center">Product Details</h1>
				<div className="flex justify-center items-center min-h-[90vh]">
					<div className="p-3 border w-max shadow-md rounded-xl text-center">
						<h2 className="font-bold">{title}</h2>
						<Image
							src={thumbnail}
							width={500}
							height={500}
							alt={title}
							className="mx-auto my-5"
						/>
						<p>{description}</p>
						<p className="font-bold text-end text-green-600">$ {price}</p>
					</div>
				</div>
			</Suspense>
		</>
	)
}
