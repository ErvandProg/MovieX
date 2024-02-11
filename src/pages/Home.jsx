import React, { useEffect, useState } from 'react';
import Films from '../components/movies/Films';

export default function Home() {
	const [popular, setPopular] = useState({ title: "Most popular films", results: [] });
	const [rated, setRated] = useState({ title: "Most rated films", results: [] });

	useEffect(() => {
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87')
			.then(response => response.json())
			.then(data => {
				setPopular({ title: "Most popular films", results: data.results });
			})
			.catch(error => {
				console.error(`Error ${error}`);
			});

		fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d91b4b2e8fb2707acd809975c49bcf87')
			.then(response => response.json())
			.then(data => {
				setRated({ title: "Most rated films", results: data.results });
			})
			.catch(error => {
				console.error(`Error ${error}`);
			});
	}, []);

	let randomNums = [];
	getRandomNums(20, 3);

	function getRandomNums(max, count) {
		for (let index = 0; index < count; index++) {
			let random = Math.floor(Math.random() * max);
			if (randomNums.includes(random)) {
				index--
			} else {
				randomNums.push(random);
			}
		}
	}

	return (
		<div className='h-[100%]'>
			<div className="w-[100%] h-[800px] bg-[linear-gradient(105.93deg,_#3B3B3B_1.22%,_#8A8A8A_99.05%)] flex flex-col items-center">
				<div className="w-[1660px] flex flex-col gap-[60px]">
					<div className="w-[1660px] flex gap-5 pt-[30px]">
					{popular.results.length > 0 && (
						<div className="w-[820px] h-[500px] rounded-[30px] relative">
							<img src={"https://image.tmdb.org/t/p/w500/"+popular.results[randomNums[0]].backdrop_path} alt="" className='w-[820px] h-[500px] rounded-[30px]' />
							<button className='text-[14px] font-bold w-[160px] h-[60px] font-prompt bg-[#FBFF2B] rounded-[30px] absolute bottom-10 right-10'>Watch Now</button>
						</div>
					)}
					{popular.results.length > 0 && (
						<div className="w-[400px] h-[500px] rounded-[30px]">
							<img src={"https://image.tmdb.org/t/p/w500/" + popular.results[randomNums[1]].backdrop_path} alt="" className='w-[400px] h-[500px] rounded-[30px] object-cover' />
						</div>
					)}
					{popular.results.length > 0 && (
						<div className="w-[400px] h-[500px] rounded-[30px]">
							<img src={"https://image.tmdb.org/t/p/w500/" + popular.results[randomNums[2]].backdrop_path} alt="" className='w-[400px] h-[500px] rounded-[30px] object-cover' />
						</div>
					)}
				</div>
				<div className="w-[100%] flex flex-col gap-5">
					<p className='text-[30px] text-[#FAFF00] font-bold font-prompt'>Watch everywhere.</p>
					<p className='text-[24px] text-[#FFFFFF] font-[500] font-prompt'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
				</div>
				</div>
			</div>
			<Films data={[popular, rated]} type='few' />
		</div>
	);
}
