import React from 'react';

type PropsType = {}

export const HomeButtons: React.FC<PropsType> = ({}) => {
	return (
		<div className='flex flex-col items-center md:flex-row'>
			<button className='
			 	px-3 py-2 mb-2 md:mb-0 md:mr-2
				text-lg text-primary
				border-1 border-primary rounded-lg 
				outline-none hover:shadow-md
				cursor-pointer
				duration-75
				'
			>
				Пошук у Google
			</button>
			<button className='
				px-3 py-2
			   text-lg text-primary
			   border-1 border-primary rounded-lg 
			   outline-none hover:shadow-md
			   cursor-pointer
			   duration-75
			   '
			>
				Мені пощастить
			</button>
		</div>
	)
}
