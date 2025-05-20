'use client';

import React, { useEffect } from 'react'

type PropsType = {
	error: Error,
	reset: () => void,
};

function Error({error}: PropsType) {
	useEffect(() => {
		console.log('error', error);
	}, [error])

	return (
		<div className='flex flex-col justify-center items-center pt-10'>
			<h1 className='text-3xl mb-4'>Something went wrong!</h1>
			<button className='text-primary cursor-pointer'>Try again</button>
		</div>
	)
}

export default Error; 