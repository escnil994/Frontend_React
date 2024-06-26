import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AppContactTo } from '../../services/AppUserService';
import '../../assets/css/AppContact.css';
import Swal from 'sweetalert2';


const AppContact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [habilitar, setHabilitar] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const validateFields = (field) => {
    if (showErrors) {
      if (field === 'name' && contactForm.name.trim().length < 1) {
        return 'Name is required';
      }
      if (field === 'email' && !/\S+@\S+\.\S+/.test(contactForm.email)) {
        return 'Email is invalid';
      }
      if (field === 'message' && contactForm.message.trim().length < 1) {
        return 'Message is required';
      }
    }
    return null;
  };

  const isFormValid = () => {
    return (
      contactForm.name.trim().length > 0 &&
      /\S+@\S+\.\S+/.test(contactForm.email) &&
      contactForm.message.trim().length > 0
    );
  };

  useEffect(() => {
    setHabilitar(!isFormValid());
  }, [contactForm]);

  const contactar = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (isFormValid()) {
      try {
        const resp = await AppContactTo(contactForm);
        setResponseMessage(resp.msg);
        setContactForm({ name: '', email: '', message: '' }); 
        setShowErrors(false); 
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message has been sent successfully',
          showConfirmButton: false,
          timer: 2000
        });
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error, could not get!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  };

  return (
    <div id="body" className="JetBrains" style={{ padding: '20px' }}>
      <h3 className="general-text" style={{ fontSize: '40px', marginBottom: '20px' }}>How can you get in contact with me?</h3>

      <div className="row justify-content-center">
        <div className="col-6 bg-light text-left" id="font-desc" style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <p><FaEnvelope title="Email" aria-label="Email" /> <a target="_blank" href="mailto:escnil994@nilson-escobar.com" className="text-secondary">escnil994@nilson-escobar.com</a></p>
          <p><FaPhone title="Phone" aria-label="Phone" /> <a target="_blank" href="tel:50375068027" className="text-secondary">+503 7506-8027</a></p>
          <p><FaWhatsapp title="Whatsapp" aria-label="Whatsapp" /> <a target="_blank" href="https://wa.me/50375068027" className="text-secondary">Write a message</a></p>
          <p><FaLinkedin title="LinkedIn" aria-label="LinkedIn" /> <a target="_blank" href="https://www.linkedin.com/in/escnil994/" className="text-secondary">See my profile on LinkedIn</a></p>
          <p><FaGithub title="Github" aria-label="Github" /> <a target="_blank" href="https://github.com/escnil994" className="text-secondary">Check my projects on Github</a></p>
        </div>
      </div>

      <br />
      <div className="row justify-content-center">
        <div className="card w-75 contact-card">
          <form className="row needs-validation justify-content-center" onSubmit={contactar}>
            <h5 className="contact-form-title">Contact me through form</h5>
            <div className="col-md-5 position-relative form-group">
              <label className="form-label">*Your name</label>
              <input type="text" className="form-control" name="name" value={contactForm.name} onChange={handleChange} />
              <div className="error-message">
                {validateFields('name')}
              </div>
            </div>
            <div className="col-md-5 position-relative form-group">
              <label className="form-label">*Email</label>
              <input type="text" className="form-control" name="email" value={contactForm.email} onChange={handleChange} />
              <div className="error-message">
                {validateFields('email')}
              </div>
            </div>

            <div className="col-md-10 position-relative form-group">
              <label className="form-label">*Message</label>
              <textarea type="text" className="form-control" name="message" value={contactForm.message} onChange={handleChange}></textarea>
              <div className="error-message">
                {validateFields('message')}
              </div>
            </div>
            <button className="btn btn-primary w-50 m-3" type="submit" disabled={habilitar}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppContact;
