import Link from 'next/link';
import React from 'react';
import { IoGrid } from "react-icons/io5";

type PropsType = {}

export const HomeHeader: React.FC<PropsType> = ({}) => {
	return (
		<header
			className='flex justify-end p-4 gap-3 items-center'
		>
			<Link 
				href={'https://mail.google.com'}
				className='
					text-lg
					hover:underline
				'
			>
				Gmail
			</Link>
			<Link 
				href={'https://images.google.com'}
				className='
					text-lg
					hover:underline
				'
			>
				Images
			</Link>

			{/* open more applications */}
			<button
				className='
					text-2xl
					hover:text-3xl duration-100
					cursor-pointer
				'
			>
				<IoGrid />
			</button>

			<button
				className='
					w-20 p-1.5 bg-primary 
					border-1 border-primary 
					text-white
					duration-100 hover:bg-transparent hover:text-primary
					rounded-md 
					cursor-pointer
				'
			>
				Sign In
			</button>
		</header>
	)
}
