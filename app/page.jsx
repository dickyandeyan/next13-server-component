import {getProducts} from '@/libs/getProducts'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	const res = await getProducts()

	return (
		<main>
			<h1 className="text-6xl text-center">Welcome</h1>

			<ul className="py-4 grid grid-cols-4 gap-4">
				{res.products.map((item) => (
					<li key={item.id} className="p-3 border rounded-xl hover:shadow-lg">
						<Link
							href={`product/${item.id.toString()}`}
							className="hover:text-sky-600"
						>
							<div className="max-w-[300px] max-h-[300px] overflow-hidden h-[300px] m-auto">
								<Image
									src={item.thumbnail}
									width={300}
									height={300}
									alt={item.title}
									className="object-cover "
								/>
							</div>

							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
