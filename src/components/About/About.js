import { Link } from "react-router-dom";
import React from "react";

//Import Styling
import "../Homepage/MainSection.css";
import "./AboutPage.css";

//Import Components
import { Button } from "../Button/Button";

function AboutPage() {
	return (
		<main className="about-page">
			<section className="about-content">
				<section className="main-btns">
					{/* Button to navigate to "/netart" */}
					<Link to="/netart">
						<Button
							className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
						>
							NetART
						</Button>
					</Link>
					<Link to="/theory">
						<Button
							className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
						>
							DevBlogs
						</Button>
					</Link>
				</section>

				<article className="about-article">
					<h2>What We Do!</h2>
					<p>
						At our online sanctuary, you'll discover a unique blend of art and
						community-driven goodness. Picture this: a virtual shoreline where
						bottles wash ashore, each containing a precious cargo of positivity.
						These aren't just any bottles; they're vessels carrying messages of
						hope, kindness, and encouragement. But here's the twist – they're
						not meant to be corked up forever. With a simple click, you can
						uncork these digital treasures and bask in their uplifting words.
					</p>
					<p>
						But it's not just about receiving; it's about giving back too. We
						invite you to craft your own messages, heartfelt notes that we'll
						carefully tuck into bottles, ready to be discovered by fellow
						voyagers navigating the vast expanse of the web. So, whether you're
						seeking solace or aiming to sprinkle a bit of joy into the digital
						ether, join us in this voyage of positivity. Together, let's cast
						aside the clouds and let the sun shine through with every click,
						every message, and every shared moment of connection. Welcome
						aboard!
					</p>
				</article>
			</section>
		</main>
	);
}

export default AboutPage;
