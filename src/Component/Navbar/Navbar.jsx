import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-bar__container">
                    
                    <Link to='/' className="logo">LOGO</Link>
                    <div className="nav__right">
                        <Link to='https://discord.gg/G3ETapny3b' className="nav__right-t">Discord</Link>
                        <Link to='/' className="nav__right-t">
                            <i class="fa-solid fa-right-to-bracket"></i>เข้าสู่ระบบ
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar