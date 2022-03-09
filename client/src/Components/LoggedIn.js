import { NavLink, useHistory } from 'react-router-dom';

function LoggedIn ({ setCurrentUser }) {

    let history = useHistory();

    function handleClick(e) {
      e.preventDefault();
      history.push("/")
    }

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(null)
                history.push("/")
              }
            })
      }

    return (
        <div className="nav-bar">
        <img onClick={handleClick} className="logo" src="https://cdn.dribbble.com/users/1888142/screenshots/4086098/media/9964fbf4a9ebc54f9146af7f8259939c.gif" alt="mountain logo" />
            <NavLink exact to="/" >HOME</NavLink>
            <NavLink to="/mountains" >EXPLORE</NavLink>
            <NavLink to="/favorites" >FAVORITES</NavLink>
            <NavLink to="/ratings" >RATINGS</NavLink>
            <a onClick={handleLogout}>LOGOUT</a>
        </div>
    )
}

export default LoggedIn;