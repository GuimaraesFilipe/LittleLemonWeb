import BookingForm from "./bookingForm";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function BookingPage(props){

    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = '/'; 
    //   navigate(path);
    // }

    const defaultTimeSlots=['13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']
    const [dateTimeslot,setDateTimeSlot]=useState([{
      date:'2023-08-10',
      time:'13:00'
    }]);

    const booked=(value)=>{
      setDateTimeSlot(value);

    }

    // console.log(dateTimeslot)

    const closeModal =()=>{
      props.setShowModel(false)
    }
  return(  <Modal
    size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
      show={props.showModel}
      onHide={() => closeModal()}
    >
        <ModalHeader closeButton>
        <h2>Book your table</h2>
        </ModalHeader>
        <ModalBody>
        <BookingForm closeModal={() => closeModal()}defaultTimeSlots={defaultTimeSlots} dateTimeslot={dateTimeslot} onBookingSet={(dateTimeslot)=>booked(dateTimeslot)} ></BookingForm>
        </ModalBody>
       
    </Modal>)

    
}

export default BookingPage;
