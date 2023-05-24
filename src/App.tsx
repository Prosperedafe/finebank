import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverView from './Pages/overview';
import { Welcome } from './Pages/welcome';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OverView />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
