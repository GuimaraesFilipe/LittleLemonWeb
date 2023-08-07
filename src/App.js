import './App.css';
import Header from './header';
import Footer from './footer';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import * as React from "react";
import * as bs from 'bootstrap/dist/css/bootstrap.css';

import Navigation from "./nav";
import Main from './main';
import { ScreenSizeProvider } from './providers/screenSize';
import { Container } from 'react-bootstrap';

function App() {



  return (
    <ScreenSizeProvider>
      
   <Header></Header>
   <Navigation></Navigation>
    <Main />
   <Footer>
    </Footer>

   </ScreenSizeProvider>
  );
}



export default App;
