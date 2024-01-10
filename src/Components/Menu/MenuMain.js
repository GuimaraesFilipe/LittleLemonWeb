import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter,Routes, Route,Switch } from 'react-router-dom'

import greek from "../../icons_assets/greek salad.jpg"
import bruchetta from "../../icons_assets/bruchetta.svg"
import lemonD from "../../icons_assets/lemon dessert.jpg"
import { useScreen } from "../../providers/screenSize";
import MenuDishes from "./MenuDishes";
import MenuNavigation from "./MenuNav";
import { useMenu } from "../../providers/menuProvider";
import { useState,useEffect } from "react";

function MenuMain(props) {
  const menuData = useMenu().menu
    


//  console.log(menuData)
  
  const { isSmallScreen} = useScreen();

  return (
 
          <section id="menuMain" key='uniqueKey'>
      <div className="  pb-5">
        <div className="d-flex justify-content-center mt-3">

       
        <div style={{backgroundColor:'#495e57', width:"80%", border:"1px solid", borderRadius:'70px'}}>
         
        <div className=" d-flex justify-content-center overflow-visible   "> 
          <Col className={  isSmallScreen? "col-12 center ":'col-12  '}>
            <h1  className="text-center titleNav mt-4">Our Menu</h1>
          </Col>

          </div> 
          <MenuNavigation/> 
          
        </div>
        </div>
        <div className="margin">  


        {menuData && menuData.length>0 ? (menuData.map((item,index)=>{
            let title;
            let arr=[];
            title=item.section
         
              item.subSections.map(sec => {
                arr=[...arr,...sec.data]
              }) 
              return(  <section id={title} key={index}>       <p className="text-left title mt-4">{title}</p> 
              <MenuDishes dishesArray={arr} category={title}></MenuDishes>
              </section>     
              )

        })):(
<p className="text-left title mt-4">loading</p> 

        )}
        </div>
       
        
      </div>
      </section>
 
    
  )

}

export default MenuMain;