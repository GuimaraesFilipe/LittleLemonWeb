import { Col, Row,Container,ListGroup,ListGroupItem } from "react-bootstrap";
import logo from '../icons_assets/Logo .svg'
import { useNavigate } from "react-router-dom";


function Footer(props){
  const navigate = useNavigate();
    return(<>
    <footer  className='overflow' >
        <div className='d-flex margins justify-content-between mt-2 'fixed="bottom">
            <div className=" d-flex  justify-content-start align-items-center "> 
                    <img src={logo}  alt='little lemon logo' className="footerIMG" ></img>
            </div>
            <div className=" p-2 footer">
            <ListGroup variant="flush">
      <ListGroup.Item active={false}  className=' listItem '   ><a href='/#home'className='a' >Home</a></ListGroup.Item>
      <ListGroup.Item active={false}  className=' listItem '><a href='/Menu' className='a' >Menu</a></ListGroup.Item>
      <ListGroup.Item active={false} className=' listItem  ' ><a href='/#about' className='a' >About</a></ListGroup.Item>
      <ListGroup.Item active={false}  onClick={()=>props.setShowModel()}   className=' listItem a'> Reservations</ListGroup.Item>

    </ListGroup>
            </div>
           
            <div className=" p-2 footer">
            <ListGroup variant="flush">
      <ListGroup.Item active={false}  className=' listItem text-muted'>Address</ListGroup.Item>
      <ListGroup.Item active={false}  className=' listItem text-muted'>Phone Number</ListGroup.Item>
      <ListGroup.Item  active={false}  className=' listItem text-muted'>Email</ListGroup.Item>
    

    </ListGroup>
            </div>
            <div className=" p-2 footer">
            <ListGroup variant="flush">
      <ListGroup.Item active={false} className='listItem text-muted'>Facebook</ListGroup.Item>
      <ListGroup.Item active={false} className='listItem text-muted'>Instagram </ListGroup.Item>
      <ListGroup.Item active={false}  className=' listItem text-muted'>Gmail</ListGroup.Item>
    

    </ListGroup>
            </div>
        </div>
    </footer>
    </>)
}

export default Footer;