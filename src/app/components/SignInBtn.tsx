import React from 'react';

type PropsType = {
	className?: string,
};

export const SignInBtn: React.FC<PropsType> = ({className}) => {
	return (
		<button
			className={`
				w-20 p-1.5 bg-primary 
				border-1 border-primary 
				text-white
				duration-100 hover:bg-transparent hover:text-primary
				rounded-md 
				cursor-pointer
				${className}
			`}
		>
			Sign In
		</button>
	)
}
