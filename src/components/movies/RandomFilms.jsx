import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function RandomFilms() {
	const [popular, setPopular] = useState({
		title: 'Most popular films',
		results: [],
	})

	let randomNums = []
	getRandomNums(20, 3)

	function getRandomNums(max, count) {
		for (let index = 0; index < count; index++) {
			let random = Math.floor(Math.random() * max)
			if (randomNums.includes(random)) {
				index--
			} else {
				randomNums.push(random)
			}
		}
	}

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87'
		)
			.then(response => response.json())
			.then(data => {
				setPopular({
					title: 'Most popular films',
					results: data.results,
				})
			})
	}, [])

	return (
		<div className='w-[1660px] max-[1765px]:w-[1200px] max-[1220px]:w-[700px] max-[1765px]:justify-center max-[1765px]:items-center flex flex-wrap gap-5 pt-[30px]'>
			{popular.results.length > 0 && (
				<Link
					to={`/film?query=${popular.results[randomNums[0]].title}&id=${
						popular.results[randomNums[0]].id
					}`}
				>
					<div className='w-[820px] h-[500px] rounded-[30px] relative max-[1220px]:w-[600px] max-[705px]:w-[400px] max-[705px]:h-[400px] max-[1220px]:h-[400px]'>
						<img
							src={
								'https://image.tmdb.org/t/p/w500/' +
								popular.results[randomNums[0]].backdrop_path
							}
							alt=''
							className='w-[820px] h-[500px] rounded-[30px] max-[1220px]:w-[600px] max-[1220px]:h-[400px]'
						/>
						<button className='text-[14px] font-bold w-[160px] h-[60px] font-prompt bg-[#FBFF2B] rounded-[30px] absolute bottom-10 right-10'>
							Watch Now
						</button>
					</div>
				</Link>
			)}
			{popular.results.length > 0 && (
				<Link
					to={`/film?query=${popular.results[randomNums[1]].title}&id=${
						popular.results[randomNums[1]].id
					}`}
				>
					<div className='w-[400px] h-[500px] rounded-[30px]'>
						<img
							src={
								'https://image.tmdb.org/t/p/w500/' +
								popular.results[randomNums[1]].backdrop_path
							}
							alt=''
							className='w-[400px] h-[500px] rounded-[30px] object-cover'
						/>
					</div>
				</Link>
			)}
			{popular.results.length > 0 && (
				<Link
					to={`/film?query=${popular.results[randomNums[2]].title}&id=${
						popular.results[randomNums[2]].id
					}`}
				>
					<div className='w-[400px] h-[500px] rounded-[30px]'>
						<img
							src={
								'https://image.tmdb.org/t/p/w500/' +
								popular.results[randomNums[2]].backdrop_path
							}
							alt=''
							className='w-[400px] h-[500px] rounded-[30px] object-cover'
						/>
					</div>
				</Link>
			)}
		</div>
	)
}
