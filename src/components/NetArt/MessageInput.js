import React, { useState } from "react";

function MessageInput({ onAddMessage }) {
	const [inputValue, setInputValue] = useState("");

	//Message Input system assistance taken from "https://www.shecodes.io/athena/4282-using-react-to-display-info-after-submit-button"
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			onAddMessage(inputValue);
			setInputValue("");
		}
	};

	return (
		<form className="message-input-container" onSubmit={handleSubmit}>
			<input
				type="text"
				className="message-input"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Type your message here..."
			/>
			<button type="submit">Send</button>
		</form>
	);
}

export default MessageInput;
