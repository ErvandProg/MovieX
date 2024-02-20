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
								className='w-[1660px] max-[1765px]:w-[1200px] max-[700px]:w-[400px] max-[1220px]:w-[700px] flex flex-col max-[1765px]:items-center max-[1765px]:justify-center flex-wrap gap-[60px] py-[80px]'
								key={index}
							>
								<p className='font-bold text-[40px] font-prompt'>{el.title}</p>
								<Film films={el.results} type={type} />
							</div>
						))}
					</>
				)}
				{(type === 'default' || type === 'search') && (
					<div className='w-[1660px] max-[1765px]:w-[1200px] max-[700px]:w-[400px] max-[1220px]:w-[700px] flex flex-col max-[1765px]:items-center max-[1765px]:justify-center flex-wrap gap-[60px] py-[80px]'>
						<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
						<Film films={data.results} type={'search'} query={query} />
					</div>
				)}
				{type === 'similar' && (
					<div className='w-[1660px] max-[1765px]:w-[1200px] max-[700px]:w-[400px] max-[1220px]:w-[700px] flex flex-col max-[1765px]:items-center max-[1765px]:justify-center flex-wrap gap-[60px] py-[80px]'>
						<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
						<Film films={data.results} type='similar' query={query} />
					</div>
				)}
				{type === 'liked' && (
					<div className='w-[1660px] max-[1765px]:w-[1200px] max-[700px]:w-[400px] max-[1220px]:w-[700px] max-[705px]:w-[320px] flex flex-col max-[1765px]:items-center max-[1765px]:justify-center flex-wrap gap-[60px] py-[105px]'>
						<p className='font-bold text-[40px] max-[700px]:w-[400px] font-prompt text-center max-[1765px]:w-[600px]'>
							{data.title}
						</p>
						<Film films={data.results} type='liked' query={query} />
					</div>
				)}
			</>
		</div>
	)
}
