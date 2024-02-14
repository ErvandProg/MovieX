import React from 'react';

export default function Modal({ onClose, id }) {
	return (
		<div className='w-[100%] h-[100%] fixed bg-[linear-gradient(105.93deg,_#383838_1.22%,_#828282_99.05%)] top-0 left-0 z-10 flex justify-center items-center'>
			<div className="bg-white p-4 rounded-lg">
				<button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
					Close
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
