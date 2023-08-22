import React, { useState } from "react";
import classes from "./Clock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faArrowsRotate,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Clock = () => {
  const [length, setLength] = useState(25);
  const [breakL, setBreakL] = useState(5);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [breakTimeLeft, setBreakTimeLeft] = useState(5);
  let audio = document.getElementById("beep");

  const formatTime = (time) => {
    let mins = String(Math.floor(time / 60)).padStart(2, "0");
    let secs = String(time % 60).padStart(2, "0");
    return mins + ":" + secs;
  };

  const increaseLength = (type) => {
    if (type === "session" && length < 60) {
      setLength((prev) => prev + 1);
      setTimeLeft((prev) => prev + 60);
    }
    if (type === "break" && breakL < 60) {
      setBreakL((prev) => prev + 1);
      setBreakTimeLeft((prev) => prev + 60);
    }
  };

  const decreaseLength = (type) => {
    if (type === "session" && length > 1) {
      setLength((prev) => prev - 1);
      setTimeLeft((prev) => prev - 60);
    }
    if (type === "break" && breakL > 1) {
      setBreakL((prev) => prev - 1);
      setBreakTimeLeft((prev) => prev - 60);
    }
  };

  const startTimer = () => {
    if (!timerOn) {
      setTimerOn(true);
      let timeRem = timeLeft;
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        timeRem = timeRem - 1;
        if (timeRem < 1) {
          clearInterval(timer);
          setTimeLeft(length * 60);
          let audio = document.getElementById("beep");
          audio.currentTime = 0;
          audio.play();
          startBreak();
        }
      }, 1000);
      localStorage.clear();
      localStorage.setItem("interval-id", timer);
    } else {
      clearInterval(localStorage.getItem("interval-id"));
      setTimerOn(false);
    }
  };

  const startBreak = () => {
    if (!timerOn) {
      setTimerOn(true);
      setOnBreak(true);
      let timeRem = breakTimeLeft;
      const timer = setInterval(() => {
        setBreakTimeLeft((prev) => prev - 1);
        timeRem = timeRem - 1;
        if (timeRem < 1) {
          clearInterval(timer);
          setBreakTimeLeft(breakL * 60);
          setOnBreak(false);
          startTimer();
        }
      }, 1000);
      localStorage.clear();
      localStorage.setItem("interval-id", timer);
    } else {
      clearInterval(localStorage.getItem("interval-id"));
      setTimerOn(false);
    }
  };

  const reset = () => {
    setLength(25);
    setBreakL(5);
    setTimeLeft(1500);
    setBreakL(5);
    setTimerOn(false);
    setOnBreak(false);
    audio.pause();
    audio.currentTime = 0;
    clearInterval(localStorage.getItem("interval-id"));
  };

  return (
    <div className={classes.clockContainer}>
      <div className={classes.clock}>
        <div className={classes.header}>
          <h1 className={classes.title}>25 + 5 Clock</h1>
        </div>
        <div className={classes.header2}>
          <div className={classes.sessionLabel}>
            <h2>Session Length</h2>
            <FontAwesomeIcon
              className={classes.control}
              icon={faArrowDown}
              onClick={timerOn ? null : () => decreaseLength("session")}
            />
            <span id="control-text">{length}</span>
            <FontAwesomeIcon
              className={classes.control}
              icon={faArrowUp}
              onClick={timerOn ? null : () => increaseLength("session")}
            />
          </div>
          <div className={classes.breakLabel}>
            <h2 className={classes.title2}>Break Length</h2>
            <div id="break-controls">
              <FontAwesomeIcon
                className={classes.control}
                icon={faArrowDown}
                onClick={timerOn ? null : () => decreaseLength("break")}
              />
              <span id="control-text">{breakL}</span>
              <FontAwesomeIcon
                className={classes.control}
                icon={faArrowUp}
                onClick={timerOn ? null : () => increaseLength("break")}
              />
            </div>
          </div>
        </div>
        <div className={classes.timer}>
          <h2 className={`${classes.timerLabel} ${classes.title2}`}>
            {onBreak ? "Break" : "Session"}
          </h2>
          <div className={classes.timeLeft}>
            {onBreak ? formatTime(breakTimeLeft) : formatTime(timeLeft)}
          </div>
        </div>
        <div className={classes.controls}>
          <FontAwesomeIcon
            className={classes.control}
            onClick={onBreak ? () => startBreak() : () => startTimer()}
            icon={timerOn ? faPause : faPlay}
          />
          <FontAwesomeIcon
            className={classes.control}
            icon={faArrowsRotate}
            onClick={() => reset()}
          />
        </div>
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    </div>
  );
};

export default Clock;
