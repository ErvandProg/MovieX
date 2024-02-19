import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
	const [query, setQuery] = useState('')
	function handleKeyDown(event) {
		if (event.key === 'Enter' && query !== '') {
			window.location.href = 'search?query=' + query
		}
	}

	function handleChange(event) {
		setQuery(event.target.value)
	}

	return (
		<div className='relative flex items-center'>
			<input
				type='text'
				className='w-[400px] h-[80px] text-white text-[26px] border-2 border-[#FAFF00] rounded-[40px] bg-inherit pl-[25px] pr-[60px]'
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<div className='absolute right-6'>
				<Link to={'search?query=' + query}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-[26px] h-[26px] text-[#fff]'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
				</Link>
			</div>
		</div>
	)
}
