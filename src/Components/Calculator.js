import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [answer, setanswer] = useState(0);

  const display = (symbol) => {
    if (
      currentDisplay[currentDisplay.length - 1] == "=" ||
      symbol == "0" ||
      symbol == "."
    ) {
      if (currentDisplay[currentDisplay.length - 1] == "=") {
        if (/[1-9.]/.test(symbol)) {
          setCurrentDisplay(symbol);
          setanswer(0);
        } else if (/[0]/.test(symbol)) {
          setCurrentDisplay("");
          setanswer(0);
        } else {
          setCurrentDisplay(answer + symbol);
          setanswer(0);
        }
      }

      if (symbol == "0") {
        if (currentDisplay == "0") {
          setCurrentDisplay(currentDisplay);
        } else {
          setCurrentDisplay((prev) => prev + symbol);
        }
      }

      if (symbol == ".") {
        if (currentDisplay[currentDisplay.length - 1] == ".") {
          setCurrentDisplay(currentDisplay);
        } else {
          setCurrentDisplay((prev) => prev + symbol);
        }
      }
    } else {
      setCurrentDisplay((prev) => prev + symbol);
    }
  };

  const calculate = () => {
    setanswer(eval(currentDisplay));
    setCurrentDisplay((prev) => prev + "=");
  };

  const allClear = () => {
    setCurrentDisplay("");
    setanswer(0);
  };

  const clear = () => {
    setCurrentDisplay((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setanswer(0);
  };

  return (
    <div className="container">
      <div className="disp">
        <div className="input">
          <input type="text" value={currentDisplay} placeholder="0" disabled />
        </div>
        <div className="output" placeholder="0">
          {answer}
        </div>
      </div>
      <div onClick={allClear} className="btns AC">
        AC
      </div>
      <div onClick={clear} className="btns C">
        C
      </div>
      <div onClick={() => display("/")} className="btns div">
        /
      </div>
      <div onClick={() => display("*")} className="btns times">
        x
      </div>
      <div onClick={() => display("7")} className="btns seven">
        7
      </div>
      <div onClick={() => display("8")} className="btns eight">
        8
      </div>
      <div onClick={() => display("9")} className="btns nine">
        9
      </div>
      <div onClick={() => display("-")} className="btns minus">
        -
      </div>
      <div onClick={() => display("4")} className="btns four">
        4
      </div>
      <div onClick={() => display("5")} className="btns five">
        5
      </div>
      <div onClick={() => display("6")} className="btns six">
        6
      </div>
      <div onClick={() => display("+")} className="btns add">
        +
      </div>
      <div onClick={() => display("1")} className="btns one">
        1
      </div>
      <div onClick={() => display("2")} className="btns two">
        2
      </div>
      <div onClick={() => display("3")} className="btns three">
        3
      </div>
      <div onClick={calculate} className="btns equals">
        =
      </div>
      <div onClick={() => display("0")} className="btns zero">
        0
      </div>
      <div onClick={() => display(".")} className="btns decimal">
        .
      </div>
    </div>
  );
};

export default Calculator;
