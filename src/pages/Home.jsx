import React, { useEffect, useState } from 'react'
import Films from '../components/movies/Films'

export default function Home() {
	const [popular, setPopular] = useState({
		title: 'Most popular films',
		results: [],
	})
	const [rated, setRated] = useState({
		title: 'Most rated films',
		results: [],
	})

	useEffect(() => {
		if (
			window.location.href === 'http://localhost:5173/login' ||
			window.location.href === 'http://localhost:5173/register'
		) {
			window.location.href = 'http://localhost:5173/'
		}
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87'
		)
			.then(response => response.json())
			.then(data => {
				let randomNums = []
				let newArr = []
				for (let index = 0; index < 20; index++) {
					let random = Math.floor(Math.random() * 20)
					if (randomNums.includes(random)) {
						index--
					} else {
						randomNums.push(random)
					}
				}
				for (let index = 0; index < data.results.length; index++) {
					newArr.push(data.results[randomNums[index]])
				}
				setPopular({
					title: 'Most popular films',
					results: newArr,
				})
			})
		fetch(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=d91b4b2e8fb2707acd809975c49bcf87'
		)
			.then(response => response.json())
			.then(data => {
				let randomNums = []
				let newArr = []
				for (let index = 0; index < 20; index++) {
					let random = Math.floor(Math.random() * 20)
					if (randomNums.includes(random)) {
						index--
					} else {
						randomNums.push(random)
					}
				}
				for (let index = 0; index < data.results.length; index++) {
					newArr.push(data.results[randomNums[index]])
				}
				setRated({
					title: 'Most rated films',
					results: newArr,
				})
			})
	}, [])

	return (
		<div className='h-[100%]'>
			<Films data={[popular, rated]} type='few' />
		</div>
	)
}
