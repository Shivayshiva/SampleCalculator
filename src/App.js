import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    if (result === "Error") {
      setResult("");
    } else {
      setResult(result.slice(0, result.length - 1)); //or (0,-1)
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="Container">
        <h1 id="title">Calculator</h1>
        <form>
          <input type="text" value={result} />
        </form>
        <div class="keypad">
          <button id="clear" class="highlight" onClick={clear}>
            Clear
          </button>
          <button id="backspace" class="highlight" onClick={backspace}>
            C
          </button>
          <button onClick={handleClick} class="highlight" name="/">
            &divide;
          </button>
          <button onClick={handleClick} name="7">
            7
          </button>
          <button onClick={handleClick} name="8">
            8
          </button>
          <button onClick={handleClick} name="9">
            9
          </button>
          <button onClick={handleClick} class="highlight" name="*">
            &times;
          </button>
          <button onClick={handleClick} name="4">
            4
          </button>
          <button onClick={handleClick} name="5">
            5
          </button>
          <button onClick={handleClick} name="6">
            6
          </button>
          <button onClick={handleClick} name="-" class="highlight">
            &ndash;
          </button>
          <button onClick={handleClick} name="1">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="3">
            3
          </button>
          <button onClick={handleClick} class="highlight" name="+">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button id="result" onClick={calculate} class="highlight" name="=">
            =
          </button>
        </div>
      </div>
    </>
  );
}
