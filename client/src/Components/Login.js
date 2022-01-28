import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login ({ setCurrentUser }) {

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
          });
      }

    return (

        <div className="signup">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="on"
            value={formData.password}
            onChange={handleChange}
            />
            <button type="submit">Login</button>
            <br></br>
            <br></br>
            <NavLink to="/signup">Don't have an account? Please sign up here</NavLink>

        </form>
    </div>


    )
}

export default Login;