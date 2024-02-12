import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';
import Films from '../components/movies/Films';

export default function Search({ itemsPerPage }) {
	const [itemOffset, setItemOffset] = useState(0);
	const [searchFilms, setSearchFilms] = useState({ title: "", results: [] });
	const [currentItems, setCurrentItems] = useState([]);

	const location = useLocation();
	const queryParams = {};
	const queryString = location.search.substring(1);
	const paramsArray = queryString.split('&');

	paramsArray.forEach(param => {
		const [key, value] = param.split('=');
		queryParams[key] = value ? value.replace(/\+/g, ' ') : '';
	});

	useEffect(() => {
		if (queryParams.query) {
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=${queryParams.query}`)
				.then(response => response.json())
				.then(data => {
					setSearchFilms({ title: queryParams.query, results: data.results });
				})
				.catch(error => {
					console.error(`Error ${error}`);
				});
		}
	}, [queryParams.query]);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(searchFilms.results.slice(itemOffset, endOffset));
	}, [itemOffset, searchFilms.results, itemsPerPage]);

	const pageCount = Math.ceil(searchFilms.results.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % searchFilms.results.length;
		setItemOffset(newOffset);
	};

	return (
		<div className='w-[100%] h-[100%] flex flex-col justify-center items-center'>
			<div className="w-[1660px] h-[100%] flex flex-col justify-center items-center">
				{searchFilms.results.length !== 0 && (
					<>
						<Films data={searchFilms.results} type="paginate" currentItems={currentItems} />
						<ReactPaginate
							breakLabel="..."
							nextLabel="next >"
							onPageChange={handlePageClick}
							pageRangeDisplayed={4}
							pageCount={pageCount}
							previousLabel="< previous"
							renderOnZeroPageCount={null}
						/>
					</>
				)}
				{searchFilms.results.length === 0 && (
					<div className="py-[252.5px]">
						<p className='text-[30px] flex font-bold font-prompt'>
							<img src="../../public/ic_round-error-outline.png" alt="" />
							The film does not found
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
