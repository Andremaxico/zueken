import Image from 'next/image';
import React from 'react';
import { HomeSearch } from './HomeSearch';

type PropsType = object

export const HomeBody: React.FC<PropsType> = ({}) => {
	return (
		<section className='flex flex-col items-center mt-24'>
			<div className="mb-10">
				<Image 
					src={'/images/logo_medium.png'}
					width={300}
					height={95}
					alt='Zueken'
				/>
			</div>
			<HomeSearch />
		</section>
	)
}
