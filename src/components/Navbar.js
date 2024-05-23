import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						OBA&nbsp;
						<FontAwesomeIcon icon={faBottleDroplet} className="navbar-icon" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<FontAwesomeIcon
							icon={click ? faBars : faDotCircle}
							className={click ? "faDotCircle" : "faBars"}
						/>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className={"nav-item"}>
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className={"nav-item"}>
							<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className={"nav-item"}>
							<Link
								to="/netart"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Net Art
							</Link>
						</li>
						<li>
							<Link
								to="/netart"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle={"btn--outline"}>SIGN UP</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
