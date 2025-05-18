import React from 'react'

function loading() {
  return (
	<main className='container'>
		<div className="md:flex px-5 md:py-[5%] md:pl-[14%] lg:pl-0 animate-pulse">
			<div className="flex flex-col space-y-2 md:mr-4">
				<div className="bg-gray-300 w-full h-[300px] md:w-[300px] md:h-[300px] rounded-md"></div>
				<div className="bg-gray-300 w-60 h-2 rounded-md"></div>
				<div className="bg-gray-300 w-36 h-2 rounded-md"></div>
			</div>
			<div className="hidden md:inline-flex space-x-2">
				<div className="flex flex-col space-y-4">
					<div className="bg-gray-300 w-full h-[300px] md:w-[300px] md:h-[300px] rounded-md"></div>
					<div className="bg-gray-300 w-60 h-2 rounded-md"></div>
					<div className="bg-gray-300 w-36 h-2 rounded-md"></div>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="bg-gray-300 w-full h-[300px] md:w-[300px] md:h-[300px] rounded-md"></div>
					<div className="bg-gray-300 w-60 h-2 rounded-md"></div>
					<div className="bg-gray-300 w-36 h-2 rounded-md"></div>
				</div>
			</div>
		</div>
	</main>
  )
}

export default loading