import classes from "./App.module.css";

function ErrorMessage({ message }) {
  return <p className={classes.error}>⛔{message}</p>;
}

export default ErrorMessage;
