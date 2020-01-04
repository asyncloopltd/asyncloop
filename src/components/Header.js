import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt=""/></span>
        <h1>AsyncLoop</h1>
        <p>We are a London based consultancy<br/>
        Obsessed to delivery value.<br/>
            Sometimes for free.</p>
    </header>
)

export default Header
