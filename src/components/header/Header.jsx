import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLikedStore } from '../../stores/useLikedStore'
import SearchInp from './SearchInp'
import RandomFilms from '../movies/RandomFilms'

export default function Header() {
	const liked = useLikedStore(state => state.liked)
	const [activePage, setActivePage] = useState('')

	const location = useLocation()

	useEffect(() => {
		// Check the pathname of the current location
		if (location.pathname === '/' || location.pathname === '/home') {
			setActivePage('home')
		} else if (location.pathname === '/film') {
			setActivePage('film')
		} else if (location.pathname === '/search') {
			setActivePage('search')
		} else if (location.pathname === '/likes') {
			setActivePage('likes')
		}
	}, [location.pathname])

	return (
		<div className='w-[100%] py-[100px] bg-[linear-gradient(105.93deg,_#383838_1.22%,_#828282_99.05%)] flex flex-col justify-center items-center'>
			<div className='w-[1660px] max-[1765px]:w-[1200px] flex justify-between items-center'>
				<div>
					<Link to='/'>
						<p className='text-[40px] font-black font-prompt text-[#FFFFFF]'>
							Movie
							<span className='text-[50px] font-extrabold text-[#FAFF00]'>
								X
							</span>
						</p>
					</Link>
				</div>
				<div className='flex justify-center items-center gap-6'>
					<Link to='/likes'>
						<div className='relative'>
							<img
								src='../../../public/Average.png'
								alt=''
								className='w-[50px] h-[50px]'
							/>
							{liked.results.length > 0 && (
								<p className='w-[34px] h-[34px] rounded-[17px] flex justify-center items-center bg-[red] text-[white] text-[26px] font-extrabold absolute -right-[3px] -bottom-[14px]'>
									{liked.results.length}
								</p>
							)}
						</div>
					</Link>
					<SearchInp />
				</div>
			</div>
			{activePage === 'home' && (
				<div className='w-[1660px] max-[1765px]:w-[1100px] flex flex-col gap-[60px] max-[1765px]:items-center max-[1765px]:justify-center'>
					<RandomFilms />
					<div className='w-[100%] flex flex-col gap-5'>
						<p className='text-[30px] text-[#FAFF00] font-bold font-prompt'>
							Watch everywhere.
						</p>
						<p className='text-[24px] text-[#FFFFFF] font-[500] font-prompt'>
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV without paying more.
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
