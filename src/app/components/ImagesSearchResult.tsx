import React from 'react';
import { ImageResultType } from '../search/web/page';
import Image from 'next/image';
import Link from 'next/link';

type PropsType = {
	data: ImageResultType,
};

export const ImagesSearchResult: React.FC<PropsType> = ({data}) => {
	const { displayLink, image, kind, link, title} = data;

	console.log('image src', image);

	return (
		<Link className='group flex flex-col max-w-[300px]' href={image.contextLink}>
			<Image 
				src={image.thumbnailLink}
				alt={displayLink}
				width={300}
				height={200} 
				className='mb-1 h-50 max-w-full group-hover:shadow-md object-cover'
			/>
			<div>
				<h6 className='text-md mb-1 group-hover:underline'>{title}</h6>
				<p className='text-sm text-gray-500 group-hover:underline'>{displayLink}</p>
			</div>
		</Link>
	)
}
