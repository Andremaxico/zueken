'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import React from 'react';

type PropsType = {}

export const PaginationButtons: React.FC<PropsType> = ({}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const page = +(searchParams.get('page') || 1);
	const searchTerm = searchParams.get('searchTerm');

	return (
		<div className='
			flex justify-center
			md:justify-start
			px-2
		'>
			{page > 1 &&
				<Link 
					href={`${pathname}?searchTerm=${searchTerm}&page=${page-1}`}
					className='
						flex items-center 
						mr-[5%]
						hover:text-primary
						duration-200
						cursor-poiner
					'
				>
					<IoIosArrowBack className='text-lg' />
					<span className='mr-1'>Назад</span>
				</Link>
			}
			{page < 100 &&
				<Link 
					href={`${pathname}?searchTerm=${searchTerm}&page=${page+1}`}
					className='
						flex items-center mr-2
						hover:text-primary
						duration-200
						cursor-poiner
					'
				>
					<span className='mr-2'>Далі</span>
					<IoIosArrowForward />
				</Link>
			}
		</div>
	)
}
