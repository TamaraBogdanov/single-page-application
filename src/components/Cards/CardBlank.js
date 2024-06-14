import React from "react";

//Import Styling
import "./CardComponent.css";

// Component displaying text on the Design Journal
function CardBlank() {
	return (
		<main className="cards-journal">
			<section className="cards-container">
				<h1 className="j-header">Diving Deeper.... Style Guide!</h1>
				<article className="style-guide-container">
					<img
						src="./images/palette.jpg"
						alt="Style Guide"
						className="style-guide-image"
					/>
					<p className="style-guide-caption">
						Colour palette used for this site
					</p>
					<div className="style-guide-text">
						<h3>Colour and Tone...</h3>
						<p>
							With our main theme centered around the ocean, we have dedicated
							ourselves to using colors that not only evoke the essence of the
							sea but also appear as cool, vibrant hues. Our goal was to
							incorporate blues and greens that stand out and create an
							energetic, positive experience for users. We experimented with
							various shades of blues and greys, which gave off a somber mood.
							However, the implementation of lighter blues, greens, and whites
							resulted in a much more vibrant and uplifting effect.
						</p>
						<p>
							We ensured consistency across all pages, with matching colors for
							titles, backgrounds, and carefully selected gifs and images to
							align with the theme. On specific pages, like the about page, we
							used a different color for the title, transitioning from white to
							Uranian blue. This was done to maintain balance, as there was
							already an abundance of white text and buttons in the design.
							Every page and layout was created with this palette in mind,
							maintaining consistency while strategically switching between
							colors to optimize the design and layout of each page.
						</p>
					</div>
					<section className="style-boarder">
						<div className="style-guide-text">
							<h3>Font and Design...</h3>
							<p>
								The font we have chosen is ""Trebuchet MS", "Lucida Sans
								Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif!"
								The font features a high height, wide proportions, and clear,
								open forms, making it very legible at various sizes. It gives a
								very clean, simple and modern look that matches the design of
								our site. The layout was specifically designed to appear simple,
								modern but also inviting, friendly and colourful. The font we
								have selected appeals to many of these charicteristics.
							</p>
							<p>
								To contrast the vibrant colours, we have designed our navbar and
								footer to embody a very modern, darker look. Contrasting the
								blues, greens and whites with a modern, simple black. The font
								here remains default as we liked the bolder feeling the text
								offers. The majority of the white text lies within these two
								components, for the soul reason that the site needed a break
								from all of the cooler tones.
							</p>
						</div>
					</section>
					<div className="style-guide-text">
						<h3>Spacing and Layout...</h3>
						<p>
							We have significantly updated our layouts since the previous
							deployment. Previously, there was a lot of empty space and large
							blocks of text on some pages. Our goal was to make the site
							simple, easy to use, and fun without being overwhelming. To
							achieve this, we have implemented more white space to break up
							text, images, and backgrounds. We have also added a cute banner
							component featuring a pixel gif at the center, which adds a
							playful element and acts as a "break" from all the detailed
							imagery and backgrounds. Boxed backgrounds were also added around
							text to create more atmosphere and appeal to the eyes when dealing
							with long, boring paragraohs of text
						</p>
						<p>
							Our site is designed to predominanetly display an image covering
							the main section of the page. This sits atop the hierachy, adding
							chracter and vibrancy to every page. Each image within a page also
							corresponds with the images within the homepages card containers.
							Atop these image backgrounds, such as the Essay and Journal page
							would lie the most important content, with the remainers being
							reflections, dev blogs etc.
						</p>
						<p>
							Because of this layout, feedback from users indicated that it was
							difficult to identify if a page contained more information. There
							were no visual cues to indicate additional content below the fold.
							To address this, we have introduced the banner feature just below
							the main section of each page, signaling that more content is
							available below. Additionally, we have added an animated white
							arrow on the homepage to reinforce this effect. These enhancements
							ensure a more engaging, user-friendly experience, guiding visitors
							through the site with clear visual cues and an appealing design.
						</p>
					</div>
				</article>
			</section>
		</main>
	);
}

export default CardBlank;
