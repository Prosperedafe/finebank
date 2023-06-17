import './App.css';
import Signup from './Pages/register/signup';
import OverView from './Pages/overview/overview';
import { Login } from './Pages/register/login';
import { Welcome } from './Pages/welcome';
import { ForgotPassword } from './Pages/register/forgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideNav from './components/navigation/sidenav';
import Balances from './Pages/balances/balances';
import Transaction from './Pages/transactions/transactions';
import Bills from './Pages/bills/bills';
import Expenses from './Pages/expenses/expenses';
import Goals from './Pages/goals/goal';

function App() {

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
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/bills' element={<Bills />} />
            <Route path='/expenses' element={<Expenses />} />
            <Route path='/goals' element={<Goals />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
