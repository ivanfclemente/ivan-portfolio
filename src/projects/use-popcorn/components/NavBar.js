import Logo from "./Logo";
import classes from "./App.module.css";

function NavBar({ children }) {
  return (
    <nav className={classes.navBar}>
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
