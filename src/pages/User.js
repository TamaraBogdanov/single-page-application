import React from "react";

// Import Styling
import "../App.css";

// Import Components
import EssayCard from "../components/Cards/EssayCard";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Footer from "../components/Footer/Footer";
import BannerComponent from "../components/About/BannerComponent";

// Import Icon
import AnimatedGif from "../components/Animations/AnimatedIcon";
import CardBlank from "../components/Cards/CardBlank";

// Import gifs
import gif1 from "../components/Animations/ray.gif"; //fuckyeah-pixels.tumblr.com

function User() {
	return (
		<main className="user">
			<Slider slides={SliderData} />
			<AnimatedGif gifSrc={gif1} text="Check out our design process below!" />
			<article className="essay-card-container">
				<EssayCard
					title="Design Reflection"
					paragraphs={[
						`With my main idea being to spread positivity, i thought utilizing the
						ocean as my main theme would work very well together. Every single one
						of my pages follow the same colour palette of blues, whites and
						blacks. Though black isnt a "cheerful colour" I have used it in
						various places such as the footer, navbar, buttons as well as
						background text in certain pages so that it could stand compared to
						the blues and whites that predominantly fill my website and therefore
						provide some contrast. I have also kept every header the same colour
						except on the about page, reason being was for it to contrast well
						against the lighter background`,

						`Not only does this colour palette work well together, but it also
						further assists me in my simplistic, modern design. From using
						sliders, carousels, image panels etc, I wanted my site to focus on
						displaying what it offers in a neat, simple fashion where all the
						important information is easily accessable and neat. All my images are
						displayed in such a way that neatly structures every page. I did not
						want the page to cut off any images and content so that the user would
						have to scroll dowm to view it.`,
					]}
				/>
				<EssayCard
					title="UI/UX Reflection"
					paragraphs={[
						`
							Our primary focus throughout the development of this site has been to ensure users enjoy a seamless experience without the burden of navigating or hunting for information. Reflecting on insights from the UI/UX walkthrough PDF provided, it became evident that users form quick judgments about a site within seconds of visiting. Initially, our main pages were aesthetically pleasing but lacked clarity in indicating additional content beyond the surface.`,
						`To address this, we introduced two crucial elements. First, an arrow link embedded within the homepage not only signals the presence of more content below but also serves as a direct link guiding users to explore further. Secondly, we implemented a banner component strategically positioned at the bottom of the main page. This component not only serves as a visual break in content as you scroll further down but also effectively signals to users that there is more valuable information awaiting them below. `,
						`We've taken navigation feedback seriously, particularly noting concerns about missing pages from the navbar or only accessible through card components on the homepage. This setup made it tedious to navigate without frequently returning to the homepage. As a solution, we merged the "About" and "Planning Page" since their content individually was minimal, reducing the need for excessive page switching. Additionally, all pages are now accessible through the card component for seamless navigation, eliminating the redundant "sign up" button and replacing it with a link to the journal. The "Theory" page, deemed lower in priority, remains excluded from the navbar but is accessible via a dedicated button on the "About" page to accommodate easy access to all site content. As per usual, all navigation components have been placed to retain consistancy and purpose.`,
						`We've incorporated several enhancements to improve user experience. One major addition is the use of expandable card components, which effectively organize and display large amounts of text in a neat and simple manner. These cards provide users with a preview of the blog or text content, allowing them to interact further by expanding the card to view more details Another such component created was the carousel, designed to hold multiple images the user can switch between.`,

						`Previously, our site did feel a bit stagnant, so animations, pop ups, gifs and hover effects have been added to certain components to give the site a more lively feel, as well as to enhance user experience and interactiom. Additionally, we've integrated a small YouTube video on the homepage, accessible via an "Uplifting Video" button. This feature ensures that users can stay within the site to watch the video without needing to navigate away entirely. To enhance usability, we've included functionality to close the video easily, ensuring it doesn't remain open unless intentionally accessed by the user.

							And lastly, we've prioritized responsiveness across our pages, making them adaptable to different screen sizes. This includes implementing a burger menu specifically designed to enhance navigation for mobile users, further improving accessibility and usability across various devices.
							`,
					]}
				/>
			</article>
			<CardBlank />
			<BannerComponent
				heading="Reflection"
				text={[
					"Overall the process was challenging but equally entertaining. We have tried our hardest to create a site that is consistent, simple and well structured. There are many things we still seek to improve such as certain sections with large text such as the journal. As well as different ways to layout and structure a page as certain pages are much weaker in terms of design",
					"I think we have definetly excelled in the overall theme and design, how the images, gifs, text and backgrounds all linked in aspects such as colour, placement and consistency. However, as a new site there is still a lot we need to improve and we will be looking forwward to utilizing feedback and experimenting with different techniques to better ourselves!",
				]}
			/>
			<Footer />
		</main>
	);
}

export default User;
