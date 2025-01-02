import { MovieCardProps } from './MovieCard.interface';
import './MovieCard.css';
import { useMovieContext } from '../../hooks/useMovieContext';
import React from 'react';

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Test');
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className='movie-overlay'>
        <button
          className={`favorite-btn ${favorite ? 'active' : ''}`}
          onClick={onFavorite}>
          ♥
        </button>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};
