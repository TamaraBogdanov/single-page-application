import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import YouTubeModal from "./youtubemodal";
import "./MainSection.css";

function MainSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="main-container">
			<video src="/videos/waves1.mp4" autoPlay loop muted />
			<h1>ONE BOTTLE AWAY</h1>
			<p>Dive right in!</p>

			<div className="main-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					Get Started
				</Button>
				<Button
					onClick={openModal}
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					Uplifting video
				</Button>
			</div>
			<YouTubeModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default MainSection;
