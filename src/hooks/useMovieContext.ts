import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContextDefinition';

export const useMovieContext = () => useContext(MovieContext);
