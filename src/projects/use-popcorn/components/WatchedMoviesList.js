import WatchedMovie from "./WatchedMovie";
import classes from "./App.module.css";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className={classes.list}>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
