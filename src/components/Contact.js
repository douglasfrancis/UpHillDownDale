import React, { useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Contact() {

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const breedRef = useRef();
    const numberRef = useRef();
    const serviceRef = useRef();
    const msgRef = useRef();

    const [ loading, setLoading ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if(!nameRef.current.value || !numberRef.current.value || !emailRef.current.value || !msgRef.current.value || !breedRef.current.value ){
      toast.error("Please fill in all required fields")
    } else {
      setLoading(true)

      axios.post(`${process.env.REACT_APP_API_URL}/uphill/contact`,
      {
        name: nameRef.current.value,
        email: emailRef.current.value,
        breed: breedRef.current.value,
        number: numberRef.current.value,
        service: serviceRef.current.value,
        msg: msgRef.current.value
      })
      .then(() => {
        toast.success("Sent Successfully")
        setLoading(false)
        formRef.current.reset()
      })
      .catch(() => {
        toast.error("Oops, something went wrong")
        setLoading(false)
      })
    }
  };

  return (
    <div id='contact' className='white'>
      <h1>Contact</h1>

      <p>For all enquiries, please fill in the form below and we will get back to you as soon as possible.</p>

      <form ref={formRef} onSubmit={sendEmail}>
        <input placeholder='Name' ref={nameRef} name='Name'/>
        <input placeholder='Number' ref={numberRef} name='Number'/>
        <input placeholder='Email Address' ref={emailRef} name='Email'/>
        <input placeholder='Dog Breed' ref={breedRef} name='Breed'/>
        <select ref={serviceRef} name='Service'>
          <option>Service Interested In</option>
          <option>Doggie Day Care</option>
          <option>Part Day Care</option>
          <option>Overnight Stays</option>
          <option>24hr Stays</option>
          <option>Weekly Stays</option>
          <option>Taxi Service</option>
        </select>
        <textarea ref={msgRef} placeholder="Message" name='Msg'></textarea>
        <button id='submit-btn' type='submit' disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
      </form>
      <p id='consent'>By submitting this form, I consent to Up Hill 'n' Down Dale storing the above information to contact me regarding any services offered by Up HIll 'n' Down Dale.</p>
    </div>
  )
}
