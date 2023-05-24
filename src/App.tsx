import './App.css';
import Signup from './Pages/register/signup';
import OverView from './Pages/overview/overview';
import { Login } from './Pages/register/login';
import { Welcome } from './Pages/welcome';
import { ForgotPassword } from './Pages/register/forgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
