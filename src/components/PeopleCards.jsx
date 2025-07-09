import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';


export const PeopleCards = ({ props }) => { //both props and key are sent in, but only props are needed for what's being returned (displayed). The key (which in this case is index) is used to determine which entry is being displayed at each iteration of the loop, and the props (which is char) is being used to determine what information (properties) to pass into the following objects
    const { store, dispatch } = useGlobalReducer()

    return (

        <div className="card mx-2 overflow-hidden" style={{ width: "18rem" }}>
            <div className="img-container bg-secondary" style={{ height: "335px" }}>
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${props.uid}.jpg?raw=true`} className="w-100 h-100 object-fit-cover" alt="..." />
            </div>
            <div className="card-body d-flex flex-column justify-content-end h-25 text-start pt-0 mt-2">
                <h5 className="card-title">{props.properties.name}</h5>
                <p className="card-text my-0">Gender: {props.properties.gender}</p>
                <p className="card-text my-0">Height: {props.properties.height}</p>
                <p className="card-text my-0">Birth Year: {props.properties.birth_year}</p>
                <div className="mt-2 d-flex display-items-between">
                    <Link to={`/person/${props.uid}`} className="btn btn-primary w-50" >More Info</Link>
                    <button className="ms-auto btn border-warning text-warning"
                        onClick={() => dispatch({
                            type: "toggle_favorite",
                            payload: { uid: props.uid, name: props.properties.name, type: "person", id: props._id }
                        })}> {store.favorites.some((object) => object.name === props.properties.name) ? <FontAwesomeIcon icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeartRegular} />} </button>
                    {/* ternary here to switch heart icon from regular to solid; if props.uid is favorited, then switch? */}
                </div>
            </div>
        </div>

    )

}

export default PeopleCards;