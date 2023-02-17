import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("lookup.php?i="+movieId).then((data) => {
      setMovie(data.drinks);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  let ingredients = [];
  const imgURL = "https://www.thecocktaildb.com/images/ingredients/";
    for (let i = 0; i < 15; i++) {
      if (movie[`strIngredient${i}`]!=null) {
        let item = {};
        item.ingredient = movie[`strIngredient${i}`];
        item.key = `ingredient-${i}`;
        let imagIng = imgURL+`${movie[`strIngredient${i}`]}-Medium.png`;
        item.URL= imagIng;
        ingredients.push(item);
      }
    }

  return (
    
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={movie.strDrinkThumb}
        alt={movie.strDrink}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.strDrink}
        </p>
        <p>
        <strong>Ingredientes:</strong>{" "}
        {ingredients.forEach(element => {
            <img
            className={`${styles.col} ${styles.movieImage}`}
            src={element.URL}
            alt={element.ingredient}
          />
          })}
        </p>
      </div>
    </div>
  );
}