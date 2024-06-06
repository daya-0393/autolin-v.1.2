import { oswald } from '@/app/fonts';
import '/app/styles/contact.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {PhoneIcon, EmailIcon, CalendarIcon } from '../icons';

const Contact = () => {

  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w7xcwkk', 'contact_form', form.current, {
        publicKey: 'user_opD6c7JPY3hWfFA8RPNFD',
      })
      .then(
        () => {
          setMessageStatus("OK");
          form.current.reset();
        },
        (error) => {
          setMessageStatus("FAILED");
          setErrorMessage(error.text);
        },
      );
  };

    //Motion variants
    const section = {
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.4
        }
      },
      hidden: {opacity: 0}
    }

    const list = {
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.3
        }
      },
      hidden: {opacity: 0}
    }
  
    const item = {
      visible: {opacity: 1},
      hidden: {opacity: 0},
    }

  return (
    <motion.section className="container-xl contact" id="contact"
      initial="hidden"
      whileInView="visible"
      variants={section}
      viewport={{once: true}}
    >
      <motion.h2 className={`section-title ${oswald}`} variants={item}>Contacto</motion.h2>
      <motion.div className="container-inner" variants={item}>
        <motion.div className="row flex-column-reverse flex-md-row gy-5 gy-lg-0" variants={section}>
          <motion.div className="col" variants={item}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7859.3145628735565!2d-84.1920798!3d9.9624456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9ed5bb84efb%3A0xf39fe51c716ab407!2sAutolin!5e0!3m2!1ses-419!2scr!4v1717015783815!5m2!1ses-419!2scr" width="600" height="300" style={{"border": 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="contact-info">
              <div className='info-items'>
                <div className="info-item">
                  <PhoneIcon/>
                  <span>+506 62555527</span>
                </div>
                <div className="info-item">
                  <EmailIcon/>
                  <span>refaccioneselectrocar@gmail.com</span>
                </div>
                <div className="info-item">
                  <CalendarIcon/>
                  <span>Lunes - Domingo | 7:00am - 7:00pm</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="col" variants={item}>
            <div className='alert-container'>
              {messageStatus === "OK" &&
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                  Mensaje enviado. Gracias por contactarnos!
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              }
              {messageStatus === "FAILED" &&
                <div class="alert alert-danger" role="alert">
                  Error: {errorMessage}
                </div>
              }
            </div>
            <motion.form className='form' onSubmit={sendEmail} ref={form} 
              variants={list}
            >
              <motion.div className="mb-3" variants={item}>
                <label htmlFor="userName" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="userName" name='user_name' required/>
              </motion.div>
              <motion.div className="mb-3" variants={item}>
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" name='user_email' placeholder="name@example.com" required/>
              </motion.div>
              <motion.div className="mb-3" variants={item}>
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="number" minLength={8} maxLength={8} className="form-control" id="phone" name='user_phone'/>
              </motion.div>
              <motion.div className="mb-3" variants={item}>
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" name='message' required></textarea>
              </motion.div>
              <motion.button type="submit" className='btn btn-primary' variants={item}>Enviar</motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Contact;