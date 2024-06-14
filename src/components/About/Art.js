import React from "react";

//Import Styling
import "./Art.css";

function Art() {
	return (
		<main className="art-page">
			<section className="art-content">
				<img
					src="./images/netart.png"
					alt="Original NetArt Planning"
					className="art-image"
				/>

				<article className="text-content">
					<h1>NetART Planning</h1>
					<p>The message you leave could help someone in need.</p>
					<p>
						Whilst originally creating this netArt, our focus was to blend
						creativity with digital craftmanship. The goal was to create a piece
						that displays an ocean where bottles would float within. These
						bottles could be interacted with to create a pop-up positive
						message. Furthermore, users could leave their own message to float
						amidst the many bottles, in hopes to brighten someone elses day.
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
					that a little bit of positivity is sent online.
				</p>
				<p>
					The piece still encompases a lot of the original elements such as the
					ocean background, the video acting as a catalist for the bottles
					movements. Although originally the plan was for the bottles to remain
					fixed, floating within the screen, but due to the us being unabe to
					store the input permanently, we have added a completely new feature
					that allows users to type any message, and send it off to be washed
					away on shore for people to read. Naturally, because the input cannot
					be stored, other users would not be able to read it, but you as the
					user will read those messages, whatever is typed will keep floating in
					as messages from other bottles. It is the act of reciting words of
					positivity to yourself continously that makes the difference
				</p>
				<p>
					As stated, the meaning behind the piece is to envoke positivity, maybe
					not to others, but to yourself. The artwork imitates this action, even
					envoking a filtering system to filter out negativity. As mentioned
					back within lecture materials, “Something is interactive if and only
					if it (1) is responsive, (2) does not completely control, (3) is not
					completely controlled, and (4) does not respond in a completely random
					fashion.”(Aaron Smuts; “What is interactivity?” Smuts p65) We have
					added the level of interactivty by manipulating the bottles messages
					to display only what you type and if multiple messages are typed,
					multiple bottles will reappear reciting those messages.
				</p>
			</article>
		</main>
	);
}

export default Art;
