import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLikedStore = create(
	persist(
		(set, get) => ({
			liked: {
				title: "Զամբյուղ",
				results: []
			},

			addALike: (film) => {
				set((state) => ({
					liked: {
						...state.liked,
						results: [...state.liked.results, film]
					}
				}));
			},

			removeALike: (film) => {
				set((state) => ({
					liked: {
						...state.liked,
						results: state.liked.results.filter((el) => el.id !== film.id)
					}
				}));
			}
		}),
		{
			name: 'liked films'
		}
	)
);
