import React from 'react'
import './Prices.css'

export default function Prices() {
  return (
    <div className='blue' id='prices'>
      <h1>Prices</h1>
      <table>
        <tr>
          <th>Service</th>
          <th>Description</th>
          <th className='cost'>Cost</th>
        </tr>
        <tr>
          <td>Doggie Day Care</td>
          <td>8am - 6pm (Mon-Fri Includes 2 walks)</td>
          <td className='cost'>£25</td>
        </tr>
        <tr>
          <td>Part Day Care</td>
          <td>3 hours or less (Mon-Fri Includes 1 walk)</td>
          <td className='cost'>£15</td>
        </tr>
        <tr>
          <td>Part Day Care</td>
          <td>3 - 6 hours (Mon-Fri Includes 1 walk)</td>
          <td className='cost'>£20</td>
        </tr>
       {/* <tr>
          <td>Home Visits</td>
          <td>Feed, fuss and fresh water (30 mins)</td>
          <td className='cost'>£10</td>
  </tr>*/}
        <tr>
          <td>Overnight trial</td>
          <td>Trial night before official stay</td>
          <td className='cost'>£10</td>
        </tr>
        <tr>
          <td>Overnight stays</td>
          <td>6pm - 8am (Includes 1 evening walk)</td>
          <td className='cost'>£25</td>
        </tr>
        <tr>
          <td>24h stays</td>
          <td>Morning, Afternoon and Evening walk</td>
          <td className='cost'>£40</td>
        </tr>
        <tr>
          <td>Weekly stay</td>
          <td>Additional days charged at £35 day rate (24 hour stay)</td>
          <td className='cost'>£250</td>
        </tr>
        <tr>
          <td>Taxi Service</td>
          <td>Return to and from local appointments (vet, groomers etc)</td>
          <td className='cost'>45p per mile</td>
        </tr>
      {/*  <tr>
          <td>Walking</td>
          <td>30min/60min</td>
          <td className='cost'>£7.50/£14</td>
  </tr>*/}
      </table>

      <h3>Methods of payment</h3>
      <p>Cash/Bank Transfer/Paypal</p>
    </div>
  )
}
