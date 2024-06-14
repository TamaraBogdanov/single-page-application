import React from "react";

//Import Styling
import "../components/About/AboutPage.css";

//Import Components
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import BannerComponent from "../components/About/BannerComponent";
import Art from "../components/About/Art";

//Import Gifs
import gif2 from "../components/Animations/bubble.gif";
import AnimatedGif from "../components/Animations/AnimatedIcon";

function AboutPage() {
	return (
		<main className="about-page">
			<BannerComponent />
			<About />
			<AnimatedGif gifSrc={gif2} />
			<Art />
			<Footer />
		</main>
	);
}

export default AboutPage;