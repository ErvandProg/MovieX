import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLikedStore } from '../../stores/useLikedStore'

export default function Film({ films, type, query }) {
	let liked = useLikedStore(state => state.liked)
	let addALike = useLikedStore(state => state.addALike)
	let removeALike = useLikedStore(state => state.removeALike)

	function checkAcctive(el) {
		return liked.results.find(element => element.id === el.id)
	}

	function handleClick(el) {
		if (liked.results.find(element => element.id === el.id)) {
			removeALike(el)
		} else {
			addALike(el)
		}
	}

	if (type === 'similar') {
		const location = useLocation()
		const params = {}
		const queryString = location.search.substring(1)
		const paramsArray = queryString.split('&')

		paramsArray.forEach(param => {
			const [key, value] = param.split('=')
			const replacedValue = value.replaceAll('%20', ' ')
			params[key] = replacedValue ? replacedValue.replace(/\+/g, ' ') : ''
		})

		films = films.filter(el => {
			if (el.id !== +params.id) {
				return el
			}
		})
	}
	return (
		<>
			<div className='flex gap-5 justify-center items-center flex-wrap'>
				{films.length === 0 && (
					<div className='w-[800px] h-[80px] rounded-[30px] border-[3px] border-[#FBFF40] flex justify-center items-center'>
						<p className='text-[25px] font-prompt font-bold leading-[30.24px]'>
							No films available
						</p>
					</div>
				)}

				{films.map(
					(el, index) =>
						(index < 4 || type === 'liked') && (
							<div
								className='w-[400px] h-[560px] rounded-[30px] border-[3px] border-[#FBFF40] flex flex-col items-center'
								key={`film ${index}`}
							>
								<div className='w-[350px] py-[25px] flex flex-col gap-[10px]'>
									<Link
										to={
											type !== 'few'
												? `/film?query=${query}&id=${el.id}`
												: `/film?query=${el.title}&id=${el.id}`
										}
									>
										<img
											src={
												el.backdrop_path === null && el.poster_path === null
													? '../../../public/Error.jpeg'
													: el.backdrop_path === null
													? 'https://image.tmdb.org/t/p/w500/' + el.poster_path
													: 'https://image.tmdb.org/t/p/w500/' +
													  el.backdrop_path
											}
											alt=''
											className='w-[350px] h-[400px] object-cover rounded-[30px]'
										/>
										<p className='text-[20px] font-prompt font-bold leading-[30.24px]'>
											{el.title}
										</p>
									</Link>
									<div className='flex pt-6 justify-between'>
										<div className='flex gap-2 justify-center items-start'>
											<img
												src='../../../public/Time.png'
												alt=''
												className='w-[24px] h-[24px]'
											/>
											<p className='text-[#383838] font-bold text-[18px] font-prompt leading-[27.22px]'>
												{el.release_date.slice(0, 4)}
											</p>
										</div>
										<div className='flex gap-4 justify-center items-start'>
											<div className=''>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													onClick={() => handleClick(el)}
													fill={checkAcctive(el) ? '#f74444' : 'white'}
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-[24px] h-[24px] cursor-pointer'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
													/>
												</svg>
											</div>
											<div className='flex gap-2 justify-center items-start'>
												<img
													src='../../../public/Average.png'
													alt=''
													className='w-[24px] h-[24px]'
												/>
												<p className='text-[#383838] font-bold text-[18px] font-prompt leading-[27.22px]'>
													{el.vote_average}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
				)}
			</div>
		</>
	)
}
