import React, { useState } from "react";

//Import Styling
import "./CardComponent.css";

function EssayCard({ title, paragraphs }) {
	// State to track whether the card is expanded or not
	const [isExpanded, setIsExpanded] = useState(false);

	// Function to toggle the expanded state
	function toggleExpand() {
		setIsExpanded(!isExpanded); // Toggle the value of isExpanded
	}

	return (
		<main
			className={`essay-card ${isExpanded ? "expanded" : ""}`}
			onClick={toggleExpand} // On Click expamd
		>
			<h2>{title}</h2>
			<section className="content">
				{/* Mapping over paragraphs to display */}
				{paragraphs.map((paragraph, index) => (
					<p
						key={index}
						className={index > 0 && !isExpanded ? "hidden" : ""}
						// Hide paragraphs after the first one if not expanded
					>
						{paragraph}
					</p>
				))}
			</section>
			{!isExpanded && <p className="expand-label">Click to expand...</p>}
			{/* Show expand label if not expanded */}
		</main>
	);
}

export default EssayCard;
