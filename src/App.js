

import React, {useState,useEffect,useRef} from "react"
import useGame from "./hooks/useWordGame"

function App() {
   const {text, wordCount, handleClick,isOn, handleChange, inputRef, time} = useGame()
  return (
    <div>
        <h1>How fast do you type?</h1>
        <textarea ref={inputRef} disabled={!isOn} value={text} onChange={handleChange} />
        <h4>Time reminaing: {time}</h4>
        <button onClick={handleClick} disabled={isOn}>Start</button>
        <h1>Word count: {wordCount}</h1>
        
    </div>
)
}

export default App;
