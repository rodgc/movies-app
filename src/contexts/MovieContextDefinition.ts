import { createContext } from 'react';
import { Movie } from '../components/MovieCard/MovieCard.interface';

export const MovieContext = createContext<{
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: string) => void;
  isFavorite: (movieId: string) => boolean;
}>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
});
