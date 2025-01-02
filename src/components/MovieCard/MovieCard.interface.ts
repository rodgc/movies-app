export interface MovieCardProps {
  movie: Movie;
}

export interface Movie {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
}
