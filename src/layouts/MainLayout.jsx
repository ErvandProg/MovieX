import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export default function MainLayout() {
	return (
		<div className='w-[100%] h-[100%] flex flex-col justify-between'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
