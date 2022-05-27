import { useState } from "react";
import Donut from "./donut.png"

function EvilClickableDonut({count, setCount}) {
  const [imgHeight, setImgHeight] = useState(380)
  const [imgWidth, setImgWidth] = useState(640)

  function shrink() {
    setImgHeight(imgHeight * 0.9)
    setImgWidth(imgWidth * 0.9)
  }
  function popBack() {
    setImgHeight(imgHeight * 1.11)
    setImgWidth(imgWidth * 1.11)
  }

  return (
    <>
      <img src={Donut} width={imgWidth} height={imgHeight} onClick={() => setCount(count - 1)} 
      onMouseDown={() => shrink()} onMouseUp={() => popBack()}></img>

    </>
    
  );

}

export default EvilClickableDonut;
