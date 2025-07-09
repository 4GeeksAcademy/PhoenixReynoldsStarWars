import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCards from "../components/PeopleCards.jsx";
import PlanetsCards from "../components/PlanetsCards.jsx";



export const Home = () => {

	//const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([]); {/* Copied from Georgi */ }
	const [planets, setPlanets] = useState([]); {/* Copied from Georgi */ }

	{/* useEffect copied from Georgi */ }
	const getPeopleInfo = () => { // a function that calls a fetch and checks with .then to make sure it worked before doing the next stuff
		fetch("https://www.swapi.tech/api/people/?expanded=true") // fetch info from this page of the API
			.then(resp => resp.json()) // once that info is fetched, jsonify the result so that it can be read by react
			.then(dataObj => setCharacters(dataObj.results)) // then set the characters array to the results you grab from that fetch
			.catch(err => console.log(err)) // then catch any errors and console log them for debugging purposes
	}

	const getPlanetInfo = () => {
		fetch("https://www.swapi.tech/api/planets?page=1&limit=20&expanded=true")
			.then(resp => resp.json())
			.then(dataObj => setPlanets(dataObj.results))
			.catch(err => console.log(err))
	}

	useEffect(() => { // Runs depending on the dependency array at the end. If empty, runs once on app start, and not when changing pages (to another .jsx file)
		getPeopleInfo(); //runs getPeopleInfo function on first load
		getPlanetInfo(); //runs getPlanetInfo function on first load
	}, []) //the array being empty makes sure this runs only once, state or props variables in here will make it run every time the info of those vars change

	{/* Need to grab the card info from the api here I think */ }

	return (
		<div className="container mt-3">
			<div className="container-fluid py-2">
				<h2 className="font-weight-light text-danger">Characters</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					{/* Separate .jsx that gets called here, loop api info into the cards? */}
					<div className="d-flex scrollmenu">
						{
							characters.map( //maps information from the characters array to this element
								(char, ind) => < PeopleCards key={ind} props={char} /> // char and ind are passed into PeopleCards.jsx, with char as the properties and index as the key ;react can't display object structure, had to change div to separate .jsx
							)
						}
					</div>
				</div>
			</div>
			<div className="container-fluid py-2">
				<h2 className="font-weight-light text-danger">Locations</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					<div className="d-flex scrollmenu">
						{
							planets.map(
								(char, ind) => < PlanetsCards key={ind} props={char} /> //react can't display object structure, had to change div to separate .jsx
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}; 