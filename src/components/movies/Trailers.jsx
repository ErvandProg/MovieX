import React, { useEffect, useState } from 'react'

export default function Trailers({ id }) {
	id = +id
	const [trailers, setTrailers] = useState({ id: id, results: [] })
	const [selectedKey, setSelectedKey] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		if (id) {
			fetch(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d91b4b2e8fb2707acd809975c49bcf87`
			)
				.then(response => response.json())
				.then(data => {
					setTrailers(data)
				})
				.catch(error => {
					console.error(`Error ${error}`)
				})
		}
	}, [id])

	function handleClick(key) {
		setSelectedKey(key)
		setIsModalOpen(true)
	}

	function closeModal() {
		setIsModalOpen(false)
		setSelectedKey('')
	}
console.log(id);
	return (
		<div className='w-[100%] flex-col gap-[10px] justify-between items-center text-center max-[1660px]:w-[1000px] max-[1000px]:w-[400px] pt-[40px]'>
			<p className='text-white text-[40px] font-bold'>Trailers</p>
			<div className='w-[100%] flex flex-wrap max-[1660px]:flex-col py-10 pb-20 justify-center items-center gap-5'>
				{trailers.results.map((el, index) => {
					if (index < 4) {
						return (
							<div
								key={el.key}
								className='relative rounded-[30px] border-[3px] border-[#FBFF2B] cursor-pointer'
								onClick={() => handleClick(el.key)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='70'
									height='70'
									viewBox='0 0 70 70'
									fill='none'
									className='absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2'
								>
									<path
										d='M29.8615 46.5215C28.5229 47.3068 26.8389 46.3345 26.8496 44.7826L26.9763 26.4366C26.9869 24.9031 28.6482 23.9516 29.9762 24.7183L45.6744 33.7817C47.0024 34.5484 47.009 36.4629 45.6863 37.2388L29.8615 46.5215Z'
										fill='white'
									/>
									<rect
										x='2'
										y='2'
										width='66'
										height='66'
										rx='33'
										stroke='white'
										strokeWidth='4'
									/>
								</svg>
								 <img src={`https://img.youtube.com/vi/${el.key}/0.jpg`} className='rounded-[30px]' width='394' height='274' alt="" />
								<div className='w-[100%] h-[100%] absolute top-0 z-10'></div>
							</div>
						)
					}
				})}
			</div>
			{isModalOpen && (
				<div className="w-[100%] h-[100%] fixed bg-[linear-gradient(105.93deg,_#383838_1.22%,_#828282_99.05%)] top-0 left-0 z-10 flex justify-center items-center">
					<div className="bg-white p-4 rounded-lg">
						<button onClick={closeModal} className="absolute top-2 right-2 text-[red] hover:text-[yellow]">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
						<iframe
							width="1200"
							height="700"
							src={`https://www.youtube.com/embed/${selectedKey}`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
				)
			}
		</div>
	)
}
