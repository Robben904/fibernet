import { Link } from 'react-router-dom'
export const AdCard = () => {
    return (
        <div>
            <section className="bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumboytron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply">
                <div className="mx-auto max-h-[32rem] px-4 py-24 text-center lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">DishHome Dashin Dhamaka Offer!!</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">Recharge one year & Get Two Year Bonus</p>
                    {/*-- Button Alignment -*/}
                    <div className="space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">


                        {/*-- Button Property -*/}
                        <Link to="#" className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"> Order Now !! </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}


