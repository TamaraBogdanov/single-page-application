import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";

function MainSection() {
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
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					View NetART!
				</Button>
			</div>
		</div>
	);
}

export default MainSection;
