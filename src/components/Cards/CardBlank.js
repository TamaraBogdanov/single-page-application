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
						<p>
							With my main idea being to spread positivity, i thought utilizing
							the ocean as my main theme would work very well together. Every
							single one of my pages follow the same colour palette of blues,
							whites and blacks. Though black isnt a "cheerful colour" I have
							used it in various places such as the footer, navbar, buttons as
							well as background text in certain pages so that it could stand
							compared to the blues and whites that predominantly fill my
							website and therefore provide some contrast. I have also kept
							every header the same colour except on the about page, reason
							being was for it to contrast well against the lighter background
						</p>
						<p>
							Not only does this colour palette work well together, but it also
							further assists me in my simplistic, modern design. From using
							sliders, carousels, image panels etc, I wanted my site to focus on
							displaying what it offers in a neat, simple fashion where all the
							important information is easily accessable and neat. All my images
							are displayed in such a way that neatly structures every page. I
							did not want the page to cut off any images and content so that
							the user would have to scroll dowm to view it.
						</p>
					</div>
				</article>
			</section>

			<article className="cards-container">
				<h1>Here are the UI/UX decisions I've made!</h1>
				<p>
					Everything i have done in this site was to insure users have an
					enjoyable experience without having to worry to much about navigating,
					reading or viewing content. On pages such as the Essay Page, i have
					confined a long 2000 word essay into a small book format where the
					page flips upon reading a section. Within my design journal, i have
					confined all of my wireframes to be displayed in the form of a
					slider/cariousel. All of these decisions were to make the pages were
					kept neat and simple. The user can interact with how much they wish to
					view instead of having it all just plastered on the page. Within my
					Homepage, i have also managed to confine many elements and pages
					within a card component, transforming them into links that will lead
					you to the actual page/site. Because these links were found in the
					bottom of the homepage, when they were redirected it would start
					halfway within that page clicked.Because of this, i actually had to
					further implement some code to make sure upon everyl link clicked, the
					user would be taken to the top of the page.
				</p>
				<p>
					I have also confined a small youtube video to be displayed on the
					homescreen upon clicking the "Uplifting Video button" This way it
					would keep you within the site and users wouldnt have to go back
					sompletely to revisit it. Additionally, i have added methods of
					closing the video as on default it would remain open unless the user
					clicked to go backwards on the site. To top it all off, i have also
					added responsivness to my pages, and with this comes a burger menu i
					have added to help mobile users navigate.
				</p>
			</article>
		</main>
	);
}

export default CardBlank;
