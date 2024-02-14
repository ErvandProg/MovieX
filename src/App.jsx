import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FilmsInfo from './pages/FilmsInfo';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Login from './pages/Login';
import Search from './pages/Search';

if (!localStorage.getItem("login") && window.location.href !== "http://localhost:5173/login") {
	window.location.href = "/login";
}
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search itemsPerPage={4} />} />
					<Route path='/film' element={<FilmsInfo />} />
					<Route path='/likes' element={<Liked />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
