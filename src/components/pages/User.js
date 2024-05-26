import React from "react";
import Slider from "../Slider";
import { SliderData } from "../SliderData";

function User() {
	return (
		<div className="user">
			<Slider slides={SliderData} />
		</div>
	);
}

export default User;
