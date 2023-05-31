import { useEffect } from "react";

const Button = (props) => {
  useEffect(() => {
    const validKeys = /^[qweasdzxc]$/i;

    const handleKeyPress = (e) => {
      if (e.key.match(validKeys)) {
        let button = "button" + e.key.toUpperCase();
        document.getElementById(button).click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <button
      className={`drum-pad button${props.keyPress}`}
      id={props.id}
      onClick={() =>
        props.onPlaySound(props.keyPress, props.sampleName, props.id)
      }
    >
      <audio id={props.keyPress} className="clip" src={props.audioSrc} />
      {props.keyPress}
    </button>
  );
};

export default Button;
