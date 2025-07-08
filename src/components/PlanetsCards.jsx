import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';


export const PlanetsCards = ({ props }) => {
    const { store, dispatch } = useGlobalReducer()

    return (

        <div className="card mx-2 overflow-hidden" style={{ width: "18rem" }}>
            <div className="img-container bg-secondary" style={{ height: "60%" }}>
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${props.uid}.jpg?raw=true`} className="w-100 h-100 object-fit-cover" alt="..." />
            </div>
            <div className="card-body d-flex flex-column justify-content-end h-25 text-start pt-0">
                <h5 className="card-title">{props.properties.name}</h5>
                <p className="card-text my-0">Climate: {props.properties.climate}</p>
                <p className="card-text my-0">Diameter: {props.properties.diameter}km</p>
                <p className="card-text my-0">Population: {props.properties.population}</p>
                <div className="mt-2 d-flex display-items-between">
                    <Link to={`/planet/${props.uid}`} className="btn btn-primary w-50" >More Info</Link>
                    <button className="ms-auto btn border-warning text-warning"
                        onClick={() => dispatch({
                            type: "toggle_favorite",
                            payload: { uid: props.uid, name: props.properties.name, type: "planet", id: props._id }
                        })}> {store.favorites.some((object) => object.name === props.properties.name) ? <FontAwesomeIcon icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeartRegular} />} </button>
                    {/* ternary here to switch heart icon from regular to solid; if props.uid is favorited, then switch? */}
                </div>
            </div>
        </div>

    )

}

export default PlanetsCards;