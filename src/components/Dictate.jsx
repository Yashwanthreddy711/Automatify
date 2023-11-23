import React from 'react'
import {useState,useEffect} from 'react';

const Dictate = () => {
  const [isRecording, setisRecording] = useState(false);
  const [note, setNote] = useState(null);
  const [notesStore, setnotesStore] = useState([]);

  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const microphone = new SpeechRecognition();

microphone.continuous = true;
microphone.interimResults = true;
microphone.lang = "en-US";

const startRecordController = () => {
  if (isRecording) {
    microphone.start();
    microphone.onend = () => {
      console.log("continue..");
      microphone.start();
    };
  } else {
    microphone.stop();
    microphone.onend = () => {
      console.log("Stopped microphone on Click");
    };
  }
  microphone.onstart = () => {
    console.log("microphones on");
  };

  microphone.onresult = (event) => {
    const recordingResult = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    console.log(recordingResult);
    setNote(recordingResult);
    microphone.onerror = (event) => {
      console.log(event.error);
    };
  };
};
useEffect(() => {
  startRecordController();
}, [isRecording]);
const storeNote = () => {
setnotesStore([...notesStore, note]);
setNote("");
};
  return (
     <>
      <h1>Record Voice Notes</h1>
      <div>
        <div name="noteContainer" className='m-10 border-2 border-gray-500 rounded-md h-15'>
          <h2>Record Note Here</h2>
          {isRecording ? <span>Recording... </span> : <span>Stopped </span>}
          <button className='m-5' onClick={storeNote} disabled={!note}>
            Save
          </button>
          <button className='m-5' onClick={() => setisRecording((prevState) => !prevState)} >
            Start/Stop
          </button>
          <p>{note}</p>

        </div>
        <div className='m-10 border-2 border-gray-500 rounded-md h-15'>
          <h2>Notes Store</h2>
          **{notesStore.map((note) => (
            <p key={note}>{note}</p>
          ))}**
        </div>
      </div>
    </>
  )
}

export default Dictate;