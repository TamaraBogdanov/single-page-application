import React from "react";
import "./BannerComponent.css";

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
