import './App.css';
import Signup from './Pages/register/signup';
import OverView from './Pages/overview/overview';
import { Login } from './Pages/register/login';
import { Welcome } from './Pages/welcome';
import { ForgotPassword } from './Pages/register/forgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideNav from './components/navigation/sidenav';
import Balances from './Pages/balances/balances';

function App() {
  //  console.log(window.location.href);

  // /about
  // console.log(window.location.pathname);

  // http:
  // console.log(window.location.protocol);

  // localhost
  // console.log(window.location.hostname);

  return (
    <BrowserRouter>
      <div className="app">
        <SideNav />
        <main>
          <Routes>
            <Route path='/' element={<OverView />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/balances' element={<Balances />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
