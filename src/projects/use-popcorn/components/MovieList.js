import Movie from "./Movie";
import classes from "./App.module.css";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className={`${classes.list} ${classes.listMovies}`}>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
