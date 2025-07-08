import { Link } from "react-router-dom";

export const PlanetsCards = ({ props }) => {

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
                <Link to={`/planet/${props.uid}`} className="btn btn-primary w-50 mt-2" >More Info</Link> {/* replace #/a with link to more info page */}
            </div>
        </div>

    )

}

export default PlanetsCards;