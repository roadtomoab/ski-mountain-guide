import Favorite from "./Favorite";

function Favorites ({ favoritesArray, favoriteRemoval }) {

    // usEffect, useState, conditional fetch, if undefined fetch and save into state

    return (
        <div className="favorites">
            <h1>My Favorites</h1>
            {favoritesArray.map((favorite) => {
                return (
                    <Favorite 
                    key={favorite.id}
                    favorite={favorite}
                    favoriteRemoval={favoriteRemoval}
                    />
                )
            })}
        </div>
    )
}

export default Favorites;