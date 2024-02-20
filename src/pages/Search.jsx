import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Films from '../components/movies/Films'

export default function Search() {
	const [isLoading, setIsLoading] = useState(true)
	const [searchFilms, setSearchFilms] = useState({ title: '', results: [] })

	const location = useLocation()
	const params = {}
	const queryString = location.search.substring(1)
	const paramsArray = queryString.split('&')

	paramsArray.forEach(param => {
		const [key, value] = param.split('=')
		const replacedValue = value.replaceAll('%20', ' ')
		params[key] = replacedValue ? replacedValue.replace(/\+/g, ' ') : ''
	})

	useEffect(() => {
		setIsLoading(true)
		if (params.query) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=${params.query}`
			)
				.then(response => response.json())
				.then(data => {
					setSearchFilms({ title: params.query, results: data.results })
				})
				.finally(() => {
					setIsLoading(false)
				})
		}
	}, [])

	return (
		<>
			{isLoading && (
				<img src='./../../public/loading.gif' width='200px' height='100px' />
			)}
			{!isLoading && (
				<div className='w-[100%] h-[100%] flex flex-col justify-center items-center'>
					<div className='w-[1660px] h-[100%] max-[1700px]:w-[1000px] max-[1000px]:w-[400px] flex flex-col justify-center items-center pb-[100px]'>
						{searchFilms.results.length !== 0 && (
							<>
								<Films data={searchFilms} type='search' query={params.query} />
							</>
						)}
						{searchFilms.results.length === 0 && (
							<div className='py-[252.5px]'>
								<p className='text-[30px] flex font-bold font-prompt'>
									<img src='../../public/ic_round-error-outline.png' alt='' />
									The film does not found
								</p>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}
