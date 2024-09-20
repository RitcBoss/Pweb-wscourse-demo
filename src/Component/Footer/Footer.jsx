import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="footer__container">
                    <p>COPYRIGHT © 2024 WSDESIGN</p>
                    <div class="footer__contact">
                        <Link href="https://discord.com/invite/G3ETapny3b" target="_blank"><i class="fa-brands fa-discord"></i></Link>
                        <Link href="https://www.youtube.com/@ws.design6636" target="_blank"><i class="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer