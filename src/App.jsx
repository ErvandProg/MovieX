import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Search from './pages/Search';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search itemsPerPage={4} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
