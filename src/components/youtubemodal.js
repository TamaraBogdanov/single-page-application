import React from "react";

//Components
import "./youtubemodal.css";

//Icons
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// YouTubeModal component takes isOpen and onClose as props
const YouTubeModal = ({ isOpen, onClose }) => {
	return (
		<main className={`youtube-modal ${isOpen ? "open" : ""}`}>
			{/* Conditional rendering: Renders the modal only if isOpen is true */}
			<section className="modal-content">
				{/* Close button for the modal */}
				<button className="close-btn" onClick={onClose}>
					{/* FontAwesomeIcon component to render the close icon */}
					<FontAwesomeIcon icon={faTimes} />
				</button>
				{/* Embedding YouTube video inside an iframe */}
				{isOpen && (
					<iframe
						title="YouTube Video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/hBzP8MtJf04?autoplay=1"
						frameBorder="0"
						allowFullScreen
					></iframe>
				)}
			</section>
		</main>
	);
};

export default YouTubeModal;
