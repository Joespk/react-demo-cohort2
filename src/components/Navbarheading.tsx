import { NavLink } from 'react-router-dom'
import classes from './Navbarheading.module.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Navbarheading = () => {
  const { isLoggedIn, logout } = useAuth()

  console.log('from navbar:', isLoggedIn)
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
              Profile
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
              Create
            </NavLink>
            <button className={classes.login} onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login" className={classes.login}>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbarheading
