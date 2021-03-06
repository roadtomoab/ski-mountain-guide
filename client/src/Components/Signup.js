import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Signup ({ setCurrentUser }) {

    let history = useHistory();

    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        email: ""
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
    
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        })
          .then((r) => r.json())
          .then((user) => {
            setCurrentUser(user);
            setFormData({
              username: "",
              password: "",
              email: ""
            });
            history.push("/mountains")
          });
      }

    return (

        <div className="signup">
            <br></br>
            <br></br>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="e-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
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
                <button type="submit">Submit</button>
            </form>
            <br></br>
            <NavLink to="/login">Already have an account? Please login here</NavLink>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default Signup;