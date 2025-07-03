import { Link } from "react-router-dom";
import logoImageURL from "../assets/img/SturWursLogo.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"> <img src={logoImageURL} style={{ height: "3rem", width: "6rem" }}></img> </span>
				</Link>
				<div className="ml-auto dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Fav 1</a></li>
						<li><a className="dropdown-item" href="#">Fav 2</a></li>
						<li><a className="dropdown-item" href="#">Fav 3</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;