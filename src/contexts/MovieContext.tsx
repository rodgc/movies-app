import { useState, useEffect, useMemo, useCallback } from 'react';
import { MovieContext } from './MovieContextDefinition';
import { Movie } from '../components/MovieCard/MovieCard.interface';

export const MovieProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = useCallback(
    (movieId: string) => favorites.some((movie) => movie.id === movieId),
    [favorites],
  );

  const value = useMemo(
    () => ({
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
    }),
    [favorites, isFavorite],
  );

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
