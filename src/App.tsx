import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbarheading'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/Create" element={<Create />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
