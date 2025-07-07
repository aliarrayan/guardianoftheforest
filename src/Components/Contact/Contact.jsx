import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="msg icon" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam consequuntur officia vitae molestias.</p>
                <ul>
                    <li><img src={mail_icon} alt="mail" /> guardianforest@gmail.com</li>
                    <li><img src={phone_icon} alt="phone" /> +62 877 4225 2434</li>
                    <li><img src={location_icon} alt="location" /> 77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form>
                    <input type='text' placeholder='Your name' required />
                    <input type='email' placeholder='Your email' required />
                    <textarea rows="6" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
