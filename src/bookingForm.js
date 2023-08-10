import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormRange from 'react-bootstrap/FormRange'
import { useState } from 'react';

function BookingForm(props){
  let bookedDate=props.dateTimeslot;
  const defaultTime=props.defaultTimeSlots;
  let defaultDay= new Date().getDate()
  let defaultMonth= new Date().getMonth() +1
  const defaultYear= new Date().getFullYear();
  const [displayTime, setDisplayTime]=useState([...defaultTime]);
  
  const filterTimes =(value)=>{
    const resetDisplayTime=[...defaultTime]
    console.log('new',displayTime)
   

    bookedDate.filter((e)=> e.date ===value).map(t =>{
      console.log('mapping',t);
      resetDisplayTime.splice(resetDisplayTime.findIndex( f=> f===t.time),1)

      console.log('display',resetDisplayTime)
     })
     setDisplayTime(resetDisplayTime);

  }

 const defaultDate=()=>{

if (defaultDay<10){
  defaultDay='0'+defaultDay;
}
if (defaultMonth <10){
  defaultMonth='0'+defaultMonth;
}

const date= defaultYear+'-'+defaultMonth+'-'+defaultDay


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
 




  const checkSetDate=(value)=>{
    setdate(value);
    // defaultTime=props.defaultTimeSlots;
   
    filterTimes(value);
  }

 



  const submitBooking= (e) =>{
    e.preventDefault();
    alert(`Your booking has been submitted for ${guestNo} people on ${date} at ${time}`)
    bookedDate=[...bookedDate,{
      date:date,
      time:time
    }]
    props.onBookingSet(bookedDate);
    defaultDate();
    props.closeModal();
  }




    return (
        <Form onSubmit={submitBooking}>
          <fieldset >
          <Form.Group className="mb-3" controlId="formGroupDateTime">
          <Form.Label >Pick a Date & Time</Form.Label>
          <div className='d-flex justify-content-center'>
          <Form.Control type="date" name='date' value={date} onChange={e => checkSetDate(e.target.value)} />
          <Form.Select  value={time} onChange={(e)=>setTime(e.target.value)} aria-label="Default select example">
          {displayTime.length> 0 ? <option>Please select a time</option> : <option>There are no times available for this date</option> }
                {displayTime.map((src,index)=>{
                  return(
                    <option value={src} key={index}>{src}</option>
                  )

                })}
    </Form.Select>
          </div>
          
          </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Number of Guests</Form.Label>
            <div className='d-flex align-items-center'>
            <Form.Range id="No" type="range" placeholder='No' name='Score' value={guestNo}  onChange={e => setguestNo(e.target.value)} min={0} max={10}/>
              <h4>{guestNo}</h4>
            </div>
          
            </Form.Group>
           
            <Form.Group className="mb-3">
              <Form.Label >Ocassion</Form.Label>
              <Form.Select  value={ocassion} onChange={(e)=>setOcassion(e.target.value)} aria-label="Default select example">
                <option value="Lunch">Lunch/Dinner</option>
                <option value="BirthDay">Birthday</option>
                <option value="Other">Other</option>
    </Form.Select>
            </Form.Group>
{ocassion==='Other'?   <Form.Group className="mb-3">
          <Form.Label htmlFor="otherOption">Other Option</Form.Label>
          <Form.Control id="otherOption" value={otherOption} type='text' onChange={(e)=>setOther(e.target.value)} />
        </Form.Group>:<></>}

           <div className="text-center" >
           <Button  type="submit">Submit</Button>
           </div>
         
          </fieldset>
        </Form>
      );
}

export default BookingForm;
