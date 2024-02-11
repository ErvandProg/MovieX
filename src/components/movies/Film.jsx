import React from 'react';

export default function Film({ films }) {

	return (
		<>
			<div className="flex gap-5">
				{films.map((el, index) => {
					console.log(el);
					if (index < 4) {
						return (
						<div className='w-[400px] h-[560px] rounded-[30px] border-[3px] border-[#FBFF40] flex flex-col items-center' key={`film ${index}`}>
								<div className="w-[350px] pt-[25px] flex flex-col gap-[10px]">
									<img src={"https://image.tmdb.org/t/p/w500/" + el.backdrop_path} alt="" className='w-[350px] h-[400px] object-cover rounded-[30px] ' />
									<p className='text-[20px] font-prompt font-bold leading-[30.24px] '>{el.title}</p>
									<div className="flex pt-6 justify-between">
										<div className="flex gap-2 justify-center items-start">
											<img src="../../../public/Time.png" alt="" className='w-[24px] h-[24px] ' />
											<p className='text-[#383838] font-bold text-[18px] font-prompt leading-[27.22px]'>{el.release_date.slice(0, 4)}</p>
										</div>
										<div className="flex gap-4 justify-center items-start">
											<div className="">
												<svg xmlns="http://www.w3.org/2000/svg" fill='#fa7057ee' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[24px] h-[24px] cursor-pointer">
													<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
												</svg>
											</div>
											<div className="flex gap-2 justify-center items-start">
												<img src="../../../public/Average.png" alt="" className='w-[24px] h-[24px] ' />
												<p className='text-[#383838] font-bold text-[18px] font-prompt leading-[27.22px]'>{el.vote_average}</p>
											</div>
										</div>
									</div>
							</div>
						</div>)
					}
				})}
			</div>
		</>
	);
}