import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useMovieContext } from '../../hooks/useMovieContext';
import './Favorites.css';
export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className='movies-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className='favorites-empty'>
      <h2>No favorites Movies yet</h2>
      <p>
        Start adding movies to your favorites by clicking the heart icon on the
        movie card
      </p>
    </div>
  );
};
