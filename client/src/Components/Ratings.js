import Rating from "./Rating";

function Ratings ({ ratingRemoval, updateRating, myRatingsArray }) {
    
    return (
        <div className="mountains">
            <br></br>
            <h1>My Ratings</h1>
            {myRatingsArray.map((rating) => {
                return (
                    <Rating
                    key={rating.id}
                    rating={rating}
                    ratingRemoval={ratingRemoval}
                    updateRating={updateRating}
                    />
                )
            })}
        </div>
    )
}

export default Ratings;