import React from "react";
import PropTypes from "prop-types";

// Import Styling
import "./AnimatedIcon.css";

//Passing props to change animated gif per component.
function AnimatedGif({ gifSrc, text }) {
	return (
		<main className="animated-gif-container">
			<section className="text-section">
				<p className="subtext">{text}</p>
			</section>
			<figure className="gif-section">
				<img src={gifSrc} alt="Animated GIF" className="animated-gif" />
			</figure>
		</main>
	);
}

//PropTypes refrence used from "https://hygraph.com/blog/react-proptypes"
AnimatedGif.propTypes = {
	gifSrc: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default AnimatedGif;
