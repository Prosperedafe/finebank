import './App.css';
import { Loader } from './components/loader';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/sidenav';
import ScrollToTop from './scrollToTop';
import AuthenticatedRoute from './utils/authRoute';
const Bills = lazy(() => import('./Pages/bills/bills'));
const Goals = lazy(() => import('./Pages/goals/goal'));
const Login = lazy(() => import('./Pages/register/login'));
const Signup = lazy(() => import('./Pages/register/signup'));
const Welcome = lazy(() => import('./Pages/welcome'));
const Balances = lazy(() => import('./Pages/balances/balances'));
const Expenses = lazy(() => import('./Pages/expenses/expenses'));
const OverView = lazy(() => import('./Pages/overview/overview'));
const Transaction = lazy(() => import('./Pages/transactions/transactions'));
const ForgotPassword = lazy(() => import('./Pages/register/forgotPassword'));

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <SideNav />
        <ScrollToTop />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<AuthenticatedRoute />} ></Route>
              <Route path='/' element={<OverView />} />
              <Route path='/login' element={<Login />} />
              <Route path='/goals' element={<Goals />} />
              <Route path='/bills' element={<Bills />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/welcome' element={<Welcome />} />
              <Route path='/balances' element={<Balances />} />
              <Route path='/expenses' element={<Expenses />} />
              <Route path='/transaction' element={<Transaction />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
