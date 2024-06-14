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
						digital craftmanship. The original goal was to create a piece that
						displays an ocean where bottles would float within. These bottles
						could be interacted with to create a pop-up positive message.
						Furthermore, users could leave their own message to float amidst the
						many bottles, in hopes to brighten someone elses day.
					</p>
				</article>
			</section>
			<article className="art-desc">
				<p>
					Unfortunately, it was far too difficult to implement the system where
					user input is stored and loaded on the site. It is because of this
					that we have decided to alter the netArt slightly. Now, This piece
					serves as a platform for users to write positive messages. These
					messages, symbolically washed ashore, represent the idea that a single
					act of positivity can have a profound impact on anyone who comes
					across it. Its sent off into the database of the Internet in hopes
					that a little bit of positivity is sent online"
				</p>
			</article>
		</main>
	);
}

export default Art;
