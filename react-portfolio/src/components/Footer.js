import React from 'react'
import "./css/Footer.css"

export default function Footer()  {
  return (
    <div id='contact' className=''>
        <form method='POST' action="https://getform.io/f/3e10c187-9d81-4eda-8464-b8b80d858230" className="form">
            <div className='pb-8'>
                <p className=''>Contact</p>
                <p className=''>Submit the form below or email me at - georgekaluwin@gmail.com </p>
            </div>
            <input className='' type="text" placeholder='Name' name='name' />
            <input className='' type="email" placeholder='Email' name='email' />
            <textarea className='' name="message" rows="10" placeholder='Message'></textarea>
            <button className=''>Contact me!</button>
        </form>
    </div>
  )
}