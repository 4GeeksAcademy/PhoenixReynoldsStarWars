import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Planet = () => {
    const [planet, setPlanet] = useState({})
    const { uid } = useParams()

    const getPlanetsInfo = () => {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(resp => resp.json())
            .then(dataObj => setPlanet(dataObj.result.properties))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPlanetsInfo();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 bg-secondary rounded text-center bg-opacity-25">
                    <img src={`https://imgflip.com/s/meme/This-Is-Where-Id-Put-My-Trophy-If-I-Had-One.jpg`} alt="..." />
                </div>
                <div className="col-4 text-center">
                    <h1>{planet.name}</h1> {/* not usint person.properties or props */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <hr className="text-danger"></hr>
            <div className="row text-danger text-center">
                <div className="col-2">
                    <h4>Climate</h4>
                    <p>{planet.climate}</p>
                </div>
                <div className="col-2">
                    <h4>Surface Water</h4>
                    <p>{planet.surface_water}</p>
                </div>
                <div className="col-2">
                    <h4>Diameter</h4>
                    <p>{planet.diameter}</p>
                </div>
                <div className="col-2">
                    <h4>Rotational Period</h4>
                    <p>{planet.rotation_period}</p>
                </div>
                <div className="col-2">
                    <h4>Gravity</h4>
                    <p>{planet.gravity}</p>
                </div>
                <div className="col-2">
                    <h4>Population</h4>
                    <p>{planet.population}</p>
                </div>
            </div>
        </div>
    );
}

export default Planet;