import { ImagesSearchResults } from '@/app/components/ImagesSearchResults';
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
	
	const results = await response.json();
	return (
		<main>
			<div className="container">
				{results && <ImagesSearchResults searchTerm={typeof searchTerm == 'object' ? searchTerm[0] : searchTerm || ''} results={results} />}
			</div>
		</main>
	)
}

export default ImageSearchPage;