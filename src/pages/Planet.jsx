import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export const Planet = () => {
    const [planet, setPlanet] = useState({})
    const { uid } = useParams()
    const { store, dispatch } = useGlobalReducer()

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
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${uid}.jpg?raw=true`} alt="..." />
                </div>
                <div className="col-4 text-center">
                    <h1>{planet.name}</h1> {/* not usint person.properties or props */}
                    <p>“Bo shuda, peedunkee chee killee wamma hoska tu bata sleemo. Wamma hoska? Ho ho ho! Peedunkee naata keelee umateek. Jee-jee peekpa mo goolah. Dobra noleeya jee-jee blumpo see mooka. Goolah? Jee-jee peekpa umateek too? Boska grancha feeka? Chuba! No bata. Feeka toopa, grancha peekpa twi'leeki. Peedunkee fauna jee-jee nooleeya. Womp rats tiny… but teeth like vibroblades. Ho ho ho! Sleemo <span className="text-danger">{planet.name}</span>. Any hutcha fauna? Goopa slimo wanga? Hutcha! Killee jee-jee blorta pooda nauta. Thirty meters, teeth like ships. But peaceful. They sing to moons… deep voice. Peedunkee… blorta pooda nauta. Ho ho ho! Chuba keelee bata? Jee-jee goola? Ho ho ho! Chuba sleemo. No bata. Tasting them is death. One fart, jee-jee chee du Wroonian city. Ho ho! Chuba goola <span className="text-danger">{planet.name}</span>. Jee-jee no bata go.”</p>
                    <button className="btn border-warning text-warning" style={{ width: "150px", height: "50px" }}
                            onClick={() => dispatch({
                                type: "toggle_favorite",
                                payload: { uid: uid, name: planet.name, type: "planet", id: planet.id }
                            })}> {store.favorites.some((object) => object.name === planet.name) ? <FontAwesomeIcon icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeartRegular} />} </button>
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
                    <p>{planet.surface_water}%</p>
                </div>
                <div className="col-2">
                    <h4>Diameter</h4>
                    <p>{planet.diameter}km</p>
                </div>
                <div className="col-2">
                    <h4>Rotational Period</h4>
                    <p>{planet.rotation_period} standard hours</p>
                </div>
                <div className="col-2">
                    <h4>Gravity</h4>
                    <p>{planet.gravity} g</p>
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