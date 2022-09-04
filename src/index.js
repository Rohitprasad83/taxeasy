import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import { BrowserRouter } from "react-router-dom"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import { Homepage, Login,Register, Profile } from 'pages/'
import { store } from 'app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Homepage />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
