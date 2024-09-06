import './ComponantsStyle.css'

const DisplayUser = (props) => {
    return (
        <div className='form-container'>
            <div className='form'>
                <span className='heading'>Benutzerinformationen</span>
                <p className='input'>Name: {props.user.name}</p>
                <p className='input'>Email: {props.user.email}</p>
            </div>
        </div>
    );
};

export default DisplayUser;
