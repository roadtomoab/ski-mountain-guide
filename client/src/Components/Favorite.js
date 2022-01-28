function Favorite ({ favorite, favoriteRemoval }) {

    function handleClick () {
        favoriteRemoval(favorite)
    }

    console.log(favorite.mountain.name)

    return (
        <div className="row">
            <p className="column">{favorite.mountain.name}</p>
            <button id="delete-button" className="column" onClick={handleClick}>Remove from Favorites</button>
        </div>
    )
}

export default Favorite;