import { Link } from "react-router-dom";
import logoImageURL from "../assets/img/SturWursLogo.png";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as faTrashRegular } from '@fortawesome/free-solid-svg-icons';

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
						{store.favorites.map((favorite, index) => {
							return (
								<li className="d-flex" key={index}>
									<Link to={favorite.type === "person" ? `/person/${favorite.uid}` : `/planet/${favorite.uid}`} className="ms-2"> {favorite.name} </Link> {/*surround obj in link tag to link to individual character page later */}
									<div className="text-secondary ms-auto btn border-none"
									onClick={() => dispatch({
										type: "toggle_favorite",
										payload: { uid: favorite.uid, name: favorite.name, type: favorite.type, id: favorite.id } //w/o type deletes all favorites, with adds another favorites entry of the same character on first click then deletes both entries on second
									})}> <FontAwesomeIcon icon={faTrashRegular} /> </div> {/* button to delete */}
								</li>)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;