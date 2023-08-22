import classes from "./App.module.css";

export default function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader}></div>
      <p>Loading questions...</p>
    </div>
  );
}
