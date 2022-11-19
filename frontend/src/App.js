import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import SearchProfile from "./components/SearchProfile";
import RecordAudio from "./components/RecordAudio";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { NextUIProvider } from '@nextui-org/react'
import Nav from './components/Nav';
import MeetUp from './components/MeetUp';
import Recording from './pages/Recording';
function AppContainer() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/Login" element={<Login/>} />
          {/* <Route path='/test' element={<Nav />} />  */}
          <Route path="/searchprofile" element={<SearchProfile/>} />
          <Route path="/recordaudio" element={<RecordAudio/>} />
          <Route path="/navbar" element={<NavBar/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/recording" element={<Recording /> } /> 
          <Route path="/MeetUp" element={<MeetUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function App(){
  return(
    <NextUIProvider>
      <AppContainer/>
    </NextUIProvider>
  )
}