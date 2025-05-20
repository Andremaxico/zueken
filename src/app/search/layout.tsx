import React from 'react'
import '../globals.css'
import { SearchHeader } from '../components/SearchHeader'

function layout(
	{children}
	:Readonly<{
		children: React.ReactNode
	}>
) {
	return (
		<>	
			<SearchHeader />
			{children}
		</>
	)
}

export default layout