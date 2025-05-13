import { SearchParams } from 'next/dist/server/request/search-params';
import React from 'react'

type PropsType = {
	searchParams: SearchParams,
}

async function ImageSearchPage({searchParams}: PropsType) {
	const searchTerm = ( await searchParams).searchTerm;
	
		const response = await fetch(`
			https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image
		`);
	
		if(!response.ok) throw new Error('Something went wrong');
	 
		console.log('images response',  await response.json());
	return (
		<div>SearchImagePage</div>
	)
}

export default ImageSearchPage;