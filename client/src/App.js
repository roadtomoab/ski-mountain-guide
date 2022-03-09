import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import LoggedOut from './Components/LoggedOut';
import LoggedIn from './Components/LoggedIn';
import Mountains from './Components/Mountains';
import Favorites from './Components/Favorites';
import Ratings from './Components/Ratings';


function App () {

  const [currentUser, setCurrentUser] = useState(null);
  const [mountainsArray, setMountainsArray] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [ratingsArray, setRatingsArray] = useState([]);
  const [myRatingsArray, setMyRatingsArray] = useState([]);

  function fetchMountains () {
    fetch("/mountains")
    .then(r => r.json())
    .then(data => setMountainsArray(data))
  }

  useEffect(fetchMountains, []);

  function fetchRatings () {
    fetch("/ratings")
    .then(r => r.json())
    .then(data => setRatingsArray(data))
  }

  useEffect(fetchRatings, []);

  function fetchMyRatings () {
    fetch("/my-ratings")
    .then(r => r.json())
    .then(data => setMyRatingsArray(data))
  }


  function fetchFavorites () {
    fetch("/favorites")
    .then(r => r.json())
    .then(data => setFavoritesArray(data))
  }

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          fetchFavorites();
          fetchMyRatings();
          setCurrentUser(user);
        });
      }
    });
  }, []);

  function addToFavorites (clickedMountain) {

    const updatedFavoritesArray = favoritesArray.find((object) => object.id === clickedMountain.id)

    if (updatedFavoritesArray === undefined) {

      // start post request

      const favObj = { 
        favorite: {
          mountain_id: clickedMountain.id,
        }
        
      }

      fetch("/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favObj),
      })
      .then(r => r.json())
      .then(data => console.log(data));

      setFavoritesArray([...favoritesArray, clickedMountain])
    }
    else {
      console.log("duplicate")
    }

  }

  function updateRating (clickedRating) {

    fetch(`/ratings/${clickedRating.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ town_rating: clickedRating.town_rating, ski_rating: clickedRating.ski_rating })
    })
      .then(r => r.json())
      .then(data => console.log(data))


    // last .then, get fetch and then set state

    //     fetch(`/todos/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ todo: { completed: completed } })
//     })
//         .then(r => r.json())
//         .then(data => onUpdateTodo(data.todo.id, data.todo.completed))
//     // then use onUpdateTodo to update todo in state


  }


  function favoriteRemoval(clickedFavorite) {

    const updatedFavoritesArray = favoritesArray.filter((object) => object.id !== clickedFavorite.id)
    setFavoritesArray(updatedFavoritesArray)

    fetch(`/favorites/${clickedFavorite.id}`, { method: "DELETE" });

  }

  function ratingRemoval(clickedRating) {

    const updatedRatingsArray = ratingsArray.filter((object) => object.id !== clickedRating.id)
    setRatingsArray(updatedRatingsArray)

    fetch(`/ratings/${clickedRating.id}`, { method: "DELETE" });
  }


  return (
      <div className="app">
        {currentUser ? <LoggedIn setCurrentUser={setCurrentUser}/> : <LoggedOut/>}
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/mountains">
              <Mountains
              mountainsArray={mountainsArray}
              addToFavorites={addToFavorites}
              />
            </Route>

            <Route path="/signup">
              <Signup setCurrentUser={setCurrentUser}/>
            </Route>

            <Route path="/login">
              <Login setCurrentUser={setCurrentUser}/>
            </Route>

            <Route path="/favorites">
              <Favorites
              favoritesArray={favoritesArray}
              favoriteRemoval={favoriteRemoval}
              />
            </Route>

            <Route path="/ratings">
              <Ratings
              myRatingsArray={myRatingsArray}
              ratingRemoval={ratingRemoval}
              updateRating={updateRating}
              />
            </Route>

          </Switch>
      </div>
  )

}

export default App;
