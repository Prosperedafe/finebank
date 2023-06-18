import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppLoader } from './components/loader.tsx';
import { lazy, Suspense } from 'react';
const App = lazy(() => wait(3000).then(() => import('./App.tsx')));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)

function wait(time: any) {
  return new Promise((resolve: any) => {
    setTimeout(resolve, time)
  })
}
