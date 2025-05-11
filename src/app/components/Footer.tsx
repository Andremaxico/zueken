import React from 'react';
import { CountryLookup } from './CountryLookup';

type PropsType = {}

export const Footer: React.FC<PropsType> = ({}) => {
	return (
		<footer className='
			text-sm text-gray-500 bg-[#fcfcfc] w-full
		'>
			<CountryLookup />
			<nav className='
				flex flex-col items-center 
				px-8 py-3 space-y-3
				sm:flex-row sm:justify-between
				sm: space-y-0
			'>
				<ul className='
					flex items-center space-x-5
				'>
					<li className='hover:underline cursor-pointer'>About</li>
					<li className='hover:underline cursor-pointer'>Advertizing</li>
					<li className='hover:underline cursor-pointer'>Business</li>
					<li className='hover:underline cursor-pointer'>How Search works</li>
				</ul>
				<ul className='
					flex items-center space-x-5
				'>
					<li className='hover:underline cursor-pointer'>Privacy</li>
					<li className='hover:underline cursor-pointer'>Terms</li>
					<li className='hover:underline cursor-pointer'>Setting</li>
				</ul>
			</nav>
		</footer>
	)
}
