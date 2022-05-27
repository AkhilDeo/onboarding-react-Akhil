import { useState } from "react";
import React, { useRef } from "react";


function SpyNameGenerator(props) {
  const [prevSpyNames, setPrevNames] = useState("");
  const [string, setString] = useState("")
  const [currString, setCurr] = useState("")


  function reverseString(str) {
    const usingSplit = string.split('');
    return usingSplit.reverse().join("");
  }

  function saveNames() {
    var a = reverseString(string);
    let ab = prevSpyNames + "\n" + currString;
    setPrevNames(ab);
    setCurr(a);
  }

  return (
    <>
      <h1>Spy Name Generator</h1>
      <h2>Previous Spy Name: </h2>
      <p>{prevSpyNames}</p>

      <h2>Current Spy Name: </h2>
      <p>{currString}</p>

      <div>
        <input type="text" onChange={event => setString(event.target.value)}/>
        <button className="button1" onClick={() => saveNames()}>
          Save
        </button>
      </div>
    </>
  );
}

export default SpyNameGenerator;
