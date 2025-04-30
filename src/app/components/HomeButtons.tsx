'use client';

import { useRouter } from 'next/navigation';
import React, { useReducer, useState } from 'react';

type PropsType = {
	formRef: HTMLFormElement,
}

export const HomeButtons: React.FC<PropsType> = ({formRef}) => {
	const [randomWordLoading, setRandomWordLoading] = useState<boolean>(false);

	const router = useRouter();

	const submitForm = formRef.submit;
	const handleRandomSearch = async (e: React.MouseEvent) => {
		setRandomWordLoading(true);
		const res = await fetch('https://random-word-api.herokuapp.com/word');
		if(!res) return;

		const data = await res.json();
		const word = data[0];
		setRandomWordLoading(false);

		router.push(`/search/web?searchTerm=${word}`);
		e.preventDefault();
	}


	return (
		<div className='flex flex-col items-center md:flex-row'>
			<button 
				className='
					px-3 py-2 mb-2 md:mb-0 md:mr-2
					text-lg text-primary
					border-1 border-primary rounded-lg 
					outline-none hover:shadow-md
					cursor-pointer
					duration-75
				'
				onClick={submitForm}

			>
				Пошук у Google
			</button>
			<button 
				disabled={randomWordLoading}
				className='
					px-3 py-2
					text-lg text-primary
					border-1 border-primary rounded-lg 
					outline-none hover:shadow-md
					cursor-pointer
					duration-75
					disabled:opacity-70 disabled:shadow-sm
			   	'
				onClick={handleRandomSearch}
			>
				{randomWordLoading ? 'Loading' : 'Мені пощастить'}
			</button>
		</div>
	)
}
