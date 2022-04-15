import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact=()=> {

    const form = useRef();
    const [emailSendingDone, setEmailSendingDone] = React.useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4ghc4um', 'template_g1jv1i6', form.current, '2NllznTQ_byn1Q_4V')
        .then((result) => {
            console.log(result.text);
            setEmailSendingDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="E-Mail"/>
                    <textarea name="message" className="user" placeholder="message"/>
                    <input type="submit" value="Send" className="button"/>
                    <span>{emailSendingDone && "Thanks for Connecting. I will reply to you as soon as possible.!"}</span>
                    <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div> 
                </form>
            </div>
        </div>

    )
}

export default Contact;