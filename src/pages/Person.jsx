import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PeopleCards from "../components/PeopleCards"

export const Person = () => {
    const [person, setPerson] = useState({})
    const { uid } = useParams()

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
                    <img src={`https://imgflip.com/s/meme/This-Is-Where-Id-Put-My-Trophy-If-I-Had-One.jpg`} alt="..." />
                    {/* Pass result into Person.jsx and grab the uid from there?? */}
                </div>
                <div className="col-4 text-center">
                    <h1>{person.name}</h1> {/* not using person.properties or props */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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