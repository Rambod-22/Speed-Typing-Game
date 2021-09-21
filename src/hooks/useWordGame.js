import React, { useEffect, useState, useRef } from "react"

function useGame(){
const [text, setText] = useState("")
 const [time, setTime] = useState(10)
 const [isOn, setOn] = useState(false)
 const [newTime, setNewTime] = useState(0)
   const inputRef = useRef(null)
const [wordCount, setWordCount] = useState("")


  function handleChange(event){
    const {value} = event.target
   
     setText(value)
  }

  function WordCount(str) { 
    let wordCount =  str.trim().split(" ");
    const filteredWords = wordCount.filter((word) => {
      return (word !== "")
    })
    
    return filteredWords.length;
   }

   function handleClick(){
     setOn(true)
     setText("")
     setTime(10)
     setWordCount(0)
     inputRef.current.disabled = false
     inputRef.current.focus()
   }
   useEffect(() => {     
    if(isOn && (time > 0)) {
      setTimeout(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)
      
    } 
    else {
      setOn(false)
      setWordCount(WordCount(text))
      
    }
    }, [time, isOn])
  

   return {text, wordCount, handleClick,isOn, handleChange, inputRef, time}
}

export default useGame