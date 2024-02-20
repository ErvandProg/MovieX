import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import FilmsInfo from './pages/FilmsInfo'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Login from './pages/Login'
import Search from './pages/Search'
import Register from './pages/Register'

if (
	!localStorage.getItem('login') &&
	!localStorage.getItem('register') &&
	window.location.href !== 'http://localhost:5173/register'
) {
	window.location.href = '/register'
} else if (
	!localStorage.getItem('login') &&
	localStorage.getItem('register') &&
	window.location.href !== 'http://localhost:5173/login'
) {
	window.location.href = '/login'
}

if (
	localStorage.getItem('login') &&
	window.location.href === 'http://localhost:5173/login'
) {
	window.location.href = '/'
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
					<Route
						path='/login'
						element={
							!localStorage.getItem('login') &&
							localStorage.getItem('register') ? (
								<Login />
							) : !localStorage.getItem('register') ? (
								<Register />
							) : (
								<Home />
							)
						}
					/>
					<Route
						path='/register'
						element={
							!localStorage.getItem('login') &&
							!localStorage.getItem('register') ? (
								<Register />
							) : (
								<Home />
							)
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
