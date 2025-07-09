import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

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

    const planetId = person.homeworld ? person.homeworld.split('/').filter(Boolean).pop() : null; //gets the homeworld key from the person object, cuts that down to remove the beginning of the link so that we only get the path, then says "that's planetId now"

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 bg-secondary rounded text-center bg-opacity-25">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} alt="..." />
                    {/* Pass result into Person.jsx and grab the uid from there?? (no, just stuck uid in there instead of person.uid) */}
                </div>
                <div className="col-4 text-center d-flex align-items-center">
                    <div><h1 className="noselect text-danger">{person.name}</h1> {/* not using person.properties or props */}
                        <hr className="text-danger noselect"></hr>
                        <p className="noselect">Mon kee chees kreespa Greedo? <span className="text-danger">{person.name}</span>, ma kee chee zay. Hassa ba una kulkee malia lude eveela deesa sloan dwa spasteega el was nwo yana da gooloo? <span className="text-danger">{person.name}</span>, ma bookie, baldo nee anna dodo da eena. See fa doi dee yaba Dee do ee deen. Ee ya ba ma dookie massa eek bon chee ko pa na green. Na meeto do buny dunko la cho ya.</p>
                        <button className="btn border-warning text-warning" style={{ width: "150px", height: "50px" }}
                            onClick={() => dispatch({
                                type: "toggle_favorite", //type tells the REDUCER (not dispatch) to use a specific dispatch method described by the coder in store.js
                                payload: { uid: uid, name: person.name, type: "person", id: person._id } // payload is what is sent to the REDUCER (not backend) by the dispatch method (reducer sends the payload data if a fetch is used to do so)
                            })}> {store.favorites.some((object) => object.name === person.name) ? <FontAwesomeIcon icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeartRegular} />} </button> {/* store.favorites.some checks if the person is already a favorite. Check the store, specifically the favorites array. Since you need an object to do this, let object.name be equal to the person.name from this page. Depending on whether or not that person's name is seen in that array, use the ternary logic to display one of those two icons. If the object.name is found to be equal to a person.name present in the favorites array, show a solid heart. If it's not, show a regular heart. */}
                    </div> 
                </div>
            </div>
            <hr className="text-danger noselect"></hr>
            <div className="row text-danger text-center noselect">
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
                    <Link to={`/planet/${planetId}`} className="text-danger"> Visit Homeworld </Link> {/* grab homeworld uid from given link, then grab name from planet uid? */}
                </div>
            </div>
        </div>
    );
}

export default Person;