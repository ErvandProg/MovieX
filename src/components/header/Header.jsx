import React from 'react'
import Search from './Search'

export default function Header() {
	return (
		<div className='w-[100%] py-[100px] bg-[linear-gradient(105.93deg,_#383838_1.22%,_#8A8A8A_99.05%)] flex justify-center items-center'>
			<div className="w-[1660px] flex justify-between items-center">
				<p className='text-[40px] font-black font-prompt text-[#FFFFFF]'>Movie<span className='text-[50px] font-extrabold text-[#FAFF00]'>X</span></p>
				<Search />
			</div>
		</div>
	)
}
