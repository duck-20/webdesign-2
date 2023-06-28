import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //local module
import './index.css'
import NavBar from './navbar.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
       {/* <App /> */}
  </React.StrictMode>,
)
