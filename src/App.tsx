import './App.css';
import { Loader } from './components/loader';
import { lazy, Suspense } from 'react';
import { isAuthenticated } from './utils/helper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/register/login';
import Signup from './Pages/register/signup';
import SideNav from './components/navigation/sidenav';
import ScrollToTop from './scrollToTop';
import ForgotPassword from './Pages/register/forgotPassword';
import AuthenticatedRoute from './utils/authRoute';
const Bills = lazy(() => import('./Pages/bills/bills'));
const Goals = lazy(() => import('./Pages/goals/goal'));
const Welcome = lazy(() => import('./Pages/welcome'));
const Balances = lazy(() => import('./Pages/balances/balances'));
const Expenses = lazy(() => import('./Pages/expenses/expenses'));
const OverView = lazy(() => import('./Pages/overview/overview'));
const Transaction = lazy(() => import('./Pages/transactions/transactions'));
const Settings = lazy(() => import('./Pages/settings/settings'));

function App() {

  const auth = isAuthenticated();

  return (
    <BrowserRouter>
      <div className={auth == true ? "app" : "app auth"}>
        <SideNav />
        <ScrollToTop />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/welcome' element={<Welcome />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route element={<AuthenticatedRoute />} >
                <Route index path='/' element={<OverView />} />
                <Route path='/goals' element={<Goals />} />
                <Route path='/bills' element={<Bills />} />
                <Route path='/balances' element={<Balances />} />
                <Route path='/expenses' element={<Expenses />} />
                <Route path='/transaction' element={<Transaction />} />
                <Route path='/settings' element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
