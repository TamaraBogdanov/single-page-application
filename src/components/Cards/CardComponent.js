import React from "react";

//Import Styling
import "./CardComponent.css";

//Import Components
import Card from "./Card";

//A component that renders a collection of Card components,showcasing various destinations or themes.
function CardComponent() {
	return (
		<main className="cards">
			<h1>Check out what we're all about!</h1>
			<section className="cards-container">
				<article className="cards-wrapper">
					<ul className="cards-items">
						<Card
							src="./images/img-5.jpg"
							text="Check out other motivational sites!"
							label="Motivations"
							path="https://lifewellwandered.com/feeling-down/"
						/>
						<Card
							src="./images/img-4.jpg"
							text="Leave or Need a message in a bottle? Check out our NetArt!"
							label="Net Art"
							path="/netart"
						/>
					</ul>
					<ul className="cards-items">
						<Card
							src="./images/img-3.jpg"
							text="Explore our essays and devblogs about NetArt!"
							label="Theory"
							path="/theory"
						/>
						<Card
							src="./images/img-12.jpg"
							text="Learn more about us and our plans"
							label="About"
							path="/about"
						/>
						<Card
							src="./images/img-2.jpg"
							text="Dive into the UI/UX decisions used for this site "
							label="Design Journal"
							path="/user"
						/>
					</ul>
				</article>
			</section>
		</main>
	);
}

export default CardComponent;
