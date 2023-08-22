import { useEffect, useRef } from "react";
import { useKey } from "../hooks/useKey";
import classes from "./App.module.css";

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
