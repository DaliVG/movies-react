import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    if (search!=null){
          const searchUrl = search
      ? "search.php?s=" + search
      : "search.php?s=";
    get(searchUrl).then((data) => {
      setMovies(data.drinks);
    });
    } else {
      setMovies([]);
    }
  }, [search]);

      return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.strDrink} movie={movie} />
      ))}
    </ul>
  );
}