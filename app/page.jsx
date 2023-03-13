import {getProducts} from '@/libs/getProducts'
import Link from 'next/link'

export default async function Home() {
	const res = await getProducts()

	return (
		<main className='container mx-auto'>
			<h1 className='text-6xl text-center'>Welcome</h1>

			<ul className='py-4 grid grid-cols-4'>
				{res.products.map((item) => (
					<li key={item.id}>
						<Link href={`product/${item.id.toString()}`} className="hover:text-sky-600">{item.title}</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
