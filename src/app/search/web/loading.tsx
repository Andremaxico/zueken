import React from 'react'

function loading() {
	return (
		<main className="container main">
			<div className='flex flex-col space-y-12 pl-5 sm:pl-[5%] md:pl-[14%]'>
				<div className="flex flex-col space-y-2">
					<div className="h-2 bg-gray-300 w-36 rounded-md"></div>
					<div className="h-3 bg-gray-400 w-72 rounded-md"></div>
					<div className="h-2 bg-gray-300 w-56 rounded-md"></div>
					<div className="h-2 bg-gray-300 w-48 rounded-md"></div>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="h-2 bg-gray-300 w-36 rounded-md"></div>
					<div className="h-3 bg-gray-400 w-72 rounded-md"></div>
					<div className="h-2 bg-gray-300 w-56 rounded-md"></div>
					<div className="h-2 bg-gray-300 w-48 rounded-md"></div>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="h-2 bg-gray-300 w-36 rounded-md"></div>
					<div className="h-3 bg-gray-400 w-72 rounded-md"></div>
					<div className="h-2 bg-gray-300 w-56 rounded-md"></div>
					<div className="h-2 bg-gray-300 w-48 rounded-md"></div>
				</div>
			</div>
		</main>
	)
}

export default loading