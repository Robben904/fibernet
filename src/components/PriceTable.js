
export const PriceTable = () => {
    return (
        <div className="relative my-5 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Pagkages
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Yearly
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            3 Months
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Monthly
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            ONT Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            50Mbps
                        </th>
                        <td className="px-6 py-4">
                            4236
                        </td>
                        <td className="px-6 py-4  bg-gray-50">
                            4334
                        </td>
                        <td className="px-6 py-4 dark:bg-gray-800">
                            Price
                        </td>
                        <td className="px-6 py-4">
                            SIngle Band
                        </td>
                    </tr>

                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            75Mbps
                        </th>
                        <td className="px-6 py-4">
                            1000
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            1000
                        </td>
                        <td className="px-6 py-4">
                            1000
                        </td>
                        <td className="px-6 py-4">
                            1000
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            100Mbps
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            150Mbps
                        </th>
                        <td className="px-6 py-4">
                            Gray
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Phone
                        </td>
                        <td className="px-6 py-4">
                            $799
                        </td>
                        <td className="px-6 py-4">
                            $799
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            200Mbps
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Wearables
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            250Mbps
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Wearables
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            300Mbps
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            Wearables
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

