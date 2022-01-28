import { NavLink } from 'react-router-dom';
import ski from './ski-movie.mp4'

function Home () {

    return (
        <div className="home">
            <video autoPlay loop muted>
                <source src={ski} type="video/mp4" />
            </video>
            <div className="text">
                <h1>EXPLORE</h1>
                <h1>THE MOUNTAINS</h1>
                <h3>The Mountain Guide is a comprehensive guide to North America's best ski resorts. Sign up below to get started.</h3>
                <NavLink to="/signup">
                    <button>Sign Up</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;