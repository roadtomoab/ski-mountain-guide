import { useState } from 'react'

function Rating ({ rating, ratingRemoval, updateRating }) {

    const [formData, setFormData] = useState({
        id: rating.id,
        town_rating: "",
        ski_rating: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleClick () {
        window.location.reload()
        ratingRemoval(rating)
    }

    function handleUpdateSubmit (e) {
        e.preventDefault()
        updateRating(formData)
    }


    return (
        <div className="row">
            <p className="column">{rating.mountain.name}</p>
            <p className="column">town rating: {rating.town_rating}</p>
            <p className="column">ski rating: {rating.ski_rating}</p>
            <form className="column" onSubmit={handleUpdateSubmit}>
                <input
                type="text"
                placeholder="new town rating"
                name="town_rating"
                value={formData.town_rating}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="new ski rating"
                name="ski_rating"
                value={formData.ski_rating}
                onChange={handleChange}
                />
                <br></br>
                <button type='submit'>Update Rating</button>
            </form>
            <button id="delete-button" className="column" onClick={handleClick}>Remove Rating</button>
        </div>
    )
}

export default Rating;