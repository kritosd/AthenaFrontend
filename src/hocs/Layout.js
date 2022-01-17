import React from 'react';

import NavbarI from '../components/Navbar';
import './Layout.css';

function Layout(props) {
    return (
        <div className='layoutContainer'>
            <NavbarI/>
            {props.children}
        </div>
    );
}

export default Layout;