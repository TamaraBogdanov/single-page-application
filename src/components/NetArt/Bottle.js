import React, { useState } from "react";
import BottleImage from "./bottle.png";

function Bottle({ left, animationDuration, message }) {
	const [showMessage] = useState(true);

	return (
		<section
			className="bottle"
			style={{
				left,
				animationDuration,
				visibility: showMessage ? "visible" : "hidden", // Determines if the bottle and its message are visible
			}}
		>
			<img src={BottleImage} alt="Bottle" />
			<div className="message">{message}</div>
		</section>
	);
}

export default Bottle;
