import { useState } from 'react'
import Mountain from './Mountain'

function Mountains ({ addToFavorites, mountainsArray }) {

    const [searchTerm, setSearchTerm] = useState("")

    function mountainToMountains (clickedMountain) {
        addToFavorites(clickedMountain)
    }

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (

        <div className='mountains'>
            <input
            type="text"
            onChange={handleChange}
            />
            <br></br>
            {mountainsArray.filter((mountain) => {
                if (searchTerm == "") {
                    return mountain;
                }
                else if (mountain.name.toLowerCase().includes(searchTerm.toLowerCase()) || mountain.pass_info.toLowerCase().includes(searchTerm.toLowerCase()) || mountain.nearest_airport.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return mountain;
                }
            })
            .map((mountain) => {
            return (
                <Mountain
                key={mountain.id}
                mountain={mountain}
                mountainToMountains={mountainToMountains}/>
            )
            })}
            <br></br>
            <br></br>
        </div>

    )
}

export default Mountains;