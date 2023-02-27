import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from './Component/Menu'
import Home from "./Component/Home";
import Pnf from "./Component/Pnf";
import Track from "./Component/Track";


function App(props){
  return(
    <BrowserRouter>
    <Menu/>

    <Routes>
   
      <Route path = {`/`} element ={<Home/>}/>
      <Route path = {`/home`} element ={<Home/>}/>
      <Route path = {`/track/:artistId`} element ={<Track/>}/>
      <Route path = {`/*`} element ={<Pnf/>}/>
    
    </Routes>
   
    </BrowserRouter>
  )
}

export default App
