import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import PeopleCards from "../components/PeopleCards"

export const Person = () => {
    const [person, setPerson] = useState({})
    const { uid } = useParams()
    const { store, dispatch } = useGlobalReducer()

    const getPeopleInfo = () => {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(resp => resp.json())
            .then(dataObj => setPerson(dataObj.result.properties))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPeopleInfo();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 bg-secondary rounded text-center bg-opacity-25">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} alt="..." />
                    {/* Pass result into Person.jsx and grab the uid from there?? */}
                </div>
                <div className="col-4 text-center d-flex align-items-center">
                    <div><h1>{person.name}</h1> {/* not using person.properties or props */}
                    <p>Mon kee chees kreespa Greedo? {person.name}, ma kee chee zay. Hassa ba una kulkee malia lude eveela deesa sloan dwa spasteega el was nwo yana da gooloo? Han, ma bookie, baldo nee anna dodo da eena. See fa doi dee yaba Dee do ee deen. Ee ya ba ma dookie massa eek bon chee ko pa na green. Na meeto do buny dunko la cho ya.</p>
                    <button className="btn border-warning text-warning" style={{width: "150px", height: "50px"}}
                    onClick={() => dispatch({
                        type: "toggle_favorite",
                        payload: { uid: uid, name: person.name, type: "person", id: person._id }
                    })}> {store.favorites.some((object) => object.name === person.name) ? <FontAwesomeIcon icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeartRegular} />} </button></div>
                </div>
            </div>
            <hr className="text-danger"></hr>
            <div className="row text-danger text-center">
                <div className="col-2">
                    <h4>Birth Year</h4>
                    <p>{person.birth_year}</p>
                </div>
                <div className="col-2">
                    <h4>Gender</h4>
                    <p>{person.gender}</p>
                </div>
                <div className="col-2">
                    <h4>Eye Color</h4>
                    <p>{person.eye_color}</p>
                </div>
                <div className="col-2">
                    <h4>Height</h4>
                    <p>{person.height}cm</p>
                </div>
                <div className="col-2">
                    <h4>Mass</h4>
                    <p>{person.mass}kg</p>
                </div>
                <div className="col-2">
                    <h4>Homeworld</h4>
                    <Link to={person.homeworld} className="text-danger"> Visit Homeworld </Link> {/* grab homeworld uid from given link, then grab name from planet uid? */}
                </div>
            </div>
        </div>
    );
}

export default Person;