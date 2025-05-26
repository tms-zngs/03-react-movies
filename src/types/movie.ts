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

export interface MovieGridResponseProps {
  results: Movie[];
  onSelect: (movie: Movie) => void;
}

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}
