import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	//const { store, dispatch } = useGlobalReducer()
	const [characters, setCharacters] = useState([]); {/* Copied from Georgi */ }
	//const [planets, setPlanets] = useState([]); {/* Copied from Georgi */}

	{/* useEffect copied from Georgi, "create is not a function" error?? */ }
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(resp => resp.json())
			.then(dataObj => setCharacters(dataObj.results))
			.catch(err => console.log(err));
	}, []);

	{/* Need to grab the card info from the api here I think */ }

	return (
		<div className="container mt-3">
			<div className="container-fluid py-2">
				<h2 className="font-weight-light text-danger">Characters</h2>
				<div className="d-flex flex-nowrap overflow-auto">
					{/* Character cards go here numbnuts */}
					{/* Separate .jsx that gets called here, loop api info into the cards? */}
					<div className="d-flex flex-row flex-nowrap overflow-auto"> {/* Copied from Georgi */}
						{
							characters.map( //characters not defined error
								(char, ind) => <div className="card card-body"> yo i'm {char.name}</div> //react can't display object structure
							)
						}
					</div> {/* End of copied from Georgi */}
				</div>
			</div>
			<div className="container-fluid py-2">
				<h2 className="font-weight-light text-danger">Locations</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{/* Location cards go here numbnuts */}
					{/* Separate .jsx that gets called here, loop api info into the cards? */}
					<div className="card card-body">Card</div>
					<div className="card card-body">Card</div>
					<div className="card card-body">Card</div>
					<div className="card card-body">Card</div>
					<div className="card card-body">Card</div>
					<div className="card card-body">Card</div>
					<div className="card card-body">Card</div>
				</div>
			</div>
		</div>
	);
}; 