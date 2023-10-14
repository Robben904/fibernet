import Banner from '../assets/banner.jpg'
import { AdCard, Pricing, ServiceCard, PriceTable } from '../components'

export const Home = () => {
    return (
        <main>
            <AdCard />
            <Pricing />
            <div className='rounded-2xl bg-black'>
                <h1 className="mb-4 my-10 pt-10 text-center text-4xl justify-center  font-extrabold leading-none tracking-wide text-white md:text-5xl lg:text-6xl dark:text-white">Never loose <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">speed</mark> over your Internet</h1>
                <p className="text-lg pt-5 pb-10 text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <ServiceCard />
            <PriceTable />
        </main>
    )
}

