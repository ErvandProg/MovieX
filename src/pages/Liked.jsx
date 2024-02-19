import React from 'react'
import Films from '../components/movies/Films'
import { useLikedStore } from '../stores/useLikedStore'

export default function Liked() {
	let liked = useLikedStore(state => state.liked)

	return (
		<div className='w-[100%] h-[100%] flex flex-col justify-center items-center'>
			<div className='w-[1660px] max-[1660px]:w-[600px] max-[700px]:w-[400px] h-[100%] flex flex-col justify-center items-center pb-[100px]'>
				<Films data={liked} type='liked' />
			</div>
		</div>
	)
}
