import { useContext, useState } from 'react';
import { UserContext } from '../UserContext.jsx';


const UpdateForm = () => {
    const { setUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

  
    const handleSubmit = (event) => {
      event.preventDefault();
      setUser({ name, email });

      if (name && email) {
        setSuccess(true);
        setName('');
        setEmail('');
      }
    };

    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <span className='heading'>Änderungs - Formular</span>
                Name:
                <input className='input' type="text" value={name} onChange={(event) => setName(event.target.value)} />
                Email:
                <input className='input' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <div className="button-container">
                    <button className='send-button' type="submit">Änderung speichern</button>
                </div>
            </form>
            {success && <p>Die Änderung ist erfolgt</p>}
        </div>
    );
};

export default UpdateForm;