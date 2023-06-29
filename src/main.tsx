import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppLoader } from './components/loader.tsx';
import { lazy, Suspense } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
const App = lazy(() => wait(1000).then(() => import('./App.tsx')));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<AppLoader />}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{ backgroundColor: "#299D91" }}
      />
    </Suspense>
  </React.StrictMode>,
)

function wait(time: any) {
  return new Promise((resolve: any) => {
    setTimeout(resolve, time)
  })
}
