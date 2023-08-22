import classes from "./Friend.module.css";

import Button from "./Button";

function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend?.id;
  return (
    <li className={isSelected ? classes.selected : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className={classes.red}>
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className={classes.green}>
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
