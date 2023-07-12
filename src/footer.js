import { Col, Row,Container,ListGroup,ListGroupItem } from "react-bootstrap";
import logo from './icons_assets/Logo .svg'

function Footer(){
    return(<>
    <footer class="fixed-bottom">
        <Row >
            <Col className="col-4">
                <Row>
                    <Col className="col-6 offset-6 align-bottom mt-5">
                    <img src={logo}  alt='little lemon logo' width='90%' ></img>
                    </Col>
                </Row>
            
            </Col>
            <Col className="col-2 ">
            <ListGroup variant="flush">
      <ListGroup.Item  href="#home" className=' listItem text-muted'>Home</ListGroup.Item>
      <ListGroup.Item href="#about" className=' listItem  text-muted'>About</ListGroup.Item>
      <ListGroup.Item  href="#menu" className=' listItem  text-muted'>Menu</ListGroup.Item>
      <ListGroup.Item  href="#reservations" className=' listItem text-muted'> Reservations</ListGroup.Item>
      <ListGroup.Item href="#order" className=' listItem text-muted'>Order Online</ListGroup.Item>
      <ListGroup.Item  href="#login" className=' listItem text-muted'>Login</ListGroup.Item>

    </ListGroup>
            </Col>
           
            <Col className="col-2">
            <ListGroup variant="flush">
      <ListGroup.Item  className=' listItem text-muted'>Address</ListGroup.Item>
      <ListGroup.Item  className=' listItem text-muted'>Phone Number</ListGroup.Item>
      <ListGroup.Item  className=' listItem text-muted'>Email</ListGroup.Item>
    

    </ListGroup>
            </Col>
            <Col className="col-2">
            <ListGroup variant="flush">
      <ListGroup.Item className='listItem text-muted'>Facebook</ListGroup.Item>
      <ListGroup.Item className='listItem text-muted'>Instagram </ListGroup.Item>
      <ListGroup.Item className=' listItem text-muted'>Gmail</ListGroup.Item>
    

    </ListGroup>
            </Col>
        </Row>
    </footer>
    </>)
}

export default Footer;