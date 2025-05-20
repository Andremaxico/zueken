import React from 'react'
import { ImageResultType, SearchType } from '../search/web/page';
import { ImagesSearchResult } from './ImagesSearchResult';
import Link from 'next/link';
import { PaginationButtons } from './PaginationButtons';

type PropsType = {
	results: SearchType<ImageResultType>,
	searchTerm: string,
};

export const ImagesSearchResults: React.FC<PropsType> = ({results, searchTerm}) => {
	const { items, searchInformation } = results;


	return (
		<div className="
			w-full m-auto flex flex-col pl-5 sm:pl-[5%] md:pl-[14%] lg:pl-0
		">
			<p className='mb-4 text-sm text-gray-500'>
				Знайдено {searchInformation.totalResults} результатів
			</p>
			{items.length > 0 ?
				<>
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-items-center pb-8">
						{items.map(item => <ImagesSearchResult key={item.link} data={item} />)}
					</div>
					<PaginationButtons />
				</>
			:
				<div className='flex flex-col items-center'>
					<h1 className='text-3xl'>Не знайдено результатів за запитом &quot;{searchTerm}&quot;</h1>
					<p >
						Спробуйте знайти щось інше
					</p>
					<Link href='/' className='text-primary cursor-pointer'>Головна</Link>
				</div>
			}
		</div>
	)
}
