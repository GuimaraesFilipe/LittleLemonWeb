import logo from '../icons_assets/Logo .svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useScreen } from "../providers/screenSize";
import { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import * as Icon from 'react-bootstrap-icons';
function Navigation(props){
    const { isSmallScreen} = useScreen();
    const [dropdown, setdropdow]=useState(false)
    const [isnavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isnavVisible);
        // console.log(isnavVisible)
      };

      const showDropDown=() =>{
        setdropdow(!dropdown);
        // console.log(dropdown)
      }
    return (<>

    <Navbar  className=' margin d-flex  justify-content-between overflow'>
      <img src={logo} alt='little lemon logo' className='lemonLogo' ></img>
      <div className=' 'fixed="top">


      <Nav className="smallNav">
      
            <Nav.Link   className='navLink'  href='/#home'>Home</Nav.Link>
            <Nav.Link className='navLink' href='/Menu' >Menu</Nav.Link>
            <Nav.Link className='navLink' href='/#about' >About</Nav.Link>
            <Nav.Link className='navLink' href='/#testimonials' >Testimonials</Nav.Link>
            <Nav.Link className='navLink' data-testid='reservationNav' onClick={()=>props.setShowModel()} >Reservations</Nav.Link>
          
        </Nav>
      

        </div>

        <DropdownButton  onToggle={toggleNav} className={  isSmallScreen? "  sideMenu dropdown-menu-right ":"d-none"} 
        title={<Icon.List ></Icon.List>} variant='Secondary'   size="lg">
        
        <Dropdown.Item  href='/#hom' >Home</Dropdown.Item>
        <Dropdown.Item href='/Menu' >Menu</Dropdown.Item>
        <Dropdown.Item href='/#about' >About</Dropdown.Item>
        <Dropdown.Item  href='/#testimonials' >Testimonials</Dropdown.Item>
    
        
        <Dropdown.Item   onClick={()=>props.setShowModel()}  >Reservations</Dropdown.Item>


    </DropdownButton>
        {/* <button onClick={toggleNav} >
      <Icon.List></Icon.List>
      </button> */}

    </Navbar>
 


    </>
)

}
export default Navigation;