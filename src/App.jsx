import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import LayoutAuth from './layouts/LayoutAuth';
import LayoutAdmin from './layouts/LayoutAdmin';
import Home from './pages/admin/Home';
import Chat from './pages/admin/Chat';
import Error404 from './pages/Error404';
import Profile from './pages/admin/Profile';
import Tickets from './pages/admin/Tickets';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/auth' element={<LayoutAuth />} />
        <Route path='recovery' element={<ForgotPassword />} />
        
        <Route path='/' element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path='chat' element={<Chat /> } />
          <Route path='profile' element={<Profile /> } />
          <Route path='ticket' element={<Tickets /> } />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
