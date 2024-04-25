import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import icons_github from '../../assets/icons_github.svg';
import icons_linkedin from '../../assets/icons_linkedin.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d0550f1b-d11e-421a-95fd-0e5140a0368b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          event.target.reset();
        }
      };



  return (
    <div id='contact' className='Contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>nivedithamp23@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" />
                        <p>+1 (669) 264-7129</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" />
                        <p>San Francisco Bay Area, CA, USA</p>
                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/niveditha-padmaraju-1775ba20a/" target="_blank" rel="noopener noreferrer">
                        <img src={icons_linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Nivedithamp" target="_blank" rel="noopener noreferrer">
                        <img src={icons_github} alt="GitHub" />
                        </a>
                    </div>
                </div>
                
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact