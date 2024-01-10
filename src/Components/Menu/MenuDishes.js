import deliveryIcon from '../../icons_assets/basket .svg'
import Card from 'react-bootstrap/Card';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow, { DIRECTION } from 'react-arrows'
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import Carousel from 'react-grid-carousel'
import { useScreen } from "../../providers/screenSize";

function MenuDishes(props) {


  let dishesArray = props.dishesArray
  const category = props.category
  const smallDisplay = []

  const { isSmallScreen,screenSize } = useScreen();
 
  const rows = [...Array(Math.ceil(dishesArray.length /  2))];
  const productRows = rows.map((row, idx) => dishesArray.slice(idx * 2, idx * 2 + 2));

  useEffect(() => {


  }, []);




  return (
    <section id='menuDishes' >
      
{isSmallScreen && screenSize<500 &&(<>

{dishesArray.map((src, index) => {
  return(
    <div className='cards' key='cardsSmall' >
  <Card className={category == 'Drinks' ? 'cardDrinks m-2' : " m-2"} key={index}>
    <Card.Img variant="top" className={category == 'Drinks' ? 'cardImgDrinks' : "cardImg"}src={src.image} />
    <Card.Body style={{ backgroundColor: "#EDEFEE" }} >
      <Card.Title className={category == 'Drinks' && 'drinksTitle'} >
        <div className="d-flex ">
          <p className="cardTitle">{src.name}</p>
          <p className="cardPrice">{src.price}</p>
        </div>
      </Card.Title>
      {src.description != 'Drinks' && (<Card.Text className="cardText">
          {src.description}
        </Card.Text>)}

    </Card.Body>
  </Card>
  </div>)
})}
</>)}
      {isSmallScreen && screenSize<700 && screenSize>500 && (
      <>

        {productRows.map((row, idx) => {
          console.log('row src', row)

          return (
            <div className='cards' key='cardsSmall' >

              {row.map((src, index) => {
                return(
                <Card className={category == 'Drinks' ? 'cardDrinks m-2' : " m-2"} key={index}>
                  <Card.Img variant="top" className={category == 'Drinks' ? 'cardImgDrinks' : "cardImg"}src={src.image} />
                  <Card.Body style={{ backgroundColor: "#EDEFEE" }} >
                    <Card.Title className={category == 'Drinks' && 'drinksTitle'} >
                      <div className="d-flex ">
                        <p className="cardTitle">{src.name}</p>
                        <p className="cardPrice">{src.price}</p>
                      </div>
                    </Card.Title>
                    {src.description != 'Drinks' && (<Card.Text className="cardText">
                        {src.description}
                      </Card.Text>)}

                  </Card.Body>
                </Card>)
              })}
            </div>
          )
        }



        )}

      </>





      ) }


{screenSize>700 &&

        (

          <Carousel containerClassName='carousel'  cols={screenSize<1000 ?3:4} rows={1} gap={screenSize<900 ? 3:3} loop hideArrow={dishesArray.length <= 4 ? true : false} >


            {dishesArray && dishesArray.map((src, index) => {
              return (
                <Carousel.Item  >


                  <Card className={category == 'Drinks' ? 'cardDrinks mb-5' : " mb-2"} key={index}>
                    <Card.Img variant="top" className={category == 'Drinks' ? 'cardImgDrinks' : "cardImg"} src={src.image} />
                    <Card.Body style={{
                      backgroundColor: "#EDEFEE",
                      overflow: category == 'Drinks'? "hidden":"auto",
                      textOverflow: "clip"
                    }}  >
                      <Card.Title className={category == 'Drinks' && 'drinksTitle'}>
                        <div className="d-flex ">
                          <p className="cardTitle">{src.name}</p>
                          <p className="cardPrice">{src.price}</p>
                        </div>
                      </Card.Title>
                      {src.description != 'Drinks' && (<Card.Text className="cardText">
                        {src.description}
                      </Card.Text>)}


                    </Card.Body>
                  </Card>
                </Carousel.Item>
              )
            }

            )}
          </Carousel>)}




    </section>
  )

}

export default MenuDishes