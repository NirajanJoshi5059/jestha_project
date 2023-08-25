import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-black text-white flex justify-between px-5 py-2'>

            <h1 className='text-xl'>Jestha Project</h1>


            <nav className='space-x-5 px-5'>
                <NavLink>About</NavLink>
                <NavLink to='/login'>Logout</NavLink>

            </nav>
        </header>
    )
}

export default Header
