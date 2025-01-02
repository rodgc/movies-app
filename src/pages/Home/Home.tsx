import { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './Home.css';
import { Movie } from '../../components/MovieCard/MovieCard.interface';
import { getPopularMovies, searchMovies } from '../../services/api';

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error loading popular movies', error);
        setError('Error loading popular movies');
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.error('Error searching movies', error);
      setError('Error searching movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search movies...'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search-button'>Search</button>
      </form>
      {error && <div className='error-message'>{error}</div>}
      {loading ? (
        <div className='loading'>Loading</div>
      ) : (
        <div className='movies-grid'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};
