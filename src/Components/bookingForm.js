import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Field, Formik, FormikProps } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import mainImage from "../icons_assets/restauranfood.jpg"
import RestaurantImage from '../icons_assets/restaurant.jpg'
import ChefsImage from '../icons_assets/chefs.jpg'

function BookingForm(props) {

  const images = [mainImage, RestaurantImage, ChefsImage]

  let bookedDate = props.bookings;
  const defaultTime = props.defaultTimeSlots;
  let defaultDay = new Date().getDate()
  let defaultMonth = new Date().getMonth() + 1
  const defaultYear = new Date().getFullYear();
  const [displayTime, setDisplayTime] = useState(defaultTime);

  const filterTimes = (value) => {
    const resetDisplayTime = defaultTime

    // console.log('reducer',bookedDate)


    if (bookedDate.filter((e) => e.date === value)) {
      bookedDate.filter((e) => e.date === value).map(t => {
        // console.log('mapping', t.time);

        const index = resetDisplayTime.findIndex(f => f === t.time)
        if (index > -1)
          resetDisplayTime.splice(index, 1)
        // console.log('Find index', resetDisplayTime.findIndex(f => f === t.time));
        setDisplayTime(resetDisplayTime);
      })
    }
    else {
      // console.log('back to default')
      setDisplayTime(defaultTime);
    }




  }

  const defaultDate = () => {

    if (defaultDay < 10) {
      defaultDay = '0' + defaultDay;
    }
    if (defaultMonth < 10) {
      defaultMonth = '0' + defaultMonth;
    }

    const date = defaultYear + '-' + defaultMonth + '-' + defaultDay


    // bookedDate.filter((e)=> e.date ===date).map(t =>{

    // defaultTime.splice(defaultTime.findIndex( f=> f===t.time),1)

    //  })

    filterTimes(date)

    return date
  }

  const [guestNo, setguestNo] = useState("2");
  const [date, setdate] = useState(defaultDate);
  const [time, setTime] = useState('');
  const [ocassion, setOcassion] = useState('Lunch');
  const [otherOption, setOther] = useState('');
  const [formdata, setFormData] = useState('')
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState('');
  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === '';
  const minDate = defaultYear + '-' + defaultMonth + '-' + defaultDay
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const Phone = ({ field, form, ...props }) => {
    return (
      <PhoneInput
        country="AUS"
        id="phoneInput"
        value=""
        required
        data-testid='phone'
       
        onChange={value => {
          if (!form.touched[field.name]) form.setFieldTouched(field.name);
          form.setFieldValue(field.name, value);


          // form.errors.phone='phone is incorrect'
          // console.log(form.errors.phone)
          // return form.errors
        }}
      />
    );
  };

  const checkSetDate = (value) => {
    setdate(value);
    // defaultTime=props.defaultTimeSlots;
    // console.log('ran check set date',value)
    filterTimes(value);

  }

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    // phone:yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
    date: yup.date().required().min(minDate, 'The date is in the past'),
    time: yup.string().required('Time is required').notOneOf(['', 'Please select a time', 'There are no times available for this date'], 'Please select a valid time'),
    guestNo: yup.number().required().moreThan(0, 'Number of guests needs to be more than 0'),
    ocassion: yup.string().required(),
    otherOption: yup.string().when('ocassion', (ocassion) => {
      if (ocassion === 'Other') {
        return yup.string().required('Please let us know the ocassion')
      }

    })
    // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });



  // console.log('date is',date,' and mindate is ', new Date(minDate))



  const handleSubmit = (event) => {

    // console.log(event)

    if (event.date && event.time && event.guestNo != 0 && event.ocassion && event.firstName && event.lastName && event.phone) {

      // bookedDate = [...bookedDate, event]
      props.onBookingSet(event);
      defaultDate();
      props.closeModal();
    }
    else {
      alert('populate all fields')
    }


  };









  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        date: date,
        time: time,
        guestNo: guestNo,
        ocassion: ocassion,
        otherOption: otherOption
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isValidating }) => (
        <Form onSubmit={handleSubmit} >
          <div className="modalForm">
            <Form.Group
              as={Col}
              // controlId="validationFormik101"
              className="position-relative px-2"
            >
              <Form.Label style={{color:'black'}}>First name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !!errors.firstName}
                isInvalid={!!errors.firstName}
                data-testid='name'
              />
              <Form.Control.Feedback type="invalid" >
              <div className='errorMessage'>
               <p>{errors.firstName}</p> 
               </div>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              // controlId="validationFormik102"
              className="position-relative px-2"
            >
              <Form.Label style={{color:'black'}}>Last name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={!!errors.lastName}
                data-testid='lastname'
              />

              <Form.Control.Feedback type="invalid" >
                <div className='errorMessage'>
               <p>{errors.lastName}</p> 
               </div>
              </Form.Control.Feedback>
            </Form.Group>



          </div>
        



          <div className='modalForm '>
          <Form.Group  as={Col}
          //  controlId="aus_phone" 
           className="position-relative px-2 mt-2">
            <Form.Label style={{color:'black'}}>Phone number:</Form.Label>
            <Field component={Phone}
              name='phone'

            />

            {/* {errors.phone && (
                   <div className="error">{errors.phone}</div>
                 )} */}
          </Form.Group>
            <Form.Group  as={Col} className="position-relative px-2 mt-2"
            // controlId="validationCustom00"
            >
              <Form.Label style={{color:'black'}}  >Date:</Form.Label>
              <Form.Control data-testid='date' required type="date" name='date' value={values.date} onChange={e => { setdate(e.target.value); handleChange(e); }} isValid={touched.date && !errors.date}
                isInvalid={!!errors.date} />
              <Form.Control.Feedback type="invalid"  >
              <div className='errorMessage'>
               <p>{errors.date}</p> 
               </div>
              </Form.Control.Feedback>
            </Form.Group>
           
          </div>
          <div className="modalForm">
          <Form.Group  as={Col} className="mb-3 px-2 borderNone mt-2" 
          // controlId="validationCustom02"
          >
            <Form.Label style={{color:'black'}}>No. of Guests:</Form.Label>
            <div className='d-flex'>
              <Form.Control id='guestNo' type="range" placeholder='No' name='guestNo' value={values.guestNo} onChange={handleChange} min={1} max={10}
                isValid={touched.guestNo && !errors.guestNo}
                isInvalid={!!errors.guestNo} />

              <h4 className=" px-2">{values.guestNo}</h4>

            </div>
            <Form.Control.Feedback type="invalid" >
            <div className='errorMessage'>
               <p> {errors.guestNo}</p>
               </div>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="col mb-3 px-2 mt-2"
          //  controlId="validationCustom01"
           >
              <Form.Label style={{color:'black'}}>Time:</Form.Label>
              <Form.Select data-testid='time' required name='time' value={values.time} onChange={handleChange} isValid={touched.time && !errors.time}
                isInvalid={!!errors.time} >
                {displayTime.length > 0 ? <option >Please select a time</option> : <option >There are no times available for this date</option>}
                {displayTime.map((src, index) => {
                  return (
                    <option data-testid="select-option" value={src} key={index}>{src}</option>
                  )

                })}
              </Form.Select>
              <Form.Control.Feedback type="invalid" >
               <div className='errorMessage'>
               <p>{errors.time}</p> 
               </div>
               
              </Form.Control.Feedback>
            </Form.Group>
          
          </div>
        
          <div className="modalForm">
          <Form.Group  as={Col} className="mb-3 px-2 mt-2">
            <Form.Label style={{color:'black'}} >Ocassion:</Form.Label>
            <Form.Select name='ocassion' value={values.ocassion} onChange={handleChange} aria-label="Default select example">
              <option value="Lunch">Lunch/Dinner</option>
              <option value="BirthDay">Birthday</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3 px-2">
            <Form.Label htmlFor="otherOption" style={{color:'black'}}>Comments:</Form.Label>
            <Form.Control as="textarea" required name="otherOption" value={values.otherOption} type='text' onChange={handleChange} isValid={touched.otherOption && !errors.otherOption}
              isInvalid={!!errors.otherOption} />
            <Form.Control.Feedback type="invalid">
            <div className='errorMessage'>
               <p>{errors.otherOption}</p>
               </div>
            </Form.Control.Feedback>
          </Form.Group> 
          {/* <div as={Col} className="d-flex justify-content-center formImages" >
            {images.map(img => {
              return (
                <img src={img} ></img>)
            })}
          </div> */}
          </div>
          <div className="text-center" >
          <a  href='/Menu'>  <button data-testid='submit' id='submit' type="submit" className="rounded button">Reserva a table </button></a>
          </div>
        </Form>
      )}
    </Formik>




  );
}

export default BookingForm;
