'use client';

import React, { useEffect, useState } from 'react'

type PropsType = object;

export const CountryLookup: React.FC<PropsType> = ({}) => {
	const [country, setCountry] = useState<string>('United States');

	const ipInfoRequestToken = process.env.NEXT_PUBLIC_IP_KEY;

	console.log('ip info request token', ipInfoRequestToken);

	useEffect(() => {
		const getCountry = async () => {
			// const ipRes = await fetch(`https://ipinfo.io/json?token=${ipInfoRequestToken}`);
			// const ipData = await ipRes.json();
			const response = await fetch(`https://extreme-ip-lookup.com/json/${ipInfoRequestToken}`);
			const data = await response.json();
			const country = data.country;
			setCountry(country as string);
		}
		if(ipInfoRequestToken) {
			getCountry(); 
		}
	}, [ipInfoRequestToken])

	return (
		<div className='
			px-8 py-3 border-b-1
		'>
			{country}
		</div>
	)
}
