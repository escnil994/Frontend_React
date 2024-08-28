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
      <h3 className="general-text" style={{ fontSize: '40px', marginBottom: '20px' }}>Reach Out to Me</h3>



      <div className="row justify-content-center">
        <div className="col-8 bg-light text-left" id="font-desc" style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="contact-info d-flex flex-row justify-content-start align-items-center flex-wrap">
            <p className="d-flex align-items-center m-auto contact-item">
              <a className='text-secondary' target="_blank" rel="noopener noreferrer" href="mailto:escnil994@nilson-escobar.com">
                <FaEnvelope title="Email" aria-label="Email" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="mailto:escnil994@nilson-escobar.com" className="text-secondary ml-2 contact-text"></a>
            </p>
            <p className="d-flex align-items-center m-auto contact-item">
              <a className='text-secondary' target="_blank" rel="noopener noreferrer" href="tel:50375068027">
                <FaPhone title="Phone" aria-label="Phone" />
              </a>
              <a className="text-secondary ml-2 contact-text"></a>
            </p>
            <p className="d-flex align-items-center m-auto contact-item">
              <a className='text-secondary' target="_blank" rel="noopener noreferrer" href="https://wa.me/50375068027">
                <FaWhatsapp title="Whatsapp" aria-label="Whatsapp" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/50375068027" className="text-secondary ml-2 contact-text"></a>
            </p>
            <p className="d-flex align-items-center m-auto contact-item">
              <a className='text-secondary' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/escnil994/">
                <FaLinkedin title="LinkedIn" aria-label="LinkedIn" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/escnil994/" className="text-secondary ml-2 contact-text"></a>
            </p>
            <p className="d-flex align-items-center m-auto contact-item">
              <a className='text-secondary' target="_blank" rel="noopener noreferrer" href="https://github.com/escnil994">
                <FaGithub title="Github" aria-label="Github" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/escnil994" className="text-secondary ml-2 contact-text"></a>
            </p>
          </div>

        </div>
      </div>



      <br />
      <div className="row justify-content-center">
        <div className="card w-75 contact-card p-4">
          <form className="row needs-validation justify-content-center" onSubmit={contactar}>
            <h5 className="contact-form-title text-center mb-4">Contact Form</h5>
            <div className="col-md-5 position-relative form-group mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name" value={contactForm.name} onChange={handleChange} />
              <div className="error-message text-danger">
                {validateFields('name')}
              </div>
            </div>
            <div className="col-md-5 position-relative form-group mb-3">
              <input type="email" className="form-control" name="email" placeholder="Email" value={contactForm.email} onChange={handleChange} />
              <div className="error-message text-danger">
                {validateFields('email')}
              </div>
            </div>

            <div className="col-md-10 position-relative form-group mb-3">
              <textarea className="form-control" name="message" rows="4" placeholder="" value={contactForm.message} onChange={handleChange}></textarea>
              <div className="error-message text-danger">
                {validateFields('message')}
              </div>
            </div>
            <button className="btn btn-primary w-50 mt-3 sendmsg" type="submit" disabled={habilitar}>
              Send Message
            </button>
          </form>
        </div>



      </div>
    </div>
  );
};

export default AppContact;
