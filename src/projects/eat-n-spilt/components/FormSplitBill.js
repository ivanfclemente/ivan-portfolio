import classes from "./FormSplitBill.module.css";

import Button from "./Button";
import { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [whoPays, setWhoPays] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;
    onSplitBill(whoPays === "user" ? friendExpense : -userExpense);
  }

  return (
    <form className={classes.formSplitBill} onSubmit={handleSubmit}>
      <h2>{`Split a bill with ${selectedFriend.name}`}</h2>

      <label className={classes.label}>💲Bill value</label>
      <input
        className={classes.input}
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label className={classes.label}>🧍‍♂️Your expenses</label>
      <input
        className={classes.input}
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(+e.target.value > bill ? userExpense : +e.target.value)
        }
      />

      <label
        className={classes.label}
      >{`👩🏻‍🤝‍🧑🏻${selectedFriend.name}'s expense`}</label>
      <input
        className={classes.input}
        type="text"
        value={friendExpense}
        disabled
      />

      <label className={classes.label}>🤑 Who is paying the bill</label>
      <select
        className={classes.select}
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
