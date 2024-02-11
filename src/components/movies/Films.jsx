import React, { useEffect, useState } from 'react';
import Film from './Film';

export default function Films({ data, type }) {
	const [isLoading, setIsLoading] = useState(true);

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
					{type === "few" ? (
						<>
							{data.map((el, index) => (
								<div className="w-[1660px] flex flex-col gap-[60px] py-[80px]" key={index}>
									<p className='font-bold text-[40px] font-prompt'>{el.title}</p>
									<Film films={el.results} />
								</div>
							))}
						</>
					) : (
						<div className="w-[1660px] flex flex-col gap-[60px] py-[80px]">
							<p className='font-bold text-[40px] font-prompt'>{data.title}</p>
							<Film films={data} />
						</div>
					)}
				</>
			)}
		</div>
	);
}
