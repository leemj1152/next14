import { Suspense } from "react";
import MovieSimilar from "../../../../../components/movie-similar";
import { API_URL } from "../../../../(home)/page";
import styles from "../../../../../styles/movie-similar.module.css";
import { getMovie } from "../../../../../components/movie-info";

async function getSimilar(id) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function Similar({ params: { id } }) {
  const similar = await getSimilar(id);
  const { title } = await getMovie(id);
  return (
    <Suspense fallback={<h1>Loding movie similar...</h1>}>
      <h3 className={styles.title}>{title}과 비슷한 영화</h3>
      <div className={styles.container}>
        {similar.map((movie) => (
          <MovieSimilar
            id={movie.id}
            original_title={movie.original_title}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </div>
    </Suspense>
  );
}
