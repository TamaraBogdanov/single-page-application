import React from "react";

//Import Styling
import "../App.css";

//Import Components
import MainSection from "../components/Homepage/MainSection";
import CardComponent from "../components/Cards/CardComponent";
import Footer from "../components/Footer/Footer";

function Home() {
	return (
		<main>
			<MainSection />
			<section id="card-component">
				<CardComponent />
			</section>
			<Footer />
		</main>
	);
}

export default Home;
