import React, { useRef} from 'react'
import './Contact.css'

export default function Contact() {

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const serviceRef = useRef();
    const msgRef = useRef();


  const submit = (e) =>{
    e.preventDefault()
    console.log(nameRef.current.value)
  }

  return (
    <div id='contact' className='white'>
      <h1>Contact</h1>

      <form ref={formRef} onSubmit={submit}>
        <input placeholder='Name' ref={nameRef}/>
        <input placeholder='Number' ref={numberRef}/>
        <input placeholder='Email Address' ref={emailRef}/>
        <select ref={serviceRef}>
          <option>Service Interested In</option>
          <option>Doggie Day Care</option>
          <option>Part Day Care</option>
          <option>Overnight Stays</option>
          <option>24hr Stays</option>
          <option>Weekly Stays</option>
          <option>Taxi Service</option>
          <option>Walking</option>
        </select>
        <textarea ref={msgRef}></textarea>
        <button id='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}
