import React from 'react';
import { Link } from 'react-router-dom';
import { useLikedStore } from '../../stores/useLikedStore';
import SearchInp from './SearchInp';


export default function Header() {
	let liked = useLikedStore((state) => state.liked);

	return (
		<div className='w-[100%] py-[100px] bg-[linear-gradient(105.93deg,_#383838_1.22%,_#828282_99.05%)] flex justify-center items-center'>
			<div className="w-[1660px] flex justify-between items-center">
				<div className="">
					<Link to="/"><p className='text-[40px] font-black font-prompt text-[#FFFFFF]'>Movie<span className='text-[50px] font-extrabold text-[#FAFF00]'>X</span></p></Link>
				</div>
				<div className="flex justify-center items-center gap-6">
					<Link to="likes"><div className="relative"><img src="../../../public/Average.png" alt="" className='w-[50px] h-[50px]' /><p className='w-[34px] h-[34px] rounded-[17px] flex justify-center items-center bg-[red] text-[white] text-[26px] font-extrabold absolute -right-[3px] -bottom-[14px]'>{liked.results.length}</p></div></Link>
					<SearchInp />
				</div>
			</div>
		</div>
	)
}
