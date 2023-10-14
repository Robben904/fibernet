import { Link } from 'react-router-dom'

export const ServiceCard = () => {
    return (
        <div className="flex flex-col pt-10 pb-4 gap-4 justify-center items-center md:flex-row md:space-x-4 md:space-y-0">
            {/*-- First Pricing Card -*/}

            {/*-- Card Content (same as your previous code) -*/}
            {/*-- First Card -*/}
            <div to="#" className="block max-w-sm h-40 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Entertainment</h5>
                <p className="font-normal pt-1 text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            {/*-- ... -*/}

            {/*-- Second Pricing Card -*/}

            {/*-- Card Content (same as your previous code) -*/}
            <div to="#" className="block max-w-sm h-40 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">24/7 Support</h5>
                <p className="font-normal pt-3 text-gray-700 dark:text-gray-400">Your Access to Expert Assistance Anytime, Anywhere.</p>
            </div>
            {/*-- Second Pricing Card -*/}

            {/*-- Card Content (same as your previous code) -*/}
            <div to="#" className="block max-w-sm h-40 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">24/7 Support</h5>
                <p className="font-normal pt-3 text-gray-700 dark:text-gray-400">Your Access to Expert Assistance Anytime, Anywhere.</p>
            </div>
            {/*-- ... -*/}
        </div>

    )
}
