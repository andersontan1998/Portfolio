import { contact } from '../../portfolio'
import './Contact.css'
import emailjs from 'emailjs-com'
import { useState } from 'react';

const Contact = () => {

  const [messageDelivered, setMessageDelivered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    // send email using email.js
    emailjs.sendForm('service_j4p4myf', 'template_yo226sj', event.target, 'eIacb9YZzlVp4ZThS')
      .then((result) => {
          console.log(result.text);
          // update state to show message delivered popup
          setMessageDelivered(true); 
          // hide the popup after 3 seconds
          setTimeout(() => {setMessageDelivered(false)}, 3000)
      }, (error) => {
          console.log(error.text);
      });
      // used to reset the form after submitting the message
      event.target.reset()
  }

  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__container'>
        <form className='contact__form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='from_name' name='from_name' placeholder='John Doe' required />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email_id' name='email_id' placeholder='johndoe123@gmail.com' required />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' placeholder='Write your message here' required />

          <div className='buttons__container'>
            <button type='submit' className='btn btn--outline'>
              Send Message
            </button>

            <div className='or'>OR</div>

            <a href={`mailto:${contact.email}`}>
              <span type='button' className='btn btn--outline'>
                Email on outlook
              </span>
            </a>
          </div>
        </form>

        {/* Message delivered popup */}
        {messageDelivered && (
          <div className="message-delivered-popup">
            Your message has been delivered.
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact