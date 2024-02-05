"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

export default async function MovieSimilar({
  original_title,
  id,
  backdrop_path,
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={backdrop_path} alt={original_title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        <span>{original_title}</span>
      </Link>
    </div>
  );
}
