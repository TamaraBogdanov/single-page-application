import React from "react";
import "../components/AboutPage.css";

function About() {
	return (
		<div className="about-component">
			<video src="/videos/waves1.mp4" autoPlay loop muted />
			<h2>About Us!</h2>
			<div className="about-component-content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
					magna ac bibendum tincidunt, velit libero bibendum ex, vel bibendum
					nulla nibh vel eros. Nulla facilisi. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Donec vel
					turpis sit amet augue hendrerit efficitur. Sed venenatis risus eget
					orci laoreet, ut commodo mauris vulputate.
				</p>
				<figure className="about-page-image">
					<img alt="Future Plans" src="images/img-2.jpg" />
				</figure>
			</div>
		</div>
	);
}

export default About;
