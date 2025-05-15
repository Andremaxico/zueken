import React from 'react'
import { ResultType } from '../search/web/page';
import Link from 'next/link';
import Parser from 'html-react-parser'

type PropsType = {
	data: ResultType,
};

export const WebSearchResult: React.FC<PropsType> = ({data}) => {
	const {link, formattedUrl, title, htmlSnippet} = data;

	return (
		<div className='mb-8 last:mb-0 max-w-3xl'>
			<Link href={link} className="group flex flex-col">
				<p className='text-sm'> {formattedUrl} </p>
				<p className='group-hover:underline text-blue-700 text-xl font-medium decoration-blue-700'> {title} </p>
			</Link>
			<p className=''>
				{Parser(htmlSnippet)}
			</p>
		</div>
	)
}