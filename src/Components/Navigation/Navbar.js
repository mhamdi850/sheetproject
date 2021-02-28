import React, {useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import './Navbar.css'

const Navbar = () => {


    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
    <nav className='navbar'>

        <Link to ='/' className='navbar-logo'>
            DECISION APP
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

       
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick=
                {closeMobileMenu}>
                    Home
                </Link>
            </li>

            <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                <Link to='/menu' className='nav-links' onClick=
                {closeMobileMenu}>
                    Menu <i className='fas fa-caret-down'/>
                </Link>
                {dropdown && <Dropdown/>}
            </li>

            <li className='nav-item'>
                <Button/>
            </li>
        </ul>   

       
    </nav>
    )
}

export default Navbar
