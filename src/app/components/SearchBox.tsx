'use client'

import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useRouter, useSearchParams } from 'next/navigation';

type PropsType = object

export const SearchBox: React.FC<PropsType> = ({}) => {
	const router = useRouter();

	const searchParams = useSearchParams();
	const termParam = searchParams.get('searchTerm')
	const [searchTerm, setSearchTerm] = useState<string>(termParam || '');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currValue = e.target.value;
		setSearchTerm(currValue);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(!searchTerm || searchTerm.trim().length === 0) return;
		router.push(`/search/web?searchTerm=${searchTerm}`)
	}

	return (
		<form 
			className='
				px-2 py-1.5 mx-3
				flex items-center flex-grow max-w-3xl
				border-1 border-gray-300 rounded-2xl
				shadow-sm
				hover:shadow-primary
				focus-within:border-primary
				duration-200
			'
			onSubmit={handleSubmit}
		>
			<input 
				type='text'
				value={searchTerm}
				onChange={handleChange}
				className='
					flex-1
					focus:outline-none
				'
			/>
			<button 
				className='
					relative
					mr-2
					cursor-pointer  
					after:absolute after:top-1/2 after:-right-1 after:bg-gray-6 00 after:w-[1px] after:h-6
					after:-translate-y-2/4
				'
				onClick={(e) => e.preventDefault()}
			>
				<RxCross1 className='text-gray-600' />
			</button>
			<button 
				className='cursor-pointer mr-1'
				onClick={(e) => e.preventDefault()}
			>
				<FaMicrophone className='text-primary' />
			</button>
			<button className='cursor-pointer'>
				<IoIosSearch className='text-gray-600' />
			</button>
		</form>
	)
}
