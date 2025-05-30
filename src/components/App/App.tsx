import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import type { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const openModal = (movie: Movie): void => setSelectedMovie(movie);
  const closeModal = (): void => setSelectedMovie(null);

  const handleSearch = async (query: string): Promise<void> => {
    try {
      setIsLoading(true);
      setIsError(false);
      const results = await fetchMovies(query);
      setMovies(results);
      if (results.length === 0) {
        toast.error("No movies found for your request.");
      }
    } catch (error) {
      setIsError(true);
      toast.error("No response. Please try again later.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError ? (
        <ErrorMessage />
      ) : (
        movies.length > 0 && <MovieGrid movies={movies} onSelect={openModal} />
      )}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}
