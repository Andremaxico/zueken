'use client';

import React, { useEffect, useState } from 'react'
import { HomeSearchForm } from './HomeSearchForm'
import { HomeButtons } from './HomeButtons'

export const HomeSearch = () => {
	const [formRef, setFormRef] = useState<HTMLFormElement | null>(null);

	return (
		<div className='
			w-full
		'>
			<HomeSearchForm setFormRef={setFormRef} />
			{formRef &&
				<HomeButtons formRef={formRef}/>
			}
		</div>
	)
}
