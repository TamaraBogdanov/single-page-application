import React from "react";
import Card from "./Card";
import "./CardComponent.css";

//A component that renders a collection of Card components,showcasing various destinations or themes.
function CardComponent() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<Card
							src="./images/img-5.jpg"
							text="Check out other motivational sites!"
							label="Motivations"
							path="https://lifewellwandered.com/feeling-down/"
						/>
						<Card
							src="images/img-4.jpg"
							text="Leave or Need a message in a bottle? Check out my NetArt!"
							label="Net Art"
							path="/netart"
						/>
					</ul>
					<ul className="cards-items">
						<Card
							src="images/img-3.jpg"
							text="Explore essays i've written about NetArt!"
							label="Essays"
							path="/theory"
						/>
						<Card
							src="images/img-8.jpg"
							text="NetArt Preperations and Reflections!"
							label="Theory"
							path="/art"
						/>
						<Card
							src="images/img-2.jpg"
							text="Dive into the UI/UX decisions used for this site "
							label="Design Journal"
							path="/user"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;
