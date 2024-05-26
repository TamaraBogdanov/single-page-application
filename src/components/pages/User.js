import React from "react";
import Slider from "../Slider";
import { SliderData } from "../SliderData";
import CardBlank from "../CardBlank";
import Footer from "../Footer";

function User() {
	return (
		<div className="user">
			<Slider slides={SliderData} />
			<CardBlank />
			<Footer />
		</div>
	);
}

export default User;
