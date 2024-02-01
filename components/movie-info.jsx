import { API_URL } from "../app/(home)/page";

async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }) {
  const Movie = await getMovie(id);
  return <h6>{JSON.stringify(Movie)}</h6>;
}
