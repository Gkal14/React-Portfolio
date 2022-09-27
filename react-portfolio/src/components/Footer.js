import React from 'react'
import "./css/Footer.css"

export default function Footer()  {
  return (
    <div id='contact' className=''>
        <form className="form">
            <div className='contact-message'>
                <h1>Contact</h1>
                <p className=''>Submit the form below or contact me via any of the following
                </p>
                <a href="https://www.linkedin.com/in/george-kaluwin">LinkedIn </a>
                    <a href="mailto:georgekaluwin@gmail.com">Email</a>
                    <a href="https://github.com/Gkal14">GitHub </a>
            </div>
            <input className='' type="text" placeholder='Name' name='name' />
            <input className='' type="email" placeholder='Email' name='email' />
            <textarea name="message" rows="10" placeholder='Message'></textarea>
            <button className=''>Contact me</button>
        </form>
    </div>
  )
}