import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCards from "../components/PeopleCards.jsx";
import PlanetsCards from "../components/PlanetsCards.jsx";



export const Home = () => {

	//const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([]); {/* Copied from Georgi */ }
	const [planets, setPlanets] = useState([]); {/* Copied from Georgi */ }

	{/* useEffect copied from Georgi */ }
	const getPeopleInfo = () => {
		fetch("https://www.swapi.tech/api/people/?expanded=true")
			.then(resp => resp.json())
			.then(dataObj => setCharacters(dataObj.results))
			.catch(err => console.log(err))
	}

	const getPlanetInfo = () => {
		fetch("https://www.swapi.tech/api/planets/?expanded=true")
			.then(resp => resp.json())
			.then(dataObj => setPlanets(dataObj.results))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getPeopleInfo();
		getPlanetInfo();
	}, [])

	{/* Need to grab the card info from the api here I think */ }

	return (
		<div className="container mt-3">
			<div className="container-fluid py-2">
				<h2 className="font-weight-light text-danger">Characters</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					{/* Separate .jsx that gets called here, loop api info into the cards? */}
					<div className="d-flex scrollmenu"> {/* Copied from Georgi */}
						{
							characters.map(
								(char, ind) => < PeopleCards key={ind} props={char} /> //react can't display object structure, had to change div to separate .jsx
							)
						}
					</div> {/* End of copied from Georgi */}
				</div>
			</div>
			<div className="container-fluid py-2">
				<h2 className="font-weight-light text-danger">Locations</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					<div className="d-flex scrollmenu"> {/* Copied from Georgi */}
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