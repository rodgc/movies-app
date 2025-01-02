import { MovieCardProps } from './MovieCard.interface';
import './MovieCard.css';

export const MovieCard = ({ movie }: MovieCardProps) => {
  const onFavorite = () => {
    console.log('Favorite button clicked');
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
        <button className='favorite-btn' onClick={onFavorite}>
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
