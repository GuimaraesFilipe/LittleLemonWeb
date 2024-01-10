import React from 'react'
import RestaurantImage from '../icons_assets/restaurant.jpg'
import ChefsImage from '../icons_assets/chefs.jpg'
import { Container, Row, Col, Button } from "react-bootstrap";

import { useScreen } from "../providers/screenSize";

const About = () => {
  const { isSmallScreen} = useScreen();
  return (
    <section id="about">
      <div className=" mainContainer pb-5">
      <div className=" d-flex justify-content-center  margin ">
          <Col className={  isSmallScreen? "col-12 center mt-5 ":'mt-5'} >
            <h2  className="title">About</h2>
            <p className="subText mt-3 mb-5" >At little Lemon, we believe that food is not just sustenance; it's a celebration of life, history, and togetherness. Our passion for the rich and diverse cuisines of the Mediterranean region has inspired us to create a menu that pays homage to centuries of culinary tradition while adding a modern twist.</p>
          </Col>
          <div className="image-container mt-5">
          <img src={ChefsImage} alt="Little Lemon Restaurant"/>
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs"/>
        </div>

          </div>
        
       
          
        
      </div>
  
    </section>
  )
}

export default About
