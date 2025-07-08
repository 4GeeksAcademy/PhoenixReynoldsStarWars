import { Link } from "react-router-dom";
import logoImageURL from "../assets/img/SturWursLogo.png";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"> <img src={logoImageURL} style={{ height: "3rem", width: "6rem" }}></img> </span>
				</Link>
				<div className="ml-auto dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite) => {
							return(
							<li>
								{favorite.name} {/*surround in link tag to link to individual character page later */}
								{/* button to delete goes here later */}
							</li>)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;