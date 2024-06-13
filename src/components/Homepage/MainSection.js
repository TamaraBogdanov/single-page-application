import React, { useState } from "react";
import { Link } from "react-router-dom";

//Import Styling
import "./MainSection.css";

//Import Components
import { Button } from "../Button/Button";
import YouTubeModal from "../YTMode/youtubemodal";

function MainSection() {
	// State to manage the visibility of the YouTube modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to open the YouTube modal
	const openModal = () => {
		setIsModalOpen(true);
	};

	// Function to close the YouTube modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Function to handle scroll to the CardComponent section
	const scrollToCardComponent = () => {
		const cardComponentSection = document.getElementById("card-component");
		if (cardComponentSection) {
			cardComponentSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<main className="main-container">
			<video
				className="video-main"
				src="./videos/waves1.mp4"
				autoPlay
				loop
				muted
			/>

			<h1>ONE BOTTLE AWAY</h1>
			<p>Dive right in!</p>

			{/* Main buttons */}
			<section className="main-btns">
				{/* Button to navigate to "/netart" */}
				<Link to="/netart">
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
					>
						Get Started
					</Button>
				</Link>

				{/* Button to open the YouTube modal */}
				<Button
					onClick={openModal}
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					Uplifting video
				</Button>
			</section>

			{/* Down arrow button */}
			<section className="space">
				<div className="down-arrow" onClick={scrollToCardComponent}>
					&#x290B;
					{/* Unicode for downward arrow */}
				</div>
			</section>
			{/* Renders the YouTubeModal component and manages its open/close state based on the isModalOpen state variable and the closeModal function */}
			<YouTubeModal isOpen={isModalOpen} onClose={closeModal} />
		</main>
	);
}

export default MainSection;
