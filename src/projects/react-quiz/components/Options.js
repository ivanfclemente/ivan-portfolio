import classes from "./App.module.css";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className={classes.options}>
      {question.options.map((option, index) => (
        <button
          className={`${classes.btn} ${classes.btnOption} ${
            index === answer ? classes.answer : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? classes.correct
                : classes.wrong
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
