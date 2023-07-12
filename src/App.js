import './App.css';
import Header from './header';
import Footer from './footer';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import * as React from "react";
import * as bs from 'bootstrap/dist/css/bootstrap.css';

import Navigation from "./nav";

function App() {
  return (
    <>
   <Header></Header>
   <Navigation></Navigation>
    <main>
    
    </main>
   <Footer>
    </Footer>
    </>
  );
}

export default App;
