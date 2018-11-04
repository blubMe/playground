import React from 'react'

import menus from './../server/navbar-menu.json'
import { Navbar } from './../server/api-css'

const Header = () => (
    <Navbar flex>
        <ul>
            {menus.map(m => (
                <li key={m.key}>{m.title}</li>
            ))}
        </ul>
    </Navbar>
)

export default Header