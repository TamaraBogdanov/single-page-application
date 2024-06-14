import React, { useState } from "react";

// A few common bad words for filtering system
const bannedWords = [
	"fuck",
	"ugly",
	"stupid",
	"bitch",
	"ass",
	"idiot",
	"die",
	"kys",
	"dumb",
	"retard",
	"fat",
	"fag",
];

function MessageInput({ onAddMessage }) {
	const [inputValue, setInputValue] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevents the form from submitting and refreshing the page

		// Checks if the input contains any banned words
		const containsBannedWord = bannedWords.some((word) =>
			inputValue.toLowerCase().includes(word.toLowerCase())
		);

		if (inputValue.trim() && !containsBannedWord) {
			onAddMessage(inputValue); // If valid, call the onAddMessage prop with the inputValue
			setInputValue(""); // Clear the input field for the next message
			setErrorMessage(""); // Clear any existing error message
		} else if (containsBannedWord) {
			setErrorMessage("Please avoid using vulgar words."); //Error message if banned words were used
		}
	};

	//Message Input system assistance taken from "https://www.shecodes.io/athena/4282-using-react-to-display-info-after-submit-button"
	return (
		<form className="message-input-container" onSubmit={handleSubmit}>
			<input
				type="text"
				className="message-input"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)} // Update the inputValue state as the user types
				placeholder="Type your message here..."
			/>
			{/* Submit button to send the message */}
			<button type="submit">Send</button>

			{/* Display error message if errorMessage is not empty */}
			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</form>
	);
}

export default MessageInput;
