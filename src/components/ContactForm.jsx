// ContactForm.jsx
import { useState } from 'react';
import './ComponantsStyle.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
          <span className='heading'>Kontaktformular</span>
          Name:
        <input className='input' type="text" value={name} onChange={(event) => setName(event.target.value)} />
          E-Mail:
          <input className='input' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />

          Nachricht:
          <textarea className='textarea' rows="10" cols="30" id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
          <div className="button-container">
        <button className='send-button' type="submit">Absenden</button>
        </div>
      </form>
      {success && <p>Danke für Ihre Nachricht!</p>}
    </div>
  );
};

export default ContactForm;