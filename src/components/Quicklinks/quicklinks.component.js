import React from 'react'
import './quicklinks.css'
import pic from '../../assets/send_24px_outlined.png'

const Quicklinks = () => {
  return (
    <div class='grid-container'>
      <div class='item2'>
        <strong>QUICK LINKS</strong>
        <div class='item3'></div>
        <div class='item4'></div>
      </div>
      <div class='item1'>
        <ul>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
          <li>
            <img src={pic} alt='pic' />
            Lorem ipsum
          </li>
        </ul>
        <div class='view'>
          <button class='button'>VIEW ALL QUICK LINKS</button>
        </div>
      </div>
    </div>
  )
}
export default Quicklinks
