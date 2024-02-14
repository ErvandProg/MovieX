	import create from 'zustand';
	import { persist } from 'zustand/middleware';

	export const useLikedStore = create(
		persist(
			(set, get) => ({
				liked: {
					title: "Զամբյուղ",
					results: []
				},
				addALike: (film) => set({
					liked: {
						title: "Զամբյուղ",
						results: [...get().liked.results, film]
					}
				}),
				removeALike: (film) => set({
					liked: {
						title: "Զամբյուղ",
						results: get().liked.results.filter((el) => el.id !== film.id)
					}
				}),

			}),
			{
				name: 'liked films'
			}
		)
	);
