import Button from "./Button";
import "./Calculator.css";
import React, { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
  const [digitLimit, setDigitLimit] = useState(false);
  const operator = /[+/*-]/;
  const expressionEnd = expression[expression.length - 1];

  const display = (symbol) => {
    //Check digit limit
    if (answer.length > 15 || answer === "Digit Limit Met") {
      const prevAnswer = answer;
      setDigitLimit(true);
      setAnswer("Digit Limit Met");
      setTimeout(() => {
        setAnswer(prevAnswer);
        setDigitLimit(false);
      }, 1000);
    } else {
      setExpression((prev) => prev + symbol);

      if (answer === 0 || operator.test(answer)) setAnswer(symbol);
      else setAnswer(answer + symbol);

      if (expression === "" && /[+/*=]/.test(symbol)) {
        setExpression("");
        setAnswer(0);
      }

      //Display after equal sign
      if (expressionEnd === "=") {
        if (/[0-9.]/.test(symbol)) {
          setExpression(symbol);
          setAnswer(symbol);
        } else {
          setExpression(answer + symbol);
        }
      }

      //Prevent more than one decimal dot
      if (String(answer).includes(".") && symbol === ".") {
        setExpression((prev) => prev.slice(0, prev.length - 1));
        setAnswer((prev) => prev.slice(0, prev.length - 1));
      }

      // Prevent two consecutive operators, except for negative sign
      if (operator.test(expressionEnd) && /[+/*]/.test(symbol)) {
        setExpression((prev) => prev.slice(0, prev.length - 2) + symbol);
        setAnswer(symbol);
      }

      // Clear negative sign after operator, if followed by another operator
      if (
        operator.test(expression[expression.length - 2]) &&
        operator.test(expressionEnd) &&
        operator.test(symbol)
      ) {
        setExpression((prev) => prev.slice(0, prev.length - 2) + symbol);
        setAnswer(symbol);
      }

      // Clear two minus signs followed by another minus sign
      if (
        expression.slice(expression.length - 2) === "--" &&
        /[-]/.test(symbol)
      ) {
      }
    }
  };

  //Calculate function
  const calculate = () => {
    if (expressionEnd === "=" || expression.length === 0 || expression === "-")
      return;

    let fixExpression = expression.replace("--", "- -");
    if (expression.length > 0 && operator.test(expressionEnd))
      fixExpression = fixExpression.slice(0, -1);
    console.log(fixExpression);

    // eslint-disable-next-line no-eval
    setAnswer(eval(fixExpression));
    setExpression(fixExpression + "=");
  };

  //All Clear function
  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };

  //Clear function
  const clear = () => {
    if (!(expression === "" && answer === 0)) {
      if (answer.length === 1) {
        setAnswer(0);
        setExpression((prev) => String(prev).slice(0, prev.length - 1));
      } else if (answer === 0) {
        setExpression((prev) => String(prev).slice(0, prev.length - 1));
      } else if (expressionEnd !== "=") {
        setExpression((prev) => String(prev).slice(0, prev.length - 1));
        setAnswer((prev) => String(prev).slice(0, prev.length - 1));
      }
    }
  };

  return (
    <div className="calcContainer">
      <div id="calculator">
        <div id="display">
          <div id="formulaScreen">
            <input
              className="calcInput"
              type="text"
              value={expression}
              placeholder="0"
              disabled
            />
          </div>
          <div id="outputScreen">{answer}</div>
        </div>
        <div className="container" id="keys">
          <div className="row">
            <button className="key col-sm-3" id="clear" onClick={allClear}>
              AC
            </button>
            <button className="key col-sm-3" id="clear-last" onClick={clear}>
              C
            </button>
            <Button
              classes="key col-sm-3 operation"
              onDisplay={display}
              digitLimit={digitLimit}
              keyValue="/"
              id="divide"
            />
            <Button
              classes="key col-sm-3 operation"
              onDisplay={display}
              digitLimit={digitLimit}
              keyValue="*"
              id="multiply"
            />
          </div>
          <div className="row">
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="7" />
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="8" />
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="9" />
            <Button
              classes="key col-sm-3 operation"
              onDisplay={display}
              digitLimit={digitLimit}
              keyValue="-"
              id="subtract"
            />
          </div>
          <div className="row">
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="4" />
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="5" />
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="6" />
            <Button
              classes="key col-sm-3 operation"
              onDisplay={display}
              digitLimit={digitLimit}
              keyValue="+"
              id="add"
            />
          </div>
          <div className="row">
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="1" />
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="2" />
            <Button onDisplay={display} digitLimit={digitLimit} keyValue="3" />
            <button
              className="key col-sm-3"
              id="equals"
              onClick={calculate}
              disabled={digitLimit ? true : false}
            >
              =
            </button>
          </div>
          <div className="row">
            <Button
              classes="key col-sm-6"
              onDisplay={display}
              digitLimit={digitLimit}
              keyValue="0"
            />
            <Button
              onDisplay={display}
              digitLimit={digitLimit}
              keyValue="."
              id="decimal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
