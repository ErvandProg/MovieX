import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element=''>
					<Route path='/' element='' />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
