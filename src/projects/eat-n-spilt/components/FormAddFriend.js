import classes from "./FormAddFriend.module.css";

import Button from "./Button";
import { useState } from "react";

function FormAddFriend({ friends, onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    onAddFriend(newFriend);
  }

  return (
    <form className={classes.formAddFriend} onSubmit={handleSubmit}>
      <label className={classes.label}>👩🏻‍🤝‍🧑🏻Friend name</label>
      <input
        className={classes.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={classes.label}>🌆Image URL</label>
      <input
        className={classes.input}
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
