import './App.css'
import { Homepage, Login, Register, Profile } from 'pages/'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
