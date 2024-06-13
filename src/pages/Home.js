import React from "react";

//Import Styling
import "../App.css";

//Import Components
import MainSection from "../components/Homepage/MainSection";
import CardComponent from "../components/Cards/CardComponent";
import Footer from "../components/Footer/Footer";

function Home() {
	return (
		<>
			<MainSection />
			<section id="card-component">
				<CardComponent />
			</section>
			<Footer />
		</>
	);
}

export default Home;
