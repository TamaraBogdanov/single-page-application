import React, { useState } from "react";
import { Link } from "react-router-dom";

//Components
import { Button } from "./Button";
import YouTubeModal from "./youtubemodal";
import "./MainSection.css";

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

	return (
		<main className="main-container">
			<video src="./videos/waves1.mp4" autoPlay loop muted />

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

			{/* renders the YouTubeModal component and manages its open/close state based on the isModalOpen state variable and the closeModal function */}
			<YouTubeModal isOpen={isModalOpen} onClose={closeModal} />
		</main>
	);
}

export default MainSection;
