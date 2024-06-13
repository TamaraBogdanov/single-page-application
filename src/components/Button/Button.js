import React from "react";

//Import Styling
import "./Button.css";

// Define available styles and sizes for buttons
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

// Button component
export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	// Check if the provided buttonStyle is valid, otherwise use the default style
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	// Check if the provided buttonSize is valid, otherwise use the default size
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	// Return a button element with the appropriate classes and properties
	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Apply button, style, and size classes
			onClick={onClick} // Set the click event handler
			type={type} // Set the button type
		>
			{children}
		</button>
	);
};
