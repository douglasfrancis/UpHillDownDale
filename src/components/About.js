import React from 'react'
import about from '../images/about.jpg'

export default function About() {
  return (
    <div id='about' className='white'>
      <h1>ABOUT</h1>

    <div className='flexwrap-container'>
       <img className='img' src={about} alt="Beth and Me" />

        <p className='txt'>Hi, my name is Laura and I’m the new founder and business owner of Up Hill ‘n’
        Down Dale Home Boarding, Doggie Day Care, Dog Walking and Dog Taxi. After 7
        years in Policing on the Rural Wildlife Team, I have decided to pursue my dreams of
        working with dogs. Dogs have always been a big part in my life, I can’t imagine my
        life without a dog!
        I live in Buglawton, Congleton, Cheshire with my Husband, two boys and my doggie
        Beth, a Patterdale Terrier she’s almost 15 years old! I’ve previously owned Border
        Terriers, Lurchers, greyhounds and Spaniels. Dogs will always be my passion!
        I understand how worrying and stressful it can be for dog owners leaving their dogs
        with someone whilst they are away on holiday. I can assure you; they will feel at
        home and receive the same love from me as they do at home, with lots of walks,
        playtime, treats and cuddles!
        We are fully Insured, CRB/DBS checked, and I also have Dog First Aid and
        Emergency Canine Care qualification accredited by CPD standards office.</p>
    </div>
     
    </div>
  )
}
