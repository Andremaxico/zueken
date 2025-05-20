import Link from 'next/link';
import React from 'react';
import { IoGrid } from "react-icons/io5";
import { SignInBtn } from './SignInBtn';

type PropsType = object

export const HomeHeader: React.FC<PropsType> = ({}) => {
	return (
		<header
			className='flex justify-end p-4 gap-6 items-center'
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
			<SignInBtn />
		</header>
	)
}
