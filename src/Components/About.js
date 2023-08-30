import React from 'react'
import RestaurantImage from '../icons_assets/restaurant.jpg'
import ChefsImage from '../icons_assets/chefs.jpg'
import { Container, Row, Col, Button } from "react-bootstrap";

import { useScreen } from "../providers/screenSize";

const About = () => {
  const { isSmallScreen} = useScreen();
  return (
    <section id="about">
      <div className=" mainContainer ">
      <div className=" d-flex justify-content-center overflow-visible margin ">
          <Col className={  isSmallScreen? "col-12 center mt-5 ":'mt-5'} >
            <h2  className="title">About</h2>
            <p className="subText mt-5 mb-5" >At little Lemon, we believe that food is not just sustenance; it's a celebration of life, history, and togetherness. Our passion for the rich and diverse cuisines of the Mediterranean region has inspired us to create a menu that pays homage to centuries of culinary tradition while adding a modern twist.</p>
          </Col>
          <div className="image-container mt-5">
          <img src={ChefsImage} alt="Little Lemon Restaurant"/>
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs"/>
        </div>

          </div>
        
       
          
        
      </div>
      {/* <div className="mainContainer">
        <div className="content">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor pariatur soluta repellat nobis
            aperiam vel, numquam fuga veritatis quae, natus laboriosam ut quidem! Eveniet esse quos similique, accusamus
            nisi autem nesciunt quas, et, obcaecati aliquid exercitationem! Aliquam vero rem vitae hic laudantium dolor
            impedit consequuntur voluptate nesciunt ab neque labore facilis, reiciendis ut quibusdam a blanditiis natus,
            cum distinctio?</p>
        </div>
        <div className="imageContainer">
          <img src={ChefsImage} alt="Little Lemon Restaurant"/>
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs"/>
        </div>
      </div> */}
    </section>
  )
}

export default About
