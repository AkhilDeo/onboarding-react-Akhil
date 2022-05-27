import "./App.css";
import { useState } from "react";
import ClickableDonut from "./DonutClicker/ClickableDonut";
import SpyNameGenerator from "./SpyNameGenerator/SpyNameGenerator";
import EvilClickableDonut from "./DonutClicker/EvilClickableDonut";
// Image attribution: https://pixabay.com/illustrations/cartoon-donuts-donut-chocolate-4764725/

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main">
      <div className="column">
        {/* Here's where all the magic happens! */}
        <h1>Donut Count: {count}</h1>
        {/* <ClickableDonut count={count} setCount={setCount}/> */}
        {/* <EvilClickableDonut count={count} setCount={setCount}/> */}
         <SpyNameGenerator /> 
        {count >= 10 &&
          <h1> You Win!</h1>
        }
      </div>
    </div>
  );
}

export default App;
