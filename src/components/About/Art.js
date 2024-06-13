import React from "react";

//Import Styling
import "./Art.css";

function Art() {
	return (
		<main className="art-page">
			<section className="art-content">
				<img
					src="./images/netart.png"
					alt="NetArt Planning"
					className="art-image"
				/>

				<article className="text-content">
					<h1>NetART Planning</h1>
					<p>The message you leave could help someone in need.</p>
					<p>
						Whilst creating this netArt, our focus was to blend creativity with
						digital craftmanship. The goal was to create a piece that displays
						an ocean where bottles would float within. These bottles could be
						interacted with to create a pop-up positive message. Furthermore,
						users could leave their own message to float amidst the many
						bottles, in hopes to brighten someone elses day.
					</p>
				</article>
			</section>
			<article className="art-desc">
				<p>Talk about wha you did, how you did it, strengths and weaknesses</p>
			</article>
		</main>
	);
}

export default Art;
