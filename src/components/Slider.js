import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../components/Slider.css";
function Slider({ slides }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	function nextSlide() {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	function prevSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<img src="/images/img-2.jpg" className="bg-image" alt="img" />
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

			{SliderData.map((slide, index) => {
				return (
					<figure
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<img
								src={slide.Image}
								alt="wireframes"
								className="slider-image"
							/>
						)}
					</figure>
				);
			})}
		</section>
	);
}

export default Slider;
