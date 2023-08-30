import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import * as React from "react";
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import BookingPage from './Components/bookingPage';
import Navigation from "./Components/nav";
import Main from './Components/main';
import { ScreenSizeProvider } from './providers/screenSize';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Testimonials from "./Components/Testimonials";
import About from './Components/About';
function App() {

  const [showModel,setShowModel]=useState(false);

  return (
    <ScreenSizeProvider>
    <BrowserRouter>
   <Header></Header>
   <Navigation setShowModel={()=>setShowModel(true)}></Navigation>

   <BookingPage showModel={showModel} setShowModel={(e)=>setShowModel(e)}/>
    <Main setShowModel={()=>setShowModel(true)} />
    <Testimonials></Testimonials>
    <About/>
   <Footer setShowModel={()=>setShowModel(true)}>
    </Footer  >
    </BrowserRouter>
   </ScreenSizeProvider>
  );
}



export default App;
