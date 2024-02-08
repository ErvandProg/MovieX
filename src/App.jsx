import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element='' />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
