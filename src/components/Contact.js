import React, { useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

export default function Contact() {

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const serviceRef = useRef();
    const msgRef = useRef();

    const [ loading, setLoading ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if(!nameRef.current.value || !numberRef.current.value || !emailRef.current.value || !msgRef.current.value  ){
      toast.error("Please fill in all required fields")
    } else {
      setLoading(true)
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          formRef.current.reset();
          toast.success("Sent Successfully")
          setLoading(false)
      }, (error) => {
          toast.error("Oops, something went wrong")
          setLoading(false)
      });
    }
  };

  return (
    <div id='contact' className='white'>
      <h1>Contact</h1>

      <form ref={formRef} onSubmit={sendEmail}>
        <input placeholder='Name' ref={nameRef} name='Name'/>
        <input placeholder='Number' ref={numberRef} name='Number'/>
        <input placeholder='Email Address' ref={emailRef} name='Email'/>
        <select ref={serviceRef} name='Service'>
          <option>Service Interested In</option>
          <option>Doggie Day Care</option>
          <option>Part Day Care</option>
          <option>Overnight Stays</option>
          <option>24hr Stays</option>
          <option>Weekly Stays</option>
          <option>Taxi Service</option>
          <option>Walking</option>
        </select>
        <textarea ref={msgRef} placeholder="Message" name='Msg'></textarea>
        <button id='submit-btn' type='submit' disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
      </form>
    </div>
  )
}
