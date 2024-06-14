import React, { useState } from "react";

//Import Styling
import "./BottleArt.css";

//Import Components
import Bottle from "./Bottle";
import MessageInput from "./MessageInput";

function BottleArt() {
	const [bottles, setBottles] = useState([]);

	const handleAddMessage = (newMessage) => {
		const newBottle = {
			id: Date.now(),
			left: `${Math.random() * 90}vw`,
			animationDuration: `${Math.random() * 6 + 4}s`,
			message: newMessage,
		};

		setBottles((prevBottles) => [...prevBottles, newBottle]);
	};

	return (
		<div className="bottle-art">
			<video
				className="video-background"
				src="./videos/ocean.mp4"
				autoPlay
				loop
				muted
			/>

			{bottles.map((bottle) => (
				<Bottle
					key={bottle.id}
					id={bottle.id}
					left={bottle.left}
					animationDuration={bottle.animationDuration}
					message={bottle.message}
				/>
			))}
			<MessageInput onAddMessage={handleAddMessage} />
		</div>
	);
}

export default BottleArt;
