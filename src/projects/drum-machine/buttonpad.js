import Button from "./button";
import classes from "./DrumMachine.module.css";
import "./buttonpad.css";

const ButtonPad = (props) => {
  const buttonClasses =
    props.disabled === "on" ? "drum-pad" : "drum-pad disabled";

  return (
    <div className={classes.pad}>
      <div>
        <Button
          className={buttonClasses}
          keyPress="Q"
          id="buttonQ"
          sampleName="Heater 1"
          audioSrc={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
          onPlaySound={props.onPlaySound}
        />
        <Button
          className="drum-pad"
          keyPress="A"
          id="buttonA"
          sampleName="Heater 4"
          audioSrc={
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          }
          onPlaySound={props.onPlaySound}
        />
        <Button
          className="drum-pad"
          keyPress="Z"
          id="buttonZ"
          sampleName="Kick 'n Hat"
          audioSrc={
            "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          }
          onPlaySound={props.onPlaySound}
        />
      </div>
      <div>
        <Button
          className="drum-pad"
          keyPress="W"
          id="buttonW"
          sampleName="Heater 2"
          audioSrc={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}
          onPlaySound={props.onPlaySound}
        />
        <Button
          className="drum-pad"
          keyPress="S"
          id="buttonS"
          sampleName="Clap"
          audioSrc={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}
          onPlaySound={props.onPlaySound}
        />
        <Button
          className="drum-pad"
          keyPress="X"
          id="buttonX"
          sampleName="Kick"
          audioSrc={
            "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          }
          onPlaySound={props.onPlaySound}
        />
      </div>
      <div>
        <Button
          className="drum-pad"
          keyPress="E"
          id="buttonE"
          sampleName="Heater 3"
          audioSrc={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}
          onPlaySound={props.onPlaySound}
        />
        <Button
          className="drum-pad"
          keyPress="D"
          id="buttonD"
          sampleName="Open HiHat"
          audioSrc={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}
          onPlaySound={props.onPlaySound}
        />
        <Button
          className="drum-pad"
          keyPress="C"
          id="buttonC"
          sampleName="Closed HiHat"
          audioSrc={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
          onPlaySound={props.onPlaySound}
        />
      </div>
    </div>
  );
};

export default ButtonPad;
