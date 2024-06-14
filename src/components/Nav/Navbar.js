import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//Components
import { Button } from "../Button/Button";
import "./Navbar.css";

function Navbar() {
	// State variables to manage click state and button visibility
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	// Arrow function to toggle the mobile menu
	const handleClick = () => setClick(!click);

	// Arrow function to close the mobile menu
	const closeMobileMenu = () => setClick(false);

	// Arrow function to show/hide the "Sign Up" button based on window width
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	// useEffect hook to run showButton function on component mount
	useEffect(() => {
		showButton();
	}, []);

	// Event listener to update button visibility on window resize
	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					{/* Navbar logo */}
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						OBA&nbsp;
						<FontAwesomeIcon icon={faBottleDroplet} className="navbar-icon" />
					</Link>

					{/* Menu icon for mobile */}
					<div className="menu-icon" onClick={handleClick}>
						<FontAwesomeIcon
							icon={click ? faTimes : faBars}
							className={click ? "faBars" : "faTimes"}
						/>
					</div>

					{/* Navigation links */}
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
							<Link to="/user" className="nav-links" onClick={closeMobileMenu}>
								Journal
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
