import { Container, Row, Col, Button } from "react-bootstrap";
import mainImage from "../icons_assets/restauranfood.jpg"
import greek from "../icons_assets/greek salad.jpg"
import bruchetta from "../icons_assets/bruchetta.svg"
import lemonD from "../icons_assets/lemon dessert.jpg"
import { useScreen } from "../providers/screenSize";
import Dishes from "./dishes";
import BookingForm from "./bookingForm";
import Testimonials from "./Testimonials";
import About from './About';
import { useMenu } from "../providers/menuProvider";
import { Link } from "react-router-dom";
function Main(props) {
  const menuData = useMenu().setPopular()
  const dishesArray=menuData[0].data
  const { isSmallScreen} = useScreen();


  return (<>
 
    <main className=' '>
          <section id="home">
      <div className=" mainContainer ">
        <div className=" d-flex justify-content-center overflow-visible margin ">
          <Col className={  isSmallScreen? "col-12 center ":'col-12  '}>
            <h1  className="title mt-4 ">Little Lemon</h1>
            <h2  className="subtitle">Chicago</h2>
            <p className="subText " >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button className="mb-5 primary rounded button" onClick={()=>props.setShowModel()} >Reserve a table</button>
          </Col>

          </div>
        
       
          <div className={  isSmallScreen? "imageContainer":'imageContainer'}
          ></div>
        
      </div>
      </section>
      <section id="menu">
      <div className="margin">
        <div className='weeks  ' >
          <Col className='col-8'>
            <h1 id="weekTitle">This Weeks Specials!</h1>

          </Col>
          <Col className='col-4  '>
          <a  href='/Menu'>      <button className="float-end rounded button" >Online Menu</button>{' '}</a>

          </Col>
        </div>
       <Dishes dishesArray={dishesArray}/>

      
      </div>
      </section>
    </main>
    <Testimonials></Testimonials>
    <About/>
    </>
  )

}

export default Main;