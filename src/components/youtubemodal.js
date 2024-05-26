import React from "react";
import "./youtubemodal.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YouTubeModal = ({ isOpen, onClose }) => {
	return (
		<div className={`youtube-modal ${isOpen ? "open" : ""}`}>
			<div className="modal-content">
				<button className="close-btn" onClick={onClose}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
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
			</div>
		</div>
	);
};

export default YouTubeModal;
