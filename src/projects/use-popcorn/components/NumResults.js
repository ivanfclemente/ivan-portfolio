import classes from "./App.module.css";

function NumResults({ movies }) {
  return (
    <p className={classes.numResults}>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResults;
