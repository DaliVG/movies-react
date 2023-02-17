
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = movie.strDrinkThumb;
  return (
    <li className={styles.movieCard}>
      <Link to={movie.idDrink}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.strDrink}
        />
        <div>{movie.strDrink}</div>
      </Link>
    </li>
  );
}