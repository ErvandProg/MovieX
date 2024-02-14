import React, { useEffect, useState } from 'react';
import Film from './Film';

export default function Films({ data, type="default", currentItems=undefined, query }) {
	const [isLoading, setIsLoading] = useState(true);
	const [filmBase, setFilmBase] = useState(currentItems);
	
	useEffect(() => {
		return () => {
			setFilmBase(currentItems)
		}
	}, [currentItems])
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='flex flex-col justify-center items-center pb-[40px]'>
			{isLoading && <img src="../../../public/loading.gif" alt="" />}
			{!isLoading && (
				<>
					{
						type === "few" && (
							<>
								{data.map((el, index) => (
									<div className="w-[1660px] flex flex-col gap-[60px] py-[80px]" key={index}>
										<p className='font-bold text-[40px] font-prompt'>{el.title}</p>
										<Film films={el.results} />
									</div>
								))}
							</>
						)
					}
					{
						(type === "default" || type === "paginate") && (
							<div className="w-[1660px] flex flex-col gap-[60px] py-[80px]">
								<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
								<Film films={data.results} currentItems={filmBase} query={query} />
							</div>
						)
					}
					{
						type === "similar" && (
							<div className="w-[1660px] flex flex-col gap-[60px] py-[80px]">
								<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
								<Film films={data.results} type="similar" query={query} />
							</div>
						)
					}
					{
						type === "liked" && (
							<div className="w-[1660px] flex flex-col gap-[60px] py-[105px]">
								<p className='font-bold text-[40px] font-prompt text-center'>{data.title}</p>
								<Film films={data.results} query={query} />
							</div>
						)
					}
				</>
			)}
		</div>
	);
}
