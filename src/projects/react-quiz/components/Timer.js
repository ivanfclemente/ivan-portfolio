import { useEffect } from "react";
import classes from "./App.module.css";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, "0");
  const secs = (secondsRemaining % 60).toString().padStart(2, "0");

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className={classes.timer}>
      {mins}:{secs}
    </div>
  );
}

export default Timer;
