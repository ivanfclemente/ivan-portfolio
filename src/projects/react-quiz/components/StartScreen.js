import classes from "./App.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={classes.start}>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className={`${classes.btn} ${classes.btnUi}`}
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
