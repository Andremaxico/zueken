import { SearchParams } from 'next/dist/server/request/search-params'
import Link from 'next/link'
import React from 'react'

type PropsType = {
	searchParams: SearchParams,
}

type ResultType = {
	"kind": string,
	"title": string,
	"htmlTitle": string,
	"link": string,
	"displayLink": string,
	"snippet": string,
	"htmlSnippet": string,
	"cacheId": string,
	"formattedUrl": string,
	"htmlFormattedUrl": string,
	"pagemap": object,
	"mime": string,
	"fileFormat": string,
	"image": {
		"contextLink": string,
		"height": number,
		"width": number,
		"byteSize": number,
		"thumbnailLink": string,
		"thumbnailHeight": number,
		"thumbnailWidth": number
	},
	"labels": [
		{
		"name": string,
		"displayName": string,
		"label_with_op": string
		}
	]
}

async function WebSearchPage({ searchParams }: PropsType) {
	const searchTerm = (await searchParams).searchTerm;

	const response = await fetch(`
		https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}
	`);

	if(!response.ok) throw new Error('Something went wrong');

	const data = await response.json();
	const results = data.items as ResultType[];

	return (
		<div>
			{results && results.map(result => (
				<p key={result.formattedUrl}>{result.title}</p>
			))}
			{(!results || results.length === 0) && 
				<div className='flex flex-col items-center'>
					<h1 className='text-3xl'>No results found for {searchTerm}</h1>
					<p >
						Try searching the web or images for something else
					</p>
					<Link href='' className='text-primary cursor-pointer'>Home</Link>
				</div>
			}
		</div>
	)
}

export default WebSearchPage;