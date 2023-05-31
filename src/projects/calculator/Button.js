const Button = (props) => {
  return (
    <button
      className={!props.classes ? "key col-sm-3" : props.classes}
      id={!props.id ? `key-${props.keyValue}` : props.id}
      onClick={() => props.onDisplay(props.keyValue)}
      disabled={props.digitLimit ? true : false}
    >
      {props.keyValue === "*" ? "x" : props.keyValue}
    </button>
  );
};

export default Button;
