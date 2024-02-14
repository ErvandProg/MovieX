import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FilmsInfo from './pages/FilmsInfo';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Search from './pages/Search';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search itemsPerPage={4} />} />
					<Route path='/film' element={<FilmsInfo />} />
					<Route path='/likes' element={<Liked />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
