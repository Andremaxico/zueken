'use client'

import React, { useEffect, useRef, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from 'next/navigation';


type PropsType = {
	setFormRef: (ref: HTMLFormElement) => void;
}

export const HomeSearchForm: React.FC<PropsType> = ({setFormRef}) => {
	const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

	const router = useRouter();
	const formRef = useRef<HTMLFormElement>(null);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currValue = e.currentTarget.value;

		setSearchTerm(currValue);
	}


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(searchTerm && searchTerm?.trim().length > 0) {
			router.push(`/search/web?searchTerm=${searchTerm}`);
		}
	}

	useEffect(() => {
		if(formRef.current) {
			setFormRef(formRef.current);
		}
	}, [formRef.current])

	return (
		<form 
			className='
				flex items-center 
				p-2 w-full mt-5 mb-10 mx-auto max-w-[90%] md:max-w-2xl
				border-1 border-gray-500 
				transition-border 
				hover:border-dark rounded-full focus-within::shadow-md active:shadow-md
			'
			onSubmit={handleSubmit}
			ref={formRef}
		>
			<button className='text-lg text-gray-500 hover:text-primary duration-75'>
				<IoIosSearch />
			</button>
			<input 
				className='
					flex-grow outline-none
					mx-1.5
				'
				placeholder='Шукайте тут'
				defaultValue={searchTerm}
				value={searchTerm}
				onChange={handleInput}
			/>
			<button className='text-lg text-gray-500 hover:text-primary duration-75'>
				<FaMicrophone />
			</button>
		</form>
	)
}
