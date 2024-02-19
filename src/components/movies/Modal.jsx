import React from 'react';

export default function Modal({ id, onClose }) {
	return (
		<div className="w-[100%] h-[100%] fixed bg-[linear-gradient(105.93deg,_#383838_1.22%,_#828282_99.05%)] top-0 left-0 z-10 flex justify-center items-center">
			<div className="bg-white p-4 rounded-lg">
				<button onClick={onClose} className="absolute top-2 right-2 text-[red] hover:text-[yellow]">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</button>
				<iframe
					width="1200"
					height="700"
					src={`https://www.youtube.com/embed/${id}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
