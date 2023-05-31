import { useState } from "react";
import classes from "./DrumMachine.module.css";
import ButtonPad from "./buttonpad";

const DrumMachine = () => {
  const [sample, setSample] = useState("");
  const [onoff, setOnoff] = useState("on");
  const [volume, setVolume] = useState(50);

  const handleVolume = (e) => {
    setVolume(e.target.value);
    if (onoff === "on") {
      setSample("Volume: " + e.target.value + "%");
    }
  };

  const playSound = (value, name, id) => {
    let audio = document.getElementById(value);
    if (onoff === "on") {
      audio.volume = volume / 100;
      audio.play();
      setSample(name);
      document.getElementById(id).click();
      document.getElementById(id).focus();
      setTimeout(() => {
        document.getElementById(id).blur();
      }, 300);
    } else {
      document.getElementById(id).click();
      document.getElementById(id).focus();
      setTimeout(() => {
        document.getElementById(id).blur();
      }, 300);
    }
  };

  const onOff = () => {
    if (onoff === "off") {
      setOnoff("on");
      let elements = document.getElementsByClassName("drum-pad");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("disabled");
      }
    } else {
      setOnoff("off");
      setSample("");
      let elements = document.getElementsByClassName("drum-pad");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("disabled");
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.drumMachine}>
        <ButtonPad onPlaySound={playSound} disabled={onoff} />
        <div className={classes.controls}>
          <div className={classes.control}>
            <div className={classes.controlName}>Power</div>
            <div className={classes.onOff}>
              <button
                className={
                  onoff === "on"
                    ? `${classes.switch} ${classes.switchOn}`
                    : `${classes.switch}`
                }
                id="on-offSwitch"
                onClick={onOff}
              ></button>
            </div>
          </div>
          <div className={`${classes.control} ${classes.display}`}>
            {sample}
          </div>
          <input
            type="range"
            className={classes.volumeSlider}
            min="0"
            max="100"
            step="1"
            onChange={handleVolume}
            value={volume}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
