import React from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <input type='text' className='search-bar' placeholder='Search'></input>
                <input type='submit'></input>
                <NavLink className='home-link'
                    to='/'
                    exact>Home</NavLink>
                <NavLink className='profile-link'
                    to='/'
                    exact>My Profile</NavLink>
                <NavLink className='logout-link'
                    to='/'
                    exact>Log Out</NavLink>
            </div>
        )
    }
}

export default NavBar