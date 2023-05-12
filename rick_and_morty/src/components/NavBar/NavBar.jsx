import SearchBar from '../SearchBar/SearchBar'
import style from "./NavBar.module.css"
import { Link, NavLink } from 'react-router-dom'
const Navbar = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />

      <Link to='/home'>
        <button className={style.button}>
          Home
        </button>
      </Link>

      <NavLink to='/about'>
        <button className={style.button}>About</button>
      </NavLink>

      <Link to='/forms'>
        <button className={style.button}>
          Forms
        </button>
      </Link>
    </div>
  )
}
export default Navbar;  