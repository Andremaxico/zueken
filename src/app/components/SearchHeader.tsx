import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SearchBox } from './SearchBox';
import { CiSettings } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { SignInBtn } from './SignInBtn';

type PropsType = {};

export const SearchHeader: React.FC<PropsType> = () => {
	return (
		<header className='sticky top-0 bg-white py-8 px-2'>
			<div className="flex items-center justify-between w-full">
				<Link href={'/'}>
					<Image 
						width={120}
						height={40}
						src={'/images/logo_medium.png'}
						alt='logo'
						priority
					/>
				</Link>

				<div className="flex-1 items-center">
					<SearchBox />
				</div>
				<div className="hidden md:flex items-center space-x-1.5">
					<CiSettings className='
						text-2xl
						hover:text-3xl duration-100
						cursor-pointer
					' />
					<IoGrid className='
						text-xl
						hover:text-3xl duration-100
						cursor-pointer
					'/>
				</div>
				<SignInBtn className='ml-1.5' />
			</div>
		</header>
	)
}
