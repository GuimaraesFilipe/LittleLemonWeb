import BookingForm from "./bookingForm";
import { CloseButton, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useReducer } from "react";
import Toast from 'react-bootstrap/Toast';
import { date } from "yup";
import { useTimer } from 'react-timer-hook';




function BookingPage(props) {

  
let expiryTimestamp = new Date();
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({expiryTimestamp, onExpire: () => { dispatchToast({type:"CLOSETOAST"}); } });



  const defaultTimeSlots = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
  const reducer = (state, action) => {

    switch (action.type) {
      case "UPDATE": {
        
        return [ ...state, action.payload]
      }
      case "UPDATETOAST":{
        return(action.payload)
      }
      case "CLOSETOAST":{
        return({show:false})
      }
      default:
        return state;
    }
  };
  const [bookings, dispatch] = useReducer(reducer, []);
  const [toast, dispatchToast] = useReducer(reducer, {show:false});
  // console.log(toast)
  // console.log(bookings)
  // console.log(props.showModel)
  const booked = (value) => {
    // console.log(value)
const curTime=new Date()
    dispatch({ type: "UPDATE", payload: value });
    dispatchToast({type:"UPDATETOAST",payload:{
      show:true,
      name: `${value.firstName} ${value.lastName}`,
      date:value.date,
      time: value.time,
      currentTime:curTime.getTime()
    }})
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 15);
    restart(expiryTimestamp);

  }



  // console.log(bookings)

  const closeModal = () => {
    props.setShowModel(false)
  }
  return (    <section id="booking">

  <Modal
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    scrollable={false}
    show={props.showModel}
    
    onHide={() => closeModal()}
    className="modal-overlay modalBorder"
    
   
    
  >
     <div className="modalColor px-2">
    <ModalHeader   >
     
      <h2 data-testid='book' id='formTitle'>Make a reservation</h2>
    
      <a  href='/'>   <button type="button" className="btn-close"    onClick={() => closeModal()}></button></a>
    </ModalHeader>
    </div>
    <ModalBody className="modalColor ">
      <BookingForm closeModal={() => closeModal()} defaultTimeSlots={defaultTimeSlots} bookings={bookings} onBookingSet={(bookings) => booked(bookings)} ></BookingForm>
     
    </ModalBody>

  </Modal>

        <Toast show={toast.show} bg='success' delay={100000} autohide position="bottom-end"  className="toast-overlay">
          <Toast.Header>
            <strong className="me-auto">Reservation booked</strong>
           
          </Toast.Header>
          <Toast.Body><strong>Name: </strong>{toast.name}<strong> |Date:</strong> {toast.date}</Toast.Body>
        </Toast>
        
 
    

  </section>)


}

export default BookingPage;
