export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

export interface MovieResponse {
  results: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export interface ModalProps {
  movie: Movie;
  onClose: () => void;
}
