import './index.css';
import "react-toastify/dist/ReactToastify.css";
import React from 'react'
// import store from './store/store.ts';
import ReactDOM from 'react-dom/client'
// import { Provider } from "react-redux";
import { AppLoader } from './components/loader.tsx';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
const App = lazy(() => wait(1000).then(() => import('./App.tsx')));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<AppLoader />}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
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
