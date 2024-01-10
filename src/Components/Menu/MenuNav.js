import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useScreen } from "../../providers/screenSize";
import { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import * as Icon from 'react-bootstrap-icons';
function MenuNavigation(props){
    
  
 

 
    return (

    <Navbar  className=' margin d-flex  justify-content-center overflow'>
      {/* <img src={logo} alt='little lemon logo' className='lemonLogo' ></img> */}
      <div fixed="top" >


      <Nav className="">
      
            <Nav.Link   className='navLink'  href='#Entrees'>Entree</Nav.Link>
            <Nav.Link className='navLink' href='#Mains' >Main</Nav.Link>
            <Nav.Link className='navLink' href='#Desserts' >Dessert</Nav.Link>
            <Nav.Link className='navLink' href='#Drinks' >Drinks</Nav.Link>
        
          
        </Nav>
      

        </div>

       
        {/* <button onClick={toggleNav} >
      <Icon.List></Icon.List>
      </button> */}

    </Navbar>
 


    
)

}
export default MenuNavigation;