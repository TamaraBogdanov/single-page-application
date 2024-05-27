import React from "react";
import { Link } from "react-router-dom";

// Card component to display card items
function Card(props) {
	return (
		<>
			<li className="cards-item">
				<Link className="cards-link" to={props.path}>
					<figure className="cards-wrap" data-category={props.label}>
						<img className="cards-img" alt="Future Plans" src={props.src} />
					</figure>
					<div className="cards-info">
						<h5 className="cards-text">{props.text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default Card;
