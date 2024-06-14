import React, { useState } from "react";

//Import Styling
import "./BottleArt.css";

//Import Components
import Bottle from "./Bottle";
import MessageInput from "./MessageInput";

function BottleArt() {
	const [bottles, setBottles] = useState([]);

	// Generate a new bottle object
	function handleAddMessage(newMessage) {
		const newBottle = {
			id: Date.now(),
			left: `${Math.random() * 90}vw`, // Generates a random position between 0 and 90vw
			animationDuration: `${Math.random() * 6 + 4}s`, // random animation durition between 4s and 10s
			message: newMessage,
		};

		setBottles((prevBottles) => [...prevBottles, newBottle]); //Updates state to replace current value witj new bottle array
	}

	return (
		<div className="bottle-art">
			<video
				className="video-background"
				src="./videos/ocean.mp4"
				autoPlay
				loop
				muted
			/>

			{/*Iterates over each bottle, adding unique components */}
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
