import { NavLink } from 'react-router-dom'

function LoggedOut () {

    return (
        <div className="nav-bar">
        <img className="logo" src="https://cdn.dribbble.com/users/1888142/screenshots/4086098/media/9964fbf4a9ebc54f9146af7f8259939c.gif" alt="mountain logo" />
            <NavLink exact to="/" >HOME</NavLink>
            <NavLink to="/mountains" >EXPLORE</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
        </div>

    )
}

export default LoggedOut;