import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@nextui-org/react'
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
    <div className='Login-app'>
      <AudioReactRecorder state={recordState} onStop={onStop} />
      <audio
          id='audio'
          controls
          src={audio ? audio.url : null}
        ></audio>
      <div className="container">
            <Button onClick={start} className="uploadButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
            </svg> &nbsp;Start</Button>
            <Button onClick={stop} className="uploadButton"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
              </svg> &nbsp;Stop</Button>
            <Button onClick={handleSubmit} className="uploadButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
              <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/>
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg> &nbsp;Upload</Button>
          </div>
    </div>
  )
}


      //   <div className='Login-app'>
      //     <AudioReactRecorder state={recordState} onStop={onStop} />
          // <div className="container">
          //   <Button onClick={start} className="uploadButton">
          //   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
          //     <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
          //   </svg> &nbsp;Start</Button>
          //   <Button onClick={stop} className="uploadButton"> 
          //     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
          //       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
          //     </svg> &nbsp;Stop</Button>
          //   <Button onClick={this.upload} className="uploadButton">
          //   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
          //     <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z"/>
          //     <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          //   </svg> &nbsp;Upload</Button>
          // </div>
      //   </div>
      // )
    
