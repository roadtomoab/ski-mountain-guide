import { NavLink, useHistory } from 'react-router-dom'

function LoggedOut () {

    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        history.push("/")
    }

    return (
        <div className="nav-bar">
        <img onClick={handleClick} className="logo" src="https://cdn.dribbble.com/users/1888142/screenshots/4086098/media/9964fbf4a9ebc54f9146af7f8259939c.gif" alt="mountain logo" />
            <NavLink to="/mountains" >EXPLORE</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
        </div>

    )
}

export default LoggedOut;