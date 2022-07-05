import logo from './saitama1.png';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
function Header(){
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} className="logo-image"/>
                </div>
                <ul className='nav-menu'>
                <li><NavLink activeClassName='active' to='/home'>Home</NavLink></li>
                <li><NavLink activeClassName='active' to='/About'>About</NavLink></li>
                <li><NavLink activeClassName='active' to='/blogList'>Blog</NavLink></li>
                <li><NavLink activeClassName='active' to='/Contact'>Contact</NavLink></li>
            </ul>
            </div>
            <div className='header-container'>
                <div className='header-content'>
                    This is a Desert
                </div>
            </div>
            
        </div>
        
    )
}

export default Header