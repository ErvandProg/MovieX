import React, { useEffect, useState } from 'react'
import Film from './Film'

export default function Films({
	data,
	type = 'default',
	currentItems = undefined,
	query,
}) {
	const [filmBase, setFilmBase] = useState(currentItems)

	useEffect(() => {
		return () => {
			setFilmBase(currentItems)
		}
	}, [currentItems])

	return (
		<div className='flex flex-col justify-center items-center pb-[40px]'>
			<>
				{type === 'few' && (
					<>
						{data.map((el, index) => (
							<div
								className='w-[1660px] flex flex-col gap-[60px] py-[80px]'
								key={index}
							>
								<p className='font-bold text-[40px] font-prompt'>{el.title}</p>
								<Film films={el.results} typeTwo={el.typeTwo} />
							</div>
						))}
					</>
				)}
				{(type === 'default' || type === 'paginate') && (
					<div className='w-[1660px] flex flex-col gap-[60px] py-[80px]'>
						<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
						<Film films={data.results} currentItems={filmBase} query={query} />
					</div>
				)}
				{type === 'similar' && (
					<div className='w-[1660px] flex flex-col gap-[60px] py-[80px]'>
						<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
						<Film films={data.results} type='similar' query={query} />
					</div>
				)}
				{type === 'liked' && (
					<div className='w-[1660px] flex flex-col gap-[60px] py-[105px]'>
						<p className='font-bold text-[40px] font-prompt text-center'>
							{data.title}
						</p>
						<Film films={data.results} type='liked' query={query} />
					</div>
				)}
			</>
		</div>
	)
}
