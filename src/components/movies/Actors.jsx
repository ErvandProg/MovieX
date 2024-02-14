import React, { useEffect, useState } from 'react';

export default function Actors(props) {
	const { id } = props;
	const [actors, setActors] = useState([]);

	useEffect(() => {
		if (id) {
			fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
				.then(response => response.json())
				.then(data => {
					setActors(data.cast);
				})
				.catch(error => {
					console.error(`Error ${error}`);
				});
		}
	}, [id]);

	return (
		<div className='swiper-slide'>
			{actors.map((el, index) => (
				// Проверяем, что profile_path не равен null
				el.profile_path !== null && (
					<div className='w-[120px] h-[120px] inline-block mx-[20px]' key={index}>
						<img className='w-[120px] h-[120px] rounded-[60px] object-cover' src={"https://image.tmdb.org/t/p/w500/" + el.profile_path} alt="" />
					</div>
				)
			))}
		</div>
	);
}
