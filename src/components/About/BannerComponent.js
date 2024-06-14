import React from "react";

//CSS Styling
import "./BannerComponent.css";

//Passing props to add a different text/heading per banner
function BannerComponent({ heading, text }) {
	return (
		<section className="banner">
			<article className="banner-bg">
				<h1>{heading}</h1>
				{text.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</article>
		</section>
	);
}

export default BannerComponent;
