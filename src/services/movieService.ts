import axios from "axios";
import type { Movie } from "../types/movie";
import type { MovieResponse } from "../types/movie";
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const url = "https://api.themoviedb.org/3/search/movie";

  const response = await axios.get<MovieResponse>(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};
