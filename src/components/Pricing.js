import React from 'react'

export const Pricing = () => {
  return (
    <div>
      {/* Created A Row Below */}
      <div className="flex flex-col pt-11 gap-4 justify-center items-center md:flex-row md:space-x-4 md:space-y-0">
        {/*!-- First Pricing Card -- */}

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

          {/* Heading */}
          <h5 className="mb-4 text-xl mt-5 font-medium text-gray-500 dark:text-gray-400">Yearly</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold"></span>
            <span className="text-5xl font-extrabold tracking-tight">Rs 14,999</span>

            {/* Yearly */}
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/Yearly</span>
          </div>
          <ul className="space-y-5 my-7">
            <li className="flex space-x-3 line-through decoration-gray-500">
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
            </li>
            <li className="flex space-x-3 items-center">

              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>

          </ul>
          <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>



        {/* Second Card Below */}
        <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

          {/* Heading */}
          <h5 className="mb-4 text-xl mt-5 font-medium text-gray-500 dark:text-gray-400">Yearly</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold"></span>
            <span className="text-5xl font-extrabold tracking-tight">Rs 14,999</span>

            {/* Yearly */}
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/Yearly</span>
          </div>
          <ul className="space-y-5 my-7">
            <li className="flex space-x-3 line-through decoration-gray-500">
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
            </li>
            <li className="flex space-x-3 items-center">

              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>

          </ul>
          <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>


        {/* Third Card Below */}
        <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

          {/* Heading */}
          <h5 className="mb-4 text-xl mt-5 font-medium text-gray-500 dark:text-gray-400">Yearly</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold"></span>
            <span className="text-5xl font-extrabold tracking-tight">Rs 14,999</span>

            {/* Yearly */}
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/Yearly</span>
          </div>
          <ul className="space-y-5 my-7">
            <li className="flex space-x-3 line-through decoration-gray-500">
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
            </li>
            <li className="flex space-x-3 items-center">

              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <span className="text-base font-normal leading-tight text-gray-500"></span>
            </li>

          </ul>
          <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>

      </div>
    </div>
  )
}

