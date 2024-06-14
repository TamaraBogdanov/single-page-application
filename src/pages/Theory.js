import React from "react";

//Import Styling
import "../App.css";

//Import Components
import BookPage from "../components/EssayBook/BookPages";
import Footer from "../components/Footer/Footer";
import EssayCard from "../components/Cards/EssayCard";

// Import gifs
import gif1 from "../components/Animations/ray.gif"; //fuckyeah-pixels.tumblr.com
import AnimatedGif from "../components/Animations/AnimatedIcon";

function Theory() {
	return (
		<main>
			<BookPage />
			<AnimatedGif gifSrc={gif1} text="Check out our Dev Blogs below!" />
			<article className="essay-card-container">
				<section className="essay-card-2">
					<EssayCard
						title="Week 3 - Dev Blog"
						paragraphs={[
							`Reflecting on this week's lectures and videos significantly enhanced my understanding of net art and its reliance on the web as a medium. I learned that net art isn't just about being distributed online but about leveraging the internet's unique characteristics to convey depth, meaning, and intention. These works should harness the web as a medium, drawing inspiration from it to create pieces that send a message or cement their significance in the technological era.`,

							`
							As I work on my net art piece, I plan to incorporate these insights and focus on the media aspects and modalities to craft an engaging, sensorial experience for users. Since my technical medium of display will be a laptop screen, I need to design my artwork to best suit this format. Additionally, I will use semiotic modalities to interact with this media type, ensuring my artwork fully utilizes its potential. I will need to focus on designing an artwork that sends a message,that really encapsulates this technological era and utilizes my media modalities.
							`,
							`In addition to exploring net art, my journey with React has been steadily progressing. This week, we dived into the fundamentals of Components and Props. Alongside this degree, I'm also taking a React Udemy course to deepen my understanding. While it's challenging to move beyond the basics and pass props in more complex scenarios, I'm gradually getting accustomed to React's unique functionality, especially coming from a background in basic JavaScript. By the looks of it, React will be a pleasure to work with`,
						]}
					/>
					<EssayCard
						title="Week 4: Dev Blog"
						paragraphs={[
							`Studying these comcepts of  interactivity and hypermedia this week hasreally shown be the relationship between user and devices. It's fascinating to see how digital media, especially through platforms like the World Wide Web, transforms information access and interaction. 

							Using all of the visions of Singer, Bush, Borges and Nelson we are able to dissect navigation and structure in how to truly create a piece for the best possible user experience. 
							`,

							`I have begun looking at themes, layouts and inspirations for my site. Im still unsure of what kind of netart I will create but once ive settled on a theme it will be easier for me to come up with. Themes ive considered thusfar are space, animals, recipe books as well as exploration. Im not really sure about the space theme since we have already worked with this theme last year. 
							None the less, I would like my site to appear modern and neat. Nothing too fancy but nothing too basic. Im even planning on going onto Wix and creating multiple layouts, then wireframing them as my ideas. 
							`,
							`On the practical side of things, we have just reached States and Management within React. Honestly, compared to my couse on Udemy we are really rushing into these important concepts in class. I understand that there isn’t enough time and lectures to dive into depth, but luckily I have my other courses as well as research to help back up the content we have been learning. `,
						]}
					/>
					<EssayCard
						className="essays"
						title="Week 12: Dev Blog"
						paragraphs={[
							`The theory covered in class, along with the UI/UX walkthrough, has been instrumental in shaping my understanding of how my site should function. I've started working on elements to improve user experience and prevent frustration, focusing primarily on navigation, page layout, and structure. I am experimenting with different color theories and layouts that are visually appealing and user-friendly. I am attempting to simplifyand organize my design page to avoid long blocks of text and images.`,
							`Whilst looking at inspiration online, all sites ive seen have a neat, well put together interface even when presented with large amount of information. I will attempt to create certain components like a carousel etc that fits multiple image elements inside to avoid having an information overload, just like my past design pages. It is just such a challenge to create and structure a page when there is so much text, I never know what to do with it. `,
							`Additionally, I've been scanning  over the readings provided this week to deepen my understanding of net art, AI’s impact in art, and truly what defines netart. Defining what net art is and isn't has been challenging, and I'm concerned about creating a piece without meaningful content. Thankfully, with my chosen site theme of the ocean and spreading positivity, I thought of creating a piece that encapsulated this, perhaps in the form of bottles with messages, where users can create a message and send it off into the ocean for another person to find the bottle and open up the message. for users.`,
						]}
					/>
				</section>
			</article>

			<Footer />
		</main>
	);
}

export default Theory;
