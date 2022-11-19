import React, { useState } from 'react'
import axios from 'axios'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
 
export default function Recording() {

  const [recordState, setrecordState] = useState(null)
  const [audio, setAudio] = useState(null)
  console.log(audio?.blob)
  const start = () => {
    setrecordState(RecordState.START)
  }

  const stop = () => {
    setrecordState(RecordState.STOP)
  }

  const onStop = async (audioData) => {
    setAudio(audioData)
    console.log('audio', audio)
  }

  const handleSubmit = async () => {
    const fd = new FormData()
    fd.append("file", audio?.blob, "audio.wav")
    // fd.append("author", "paulfranco")
    // fd.append("title", "test")
    const form = [...fd]
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    axios({
      method: "post",
      url: "http://localhost:3000/posts/paulfranco",
      data: fd,
      config
    }).then(function (response){
      console.log(response)
    }).catch(function (response){
      console.log(response)
    })

  //   axios.post('http://localhost:3000/posts/paulfranco', {
  //     fd
  //   }, config).then(function  (response) {
  //     console.log(response)
  //   })
  }

  return (
    <div>
      <AudioReactRecorder state={recordState} onStop={onStop} />
      <audio
          id='audio'
          controls
          src={audio ? audio.url : null}
        ></audio>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>

      <button onClick={handleSubmit}> Submit Post </button>
    </div>
  )
}
