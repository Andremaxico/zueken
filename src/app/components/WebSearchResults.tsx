import React from 'react'
import { ResultType, SearchType } from '../search/web/page';
import Link from 'next/link';
import { WebSearchResult } from './WebSearchResult';

type PropsType = {
	search: SearchType<ResultType>,
};

export const WebSearchResults: React.FC<PropsType> = ({search}) => {
	const {count, searchTerms, totalResults, startIndex} = search.queries.request[0];

	console.log(search.queries.request);

	const {items} = search;

	return (
		<div className="w-full m-auto flex flex-col pl-5 pb-24 sm:pl-[5%] md:pl-[14%]">
			<p className='mb-4 text-sm text-gray-500'>
				Знайдено {totalResults} результатів
			</p>
			{items.length > 0 ?
				<div className="">
					{items.map(item => <WebSearchResult key={item.link} data={item} />)}
				</div>
			:
				<div className='flex flex-col items-center'>
					<h1 className='text-3xl'>Не знайдено результатів за запитом "{searchTerms}"</h1>
					<p >
						Спробуйте пошукати щось інше
					</p>
					<Link href='' className='text-primary cursor-pointer'>Додому</Link>
				</div>
			}
		</div>
	)
}
