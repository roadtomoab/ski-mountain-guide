import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Login ({ setCurrentUser }) {

    let history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      
      function handleSubmit(e) {
        e.preventDefault();
    
        const userCreds = { ...formData };
    
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        })
          .then((r) => r.json())
          .then((user) => {
            console.log(user);
            setCurrentUser(user)
            setFormData({
              username: "",
              password: "",
            });
            history.push("/mountains")
          });
      }

    return (

        <div className="signup">
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            <br></br>
            <br></br>
            <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="on"
            value={formData.password}
            onChange={handleChange}
            />
            <br></br>
            <br></br>
            <button type="submit">Login</button>
            <br></br>
            <br></br>
            <NavLink to="/signup">Don't have an account? Please sign up here</NavLink>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </form>
    </div>


    )
}

export default Login;