import classes from "./App.module.css";

function Header() {
  return (
    <header className={classes.appHeader}>
      <img src="logo512.png" alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
