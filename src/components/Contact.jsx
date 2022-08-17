import React from 'react'
import Img from '../assets/contact.jpg'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-6'>
            <h1>ContactUs</h1>
            <Link className='btn btn-primary py-2' to='/contact'>Send</Link>
        </div>
        <div className='col-lg-6'>
            <img src={Img} alt="Contact Us" width='100%'/>
        </div>
      </div>
    </div>
  )
}

export default Contact
