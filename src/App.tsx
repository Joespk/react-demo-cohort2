import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbarheading'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
