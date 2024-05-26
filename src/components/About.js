import React from "react";
import "../components/AboutPage.css";

function About() {
	return (
		<div className="about-component">
			<video src="/videos/waves1.mp4" autoPlay loop muted />
			<h2>About Us!</h2>
			<div className="about-component-content">
				<p>
					Welcome to our digital oasis amidst the sometimes stormy seas of the
					internet! We're here to turn the tide on negativity and spread waves
					of positivity far and wide. At our online sanctuary, you'll discover a
					unique blend of art and community-driven goodness.
					<br />
					<br />
					Picture this: a virtual shoreline where bottles wash ashore, each
					containing a precious cargo of positivity. These aren't just any
					bottles; they're vessels carrying messages of hope, kindness, and
					encouragement. But here's the twist – they're not meant to be corked
					up forever. With a simple click, you can uncork these digital
					treasures and bask in their uplifting words.
					<br />
					<br />
					But it's not just about receiving; it's about giving back too. We
					invite you to craft your own messages, heartfelt notes that we'll
					carefully tuck into bottles, ready to be discovered by fellow voyagers
					navigating the vast expanse of the web. So, whether you're seeking
					solace or aiming to sprinkle a bit of joy into the digital ether, join
					us in this voyage of positivity. Together, let's cast aside the clouds
					and let the sun shine through with every click, every message, and
					every shared moment of connection. Welcome aboard!
				</p>

				<figure className="about-page-image">
					<img alt="Future Plans" src="images/img-1.jpg" />
				</figure>
			</div>
		</div>
	);
}

export default About;
