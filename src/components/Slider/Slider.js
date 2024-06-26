import React, { useState } from "react";

//Import Styling
import "./Slider.css";

//Import Components
import { SliderData } from "./SliderData";

//Icons
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider({ slides }) {
	// State to keep track of the current slide
	const [current, setCurrent] = useState(0);
	const length = slides.length; // Length of the slides array

	// Function to move to the next slide
	function nextSlide() {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	// Function to move to the previous slide
	function prevSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	// If slides is not an array or has no elements, return null
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider-component">
			<img src="./images/img-2.jpg" className="bg-image" alt="img" />
			{/* Background image */}
			<h1>Design Journal</h1> {/* Heading for the slider section */}
			<section className="slider">
				{/* Left arrow button to go to the previous slide */}
				<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
				{/* Right arrow button to go to the next slide */}
				<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

				{/* Mapping over the slider data to render each slide. Used "https://www.npmjs.com/package/react-slideshow-image" for help */}
				{SliderData.map((slide, index) => {
					return (
						<figure
							className={index === current ? "slide active" : "slide"}
							key={index}
						>
							{index === current && (
								// Displaying the image of the current slide
								<img
									src={slide.Image}
									alt="wireframe"
									className="slider-image"
								/>
							)}
						</figure>
					);
				})}
			</section>
		</section>
	);
}

export default Slider;
