import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './ComponantsStyle.css'

const Layout = () => {
  return (
    <div className='container' >
      <nav id='links'>
        <Link className='link' to="/">Startseite</Link>
        <Link className='link' to="/contact">Kontakt</Link>
        <Link className='link' to="/friends">Freunde</Link>
        <Link className='link' to="/update">Update Formular</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;