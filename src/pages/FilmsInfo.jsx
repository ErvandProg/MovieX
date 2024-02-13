import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Actors from '../components/movies/Actors';
import Films from '../components/movies/Films';

export default function FilmsInfo() {
	const [film, setFilm] = useState({});
	const [similarFilms, setSimilarFilms] = useState({ title: "Similar films", results: [] });
	const location = useLocation();
	const params = {};
	const queryString = location.search.substring(1);
	const paramsArray = queryString.split('&');

	paramsArray.forEach(param => {
		const [key, value] = param.split('=');
		const replacedValue = value.replaceAll("%20", " ");
		params[key] = replacedValue ? replacedValue.replace(/\+/g, ' ') : '';
	});

	useEffect(() => {
		if (params.query) {
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=${params.query}`)
				.then(response => response.json())
				.then(data => {
					setSimilarFilms({ title: "Similar films", results: [...data.results] })
					data.results.filter(el => {
						if (el.id===+params.id) {
							setFilm(el);
						}
					})
				})
				.catch(error => {
					console.error(`Error ${error}`);
				});
			}
		}, [params.query]);

	function handleClick() {
		window.scrollTo({ left: 0, behavior: 'smooth' });
		console.log(0);
	}

		return (
		<div className='h-[100%]'>
			<div className="w-[100%] h-[800px] bg-[linear-gradient(105.93deg,_#3B3B3B_1.22%,_#8A8A8A_99.05%)] flex flex-col items-center">
				<div className="w-[1660px] flex gap-[120px] items-center justify-center">
					<div className="h-[500px] flex">
						<img src={"https://image.tmdb.org/t/p/w500/" + film.poster_path} alt="" className='w-[400px] h-[500px] rounded-[30px] object-cover' />
					</div>
					<div className="h-[500px] flex flex-col gap-5 text-[#fff]">
						<p className='text-[40px] text-[#FAFF00] font-bold font-prompt'>{film.original_title}</p>
						<div className='flex flex-col gap-[40px]'>
							<div className="flex gap-5 items-center">
								<img src="../../public/Time.png" alt="" className='w-[50px] h-[50px]' />
								<p className='text-[24px] font-medium'>{film.release_date}</p>
							</div>
							<div className="flex gap-5 items-center">
								<img src="../../public/Average.png" alt="" className='w-[50px] h-[50px]' />
								<p className='text-[24px] font-medium'>{film.vote_average}</p>
							</div>
							<div className="flex gap-5 items-center">
								<img src="../../public/RTX.png" alt="" className='w-[50px] h-[50px]' />
								<p className='text-[24px] font-medium'>None</p>
							</div>
							<div className="w-[1100px] h-[120px] flex justify-between items-center">
								<img src="../../public/ArrowLeft.png" alt="" className='w-[50px] h-[50px]' onClick={handleClick} />
								<div className="w-[800px] h-[120px] overflow-hidden" >
									<Actors id={params.id} />
								</div>
								<img src="../../public/ArrowRight.png" alt="" className='w-[50px] h-[50px]' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[100%] h-[920px]">
				<Films data={similarFilms} type="similar" query={params.query} />
			</div>
		</div>
	)
}