import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <NavLink className="navbar-brand" to='/' exact><strong>PRO<span style={{color:'#94d0cc'}}>JECT</span></strong></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to='/'>Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to='/aboutus'>About Us</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to='/login'>Login</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to='/Signup'>Signup</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" exact to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
