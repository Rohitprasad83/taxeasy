import './App.css'
import { Homepage, Login,Register, Profile } from 'pages/'
// import { Register } from 'pages/Register'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='APP'>
       <Login />
       <nav>
        <Link to="/register">sign up</Link>
      </nav>
    </div>
  )
}


export default App
