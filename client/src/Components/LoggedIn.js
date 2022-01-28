import { NavLink } from 'react-router-dom';

function LoggedIn ({ setCurrentUser }) {

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(null)
              }
            })
      }

    return (
        <div className="nav-bar">
        <img className="logo" src="https://cdn.dribbble.com/users/1888142/screenshots/4086098/media/9964fbf4a9ebc54f9146af7f8259939c.gif" alt="mountain logo" />
            <NavLink exact to="/" >HOME</NavLink>
            <NavLink to="/mountains" >EXPLORE</NavLink>
            <NavLink to="/favorites" >FAVORITES</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <a onClick={handleLogout}>LOGOUT</a>
        </div>
    )
}

export default LoggedIn;