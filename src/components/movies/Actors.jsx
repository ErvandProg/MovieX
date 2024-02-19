import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default function Actors(props) {
	const { id } = props
	const [actors, setActors] = useState([])

	useEffect(() => {
		if (id) {
			fetch(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d91b4b2e8fb2707acd809975c49bcf87`
			)
				.then(response => response.json())
				.then(data => {
					setActors(data.cast)
				})
				.catch(error => {
					console.error(`Error ${error}`)
				})
		}
	}, [id])

	useEffect(() => {
		if (actors.length > 0) {
			new Swiper('.swiper-container', {
				slidesPerView: 4.5,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
		}
	}, [actors])

	return (
		<div
			className='swiper-container'
			style={{ maxWidth: '1000px', overflow: 'hidden', position: 'relative' }}
		>
			<div className='swiper-wrapper' style={{ maxWidth: '800px' }}>
				{actors.map((el, index) => (
					<div className='swiper-slide' key={index} style={{ width: '120px' }}>
						<img
							className='rounded-full'
							style={{ width: '120px', height: '120px', objectFit: 'cover' }}
							src={
								el.profile_path === null
									? './../../../public/Error.jpeg'
									: 'https://image.tmdb.org/t/p/w500/' + el.profile_path
							}
							alt=''
						/>
					</div>
				))}
			</div>
			<div
				className='swiper-button-prev'
				style={{
					position: 'absolute',
					left: 0,
					top: '50%',
					transform: 'translateY(-50%)',
				}}
			></div>
			<div
				className='swiper-button-next'
				style={{
					position: 'absolute',
					right: 0,
					top: '50%',
					transform: 'translateY(-50%)',
				}}
			></div>
		</div>
	)
}
