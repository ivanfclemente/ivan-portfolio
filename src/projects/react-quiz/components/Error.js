import classes from "./App.module.css";

function Error() {
  return (
    <p className={classes.error}>
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
