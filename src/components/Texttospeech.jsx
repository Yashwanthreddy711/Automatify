import React,{useState} from 'react'

const Texttospeech = () => {
    const [text,settext]=useState(null);
    const handletextareachange=(e)=>{
          settext(e.target.value);
    }
    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
          const speechSynthesis = window.speechSynthesis;
    
          // Create a new SpeechSynthesisUtterance
          const utterance = new SpeechSynthesisUtterance(text);
    
          // Speak the text
          speechSynthesis.speak(utterance);
        } else {
          console.error('Text-to-speech is not supported in this browser.');
        }
      };
  return (
    <div>
        <h2>Text to Speech Application</h2>
        <textarea className='border-2 border-black w-80 h-80' onChange={handletextareachange}>
              
        </textarea>
        <button onClick={handleSpeak}>Speak</button>
        <p>{text}</p>
    
    </div>
  )
}

export default Texttospeech;