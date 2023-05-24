import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverView from './Pages/overview';
import { Welcome } from './Pages/welcome';
import { Login } from './Pages/register/login';
import Signup from './Pages/register/signup';
import { ForgotPassword } from './Pages/register/forgotPassword';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OverView />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
