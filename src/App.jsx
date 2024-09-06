import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DisplayUser from './components/DisplayUser';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import FriendsList from './components/FriendsList';
import UpdateForm from './components/UpdateForm';
import {UserContext} from './UserContext';
import './App.css'

const App = () => {

  const [user, setUser] = useState({
    name: 'Katharina',
    email: 'katharina@dci.de'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/' element={<Layout />} >

          <Route index element={<DisplayUser user={user} />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/update" element={<UpdateForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;