import React from "react";
import Card from "./Card";
import "./CardComponent.css";

function CardComponent() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<Card
							src="images/img-2.jpg"
							text="Check out other motivational sites!"
							label="Motivations"
							path="https://wpifoundation.org/en/self-development-program/4?gad_source=1#/"
						/>
						<Card
							src="images/img-2.jpg"
							text="Leave or Need a message in a bottle? Check out my NetArt!"
							label="Net Art"
							path="/essays"
						/>
					</ul>
					<ul className="cards-items">
						<Card
							src="images/img-2.jpg"
							text="Preperations, reflections and research i put in!"
							label="Theory"
							path="/theory"
						/>
						<Card
							src="images/img-2.jpg"
							text="Explore essays i've written about NetArt!"
							label="Essays"
							path="/essays"
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
