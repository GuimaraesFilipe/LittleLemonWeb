import logo from './icons_assets/Logo .svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navigation(){

    return (<>
    <Navbar >
      <Container className='row' fixed="top">
      <Navbar.Brand href="#home" className='col-4 offset-2'><img src={logo} alt='little lemon logo' width='70%'></img></Navbar.Brand>

      <Nav className="me-auto col-6 ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#reservations">Reservations</Nav.Link>
            <Nav.Link href="#order">Order Online</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
        </Nav>

        </Container>

    </Navbar>



    </>
)

}
export default Navigation;