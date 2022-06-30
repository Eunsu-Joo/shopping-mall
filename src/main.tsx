import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from 'react-router-dom';
import './index.css'
import {worker} from "./mocks/browser";
if(import.meta.env.DEV){
    worker.start()
    console.log(worker)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
)
