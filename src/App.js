import './App.css';
import ReactDOM from "react-dom/client";

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
import { BrowserRouter,Routes, Route,Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import MenuMain from "./Components/Menu/MenuMain"
import { MenuProvider } from './providers/menuProvider';

export default function App() {

  const [showModel,setShowModel]=useState(false);

  useEffect(() => {
    const removeHash=()=>{
      if(window.location.hash) {
        window.history.replaceState("", document.title, window.location.pathname);
   }
    }
  
 window.addEventListener('scroll', removeHash)

 return () => window.removeEventListener('scroll', removeHash)
}, [])


  return (
    <MenuProvider>
    <ScreenSizeProvider>
    <BrowserRouter>
   <Header></Header>
   <Navigation setShowModel={()=>setShowModel(true)}></Navigation>

   <BookingPage showModel={showModel} setShowModel={(e)=>setShowModel(e)}/>
   <Routes >
   <Route  path='/' element={<Main setShowModel={()=>setShowModel(true)}/>}  ></Route>
   <Route  path='/Menu' element={<MenuMain/>}  setShowModel={()=>setShowModel(true)}></Route>

   </Routes>
   <Footer setShowModel={()=>setShowModel(true)}>
    </Footer  >
    </BrowserRouter>
   </ScreenSizeProvider>
   </MenuProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

