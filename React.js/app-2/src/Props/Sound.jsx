import React from 'react'

function Sound() {

    const handleClick=()=>{
        const text="opar  ppaan  kie  dukan  nieche raandi ka makan raandi deneko tayar chachha bosadika , chachha bosadika "
        const value = new SpeechSynthesisUtterance (text);
        window.speechSynthesis.speak(value)
    }


  return (
    <div>
        <button onClick={handleClick}>Himmat hai to daba</button>
    </div>
  )
}

export default Sound