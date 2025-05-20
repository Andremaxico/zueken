'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiCamera } from "react-icons/ci";

type PropsType = object
type TabType = 'web' | 'image'

export const SearchHeaderOptions: React.FC<PropsType> = ({}) => {
	const pathName = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('searchTerm');

	const tab = pathName.split('/')[pathName.split('/').length-1];

	const handleRedirection = (tab: TabType) => {
		router.push(`/search/${tab}?searchTerm=${searchTerm}`);
	}

	console.log('tab', tab);

	return (
		<div className='
			flex space-x-4 items-center justify-center 
			pt-2
			border-b-1 border-gray-400
			md:justify-start
		'>
			<button 
				className={`
					flex items-center space-x-1
					pb-1
					text-md text-gray-400 
					border-b-transparent border-b-1
					hover:text-primary active:text-primary hover:border-primary
					cursor-pointer
					duration-50
					${tab === 'web' ? '!text-primary !border-primary' : ''}
				`}
				onClick={() => handleRedirection('web')}
			>
				<IoIosSearch className={'text-xl'} />
				<span>All</span>
			</button>
			<button 
				className={`
					flex items-center space-x-1
					pb-1
					text-md text-gray-400 
					border-b-transparent border-b-1
					hover:text-primary active:text-primary hover:border-primary
					cursor-pointer
					duration-50
					${tab === 'image' ? '!text-primary !border-primary' : ''}
				`}
				onClick={() => handleRedirection('image')}
			>
				<CiCamera className={'text-xl'} />
				<span>Image</span>
			</button>
		</div>
	)
}
