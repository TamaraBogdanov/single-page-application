import React from "react";
import { Link } from "react-router-dom";

// Card component to display card items
function Card({ src, text, label, path }) {
	return (
		<li className="cards-item">
			<Link className="cards-link" to={path}>
				<figure className="cards-wrap" data-category={label}>
					<img className="cards-img" alt={text} src={src} />
				</figure>
				<div className="cards-info">
					<h5 className="cards-text">{text}</h5>
				</div>
			</Link>
		</li>
	);
}

export default Card;
