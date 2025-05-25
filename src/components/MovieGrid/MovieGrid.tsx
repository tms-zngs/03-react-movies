import css from "./MovieGrid.module.css";
import type { MovieResponse } from "../../types/movie";
export default function MovieGrid({ results, onMovieClick }: MovieResponse) {
  return (
    <ul className={css.grid}>
      {results.map((movie) => (
        <li key={movie.id} onClick={() => onMovieClick(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
