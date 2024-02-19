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
		if (window.location.href === 'http://localhost:5173/login') {
			window.location.href = 'http://localhost:5173/'
		}
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
		fetch(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=d91b4b2e8fb2707acd809975c49bcf87'
		)
			.then(response => response.json())
			.then(data => {
				setRated({
					title: 'Most rated films',
					results: data.results,
				})
			})
	}, [])

	return (
		<div className='h-[100%]'>
			<Films data={[popular, rated]} type='few' />
		</div>
	)
}
