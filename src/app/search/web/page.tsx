import { WebSearchResults } from '@/app/components/WebSearchResults'
import { SearchParams } from 'next/dist/server/request/search-params'
import React from 'react'

type PropsType = {
	searchParams: SearchParams,
}

export type SearchType<ItemType> = {
	"kind": string,
	"url": {
		"type": string,
		"template": string
	},
	"queries": {
		"previousPage": [
		{
			"title": string,
			"totalResults": string,
			"searchTerms": string,
			"count": number,
			"startIndex": number,
			"startPage": number,
			"language": string,
			"inputEncoding": string,
			"outputEncoding": string,
			"safe": string,
			"cx": string,
			"sort": string,
			"filter": string,
			"gl": string,
			"cr": string,
			"googleHost": string,
			"disableCnTwTranslation": string,
			"hq": string,
			"hl": string,
			"siteSearch": string,
			"siteSearchFilter": string,
			"exactTerms": string,
			"excludeTerms": string,
			"linkSite": string,
			"orTerms": string,
			"relatedSite": string,
			"dateRestrict": string,
			"lowRange": string,
			"highRange": string,
			"fileType": string,
			"rights": string,
			"searchType": string,
			"imgSize": string,
			"imgType": string,
			"imgColorType": string,
			"imgDominantColor": string
		}
		],
		"request": [
		{
			"title": string,
			"totalResults": string,
			"searchTerms": string,
			"count": number,
			"startIndex": number,
			"startPage": number,
			"language": string,
			"inputEncoding": string,
			"outputEncoding": string,
			"safe": string,
			"cx": string,
			"sort": string,
			"filter": string,
			"gl": string,
			"cr": string,
			"googleHost": string,
			"disableCnTwTranslation": string,
			"hq": string,
			"hl": string,
			"siteSearch": string,
			"siteSearchFilter": string,
			"exactTerms": string,
			"excludeTerms": string,
			"linkSite": string,
			"orTerms": string,
			"relatedSite": string,
			"dateRestrict": string,
			"lowRange": string,
			"highRange": string,
			"fileType": string,
			"rights": string,
			"searchType": string,
			"imgSize": string,
			"imgType": string,
			"imgColorType": string,
			"imgDominantColor": string
		}
		],
		"nextPage": [
		{
			"title": string,
			"totalResults": string,
			"searchTerms": string,
			"count": number,
			"startIndex": number,
			"startPage": number,
			"language": string,
			"inputEncoding": string,
			"outputEncoding": string,
			"safe": string,
			"cx": string,
			"sort": string,
			"filter": string,
			"gl": string,
			"cr": string,
			"googleHost": string,
			"disableCnTwTranslation": string,
			"hq": string,
			"hl": string,
			"siteSearch": string,
			"siteSearchFilter": string,
			"exactTerms": string,
			"excludeTerms": string,
			"linkSite": string,
			"orTerms": string,
			"relatedSite": string,
			"dateRestrict": string,
			"lowRange": string,
			"highRange": string,
			"fileType": string,
			"rights": string,
			"searchType": string,
			"imgSize": string,
			"imgType": string,
			"imgColorType": string,
			"imgDominantColor": string
		}
		]
	},
	"promotions": object[],
	"context": object,
	"searchInformation": {
		"searchTime": number,
		"formattedSearchTime": string,
		"totalResults": string,
		"formattedTotalResults": string
	},
	"spelling": {
		"correctedQuery": string,
		"htmlCorrectedQuery": string
	},
	"items": ItemType[],
}

export type ResultType = {
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

export type ImageType = {
	contextLink: string,
	width: number,
	height: number,
	byteSize: number,
	thumbnailLink: string,
	thumbnailHeight: number,
	thumbnailWidth: number,
}

export type ImageResultType = {
	"kind": string,
	"title": string,
	"htmlTitle": string,
	"link": string,
	"displayLink": string,
	"snippet": string,
	"htmlSnippet": string,
	mime: string,
	fileFormat: string,
	image: ImageType,
}

async function WebSearchPage({ searchParams }: PropsType) {
	const searchTerm = (await searchParams).searchTerm;

	const page = +(searchParams.page || 1);

	const response = await fetch(`
		https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${page * 10}
	`);

	if(!response.ok) throw new Error('Something went wrong');

	const search = await response.json() as SearchType<ResultType>;

	return (
		<main>
			<div className="container">
				{search && <WebSearchResults search={search} />}
			</div>
		</main>
	)
}

export default WebSearchPage;