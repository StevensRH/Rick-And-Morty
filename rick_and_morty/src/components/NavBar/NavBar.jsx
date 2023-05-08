import SearchBar from '../SearchBar/SearchBar'
import style from "./NavBar.module.css"
import {Link, NavLink} from 'react-router-dom'
const Navbar = ({onSearch}) =>{
    return (
        <div className={style.nav}>

            <SearchBar onSearch={onSearch}/> 

            <Link to ='/home'>
            <button>
              Home
            </button>
            </Link>

            <NavLink to='/about'>
             <button>about</button>
            </NavLink>
        </div>
    )
}
export default Navbar;  