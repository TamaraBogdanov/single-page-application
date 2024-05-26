import React from "react";
import "../components/AboutPage.css";

function Art() {
	return (
		<div className="about-component">
			<img src="/images/img-8.jpg" className="bg-image" alt="img" />
			<h3>Net Art Preperation</h3>
			<div className="about-component-content">
				<p className="art-text">
					The message you leave could help someone in need.
					<br />
					<br />
					Creating this net art would involve a blend of creativity and digital
					craftsmanship. First, I'd conceptualize the design, envisioning a
					visually captivating shoreline where digital bottles would wash
					ashore. Next, I'd utilize web development tools to bring this vision
					to life, ensuring an intuitive user interface for notonly uncorking
					messages, but also leaving their own. I will incorporate elements of
					interactivity and animation to enhance the user experience, adding to
					the magic of discovering and sharing positivity online. Throughout the
					process, I'd iterate and refine, striving to strike the perfect
					balance between functionality and aesthetic appeal.
					<br />
					<br />
					The result? A captivating digital artwork that not only spreads
					positivity but also serves as a beacon of hope in the vast sea of the
					internet.
				</p>

				<figure className="art-page-image">
					<img alt="Future Plans" src="images/netart.png  " />
				</figure>
			</div>
		</div>
	);
}

export default Art;
