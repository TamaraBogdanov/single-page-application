import React from "react";
import Book from "./Book";
import "./Book.css";

const essayPages = [
	" The internet has changed how we see and enjoy art, providing artists with a limitless digital space to try new ways of expressing themselves. Net-Art, also known as web-based art, is a special type of art that uses the internets features like connectivity and interaction to push artistic limits. As the online world keeps changing, net-art evolves too, showing how technology affects society and our lives online",
	"Net/web art represents a distinctive genre of artistic expression that uses the internet as it primary canvas, gallery, and medium, The internet “has a logic, a tempo, an idiom, a colour scheme, a politics, and an emotional sensibility all its own”(Heffernan, V. 2016) which is why  it has become a stable ground for artists to discover new ways to express, interact, and  share their works. Unlike traditional art forms that rely on physical materials, Net-Art exists purely in the digital realm, often taking the form of websites, online programs, or interactive experiences.",
	"There are six specific features that distinguish Net-Art according to German critic Tilman Baumgärtel. These are connectivity, global reach, multimodality, immateriality, interactivity,and equality.(Ricci, B. 2020) Net art uses these ideas to redefine art using digital networks,making it more engaging and creating new experiences for everyone. All this is harnessed through the connectivity and interactivity of the web, offering “unlimited access to data and their widespread dissemination provided by the web” (Ricci, B. 2020) allowing artists free will that are not controlled by traditional institutions. At least this is how it was during the early days of the Internet, Web 0.1. Nowadays as free roaming as the internet is, it is as deceptive as it is inviting.",
	"Nevertheless, the internet still acts for a unique and powerful art medium, offering artists a vast digital canvas to explore and express their creativity. One example of a Net-artwork and data Visualisation that really resonates with me is iknowwhereyourcatlives by Owen  Mundy. I'm a big fan of the digital world and all its complexities, but as I've grown older, I've come to realize that there are many dark secrets it hides. Mundy’s piece showcases just how internet can be used as artistic potential, but also brings to light its deceptiveness. However, to fully understand the significance of Mundy’s work, its essential to understand the historical context behind Net-Art.",
	"The Term NET.ART is less a coinage than an accident, the result of a software glitch that occurred in December 1995” (Greene, R. 2000) by Slovenian artist Vuk Cosic. Vuk Cosic, along with several other figures such as Jodi.org, Alexei Shulgin, Olia Lialina, Heath Bunting etc challenged traditional notions of art by embracing the internet's interactive and collaborative nature through experimentation and use of HTML, JavaScript, interactivity, and other web technologies. All the Net-Art that has been produced during the nineties is what we call “Web 1.0.” Which is the period “concerned with static web pages and no user interface.” (Chatel, M. 2019).",
	" Several works’ aim was to “highlight the “materiality” and aesthetic aspects of the web’s constructive elements” (Ricci, B. 2020) such as Mark Napier’s, The Shredder, 1998 a program designed to “shred” aka deconstruct web elements such as code, text, markup etc and scatter them across the screen. However, with the internet being newly introduced, the idea of Web 1.0’s artists were that “They began to reflect on the relationship between virtual and physical space, addressing the themes of privacy, community, and the understanding of self with a subversive and intelligent approach to new technologies and the way these affect modern society.” (Ricci, B. 2020)",
	"Net-Artists always explored ways in which the internet and technology can convey meaning, till this day. However, with technological advances rapidly expanding, “increased change also means that certain aspects of culture become rapidly outdated.” (Omar Kholeif) The digital environment today is vastly different from that of the 1990s, which means that the socio-political messages impact of net art will also evolve, and thus the “gradual, technological transition towards Web 2.0.” (Chatel, M. 2019). Where the rise of “dynamic interfaces where users can share content in real-time” (Chatel, M. 2019). utilizing the internet and sites such as twitter, Instagram, YouTube, etc.",
	"These platforms have introduced a new level of interactivity and participation to the world of digital art. Artists can now harness the power of the these platforms as well as the internet to create works that are constantly evolving, shaped by the inputs and contributions of a global community of users. ",
	"It is because of this shift towards user-generated content and real-time sharing has transformed the internet to Web 2.0. However, this shift also raises significant concerns about oversharing data and potential privacy issues that must be addressed. Mundys  “iknowwhereyourcatlives” is a perfect example of how sharing amongst these sites, invoke a fun sense of community but also enabled him to gather coordinates of all those that shared,and locate their cat, therefore their home. In multiple situations, your data shared can be used for targeted advertising, user profiling, or even surveillance by government agencies or cybercriminals, an example of this being the Cambridge Analytica Scandal.",
	"This is exactly why Mundy’s piece resonated so much with me as it was yet again a real eye opener how something as innocent as sharing your cat, can lead to a bigger more dangerous picture of oversharing data. It is because of pieces like Mundy’s that truly bring this to light and hopefully help educate those to tread carefully online, watch what they share and how they share it.",
	"Mundy's work acts as a mixture of Net-Art paired with Data-Visualisation and exemplifies how the internet can be harnessed as a medium for artistic expression and social commentary. The artwork consists of a website that scrapes publicly available images of people's cats from social media platforms and maps their locations using metadata embedded in the image files. By doing so, Mundy raises awareness about the potential privacy risks associated with sharing personal information online, even seemingly innocent images of our pets. Unlike traditional art forms confined to physical spaces or materials, the internet offers artists a limitless virtual realm to experiment with various media, formats, and interactive experiences.",
	"It is thanks to the Net-Art movement’s in general as well as the Net-Artists that inspired Mundy's to encourage audience participation and engagement, which he used to digitally challenge the themes of data protection and GPS localization, by sharing content that “has not been provided by users with sufficient restrictions to access rights” (Schubert, A. 2021. Pp-103) What better way than to use the very same medium that has stolen this information and display it accordingly. The power of “iknowwhereyourcatlives” lies in its ability to engage viewers directly, inviting them to participate in the experience by trying to find their own cat, or just witness in a large- scale the potential consequences of oversharing of just how many cats are displayed on the world map, in any area you select.",
	"With the basic media type of this piece being the code, it takes these publicly available cat APIs and runs them “through various clustering algorithms using a supercomputer in order to represent the enormity of the data source.”( I Know Where Your Cat Lives) This is then paired with the technical media of display acting as the screen to display users all this information at once. ",
	"Using the Media Modalities, the users then engage with this piece to evoke its message. The material modality “perceive similarities between materially very different devices as long as they provide the same interface.”(Bruhn, J. 2021) A user on their phone, can interact with the piece by touching, whilst a user on their computer can interact by clicking and dragging. They are able to navigate throughout the global map and find images of cats anywhere they click.",
	"All of this ties into the spatiotemporal modality and how we take our time perceiving all this information. Meaning that “although images are spatial objects in the material modality, we always need time to look at them in the sensorial modality”( Bruhn, J. 2021) We spend time looking around the map and searching for data. Personally the second I went on the site, I immediately searched around my area to find my friends cat. I spent a considerable amount of time looking. That is when the sensorial modality then kicks into place as some users might just be interested in seeing different cats around the world, whilst others experience a set of discomfort, wondering if they can find their cat, and therefore have their location “exposed”.",
	"Even though I found nothing, I was still shocked at just how many cats were in the area. How a simple social media post of a cat can enable someone to find your location. It just further brought to my attention how far technology has come, and how fascinating yet dangerous it can be.",
	"The internet, as a medium opens up for this participation dynamic, allowing real-time user engagement and a sense of immediacy that traditional art forms often lack. Through the users engagement, they are able to see in widescale just how many “cats” are displayed, or rather truly how many peoples locations have been exposed. They can potentially even find their cat/thus revealing their nearby location. All of this truly exemplifies the message of the piece and how “every website is tracking your every move” (I Know Where Your Cat Lives ) This piece basically “pursues the goal of illegal use” (Schubert, A. 2021)and shows just how easy it is for anyone to access any sensitive information online, potentially even yours.",
	"Though the device displaying the artwork is important, ultimately “Net Art, authenticity usually lies in the lines of code, therefore it is the code that needs to be preserved, not the hardware” (Ricci, B. 2020). As technology advances rapidly, hardware devices often become obsolete. This underscores the importance for Net artists to use software and the internet as mediums for their digital works. By doing so, their art can be preserved and adapted onto future hardware platforms as technology evolves.",
	"In today's digital world, understanding online privacy can be tricky. While we enjoy the convenience of the internet, we often overlook the potential consequence and risks of sharing our personal information. It is crucial for users to recognize that they do not have complete privacy online. When we use the internet, social media, or apps, we leave behind a trail of digital footprints. These platforms often collect data about us, like our interests and behaviours, sometimes without us knowing. ",
	"“The Internet has made it easier than ever to collect and store personal information” (Ahuja, P. 2023) and with the everchanging world diving deeper within the digital realm, it is vital to expose people to these practices and challenge their understanding of not only digital footprints and privacy, but the overall dangers of the internet as a whole. Owen Mundy's iknowwhereyourcatlives stands as a great example of how net-art can engage viewers, provoke thought but also bring awareness to the dangers and complexities of privacy and data security in the digital age. Mundy's work uses the internet's interactive nature to make us think about the risks of sharing too much online and the balance between convenience and privacy in our connected world.",
	"Net-art not only raises awareness but also sparks important conversations and inspires us to take action. As artists redefine art in the digital era, they encourage us to reconsider our relationship with technology and advocate for better privacy protections and ethical data practices. At the same time, preserving and archiving digital artworks for the long term will continue to be important. Given the rapid pace of technological change and hardware obsolescence, it's crucial for Net artists to focus on using software and the internet as their primary mediums. This approach ensures their art can be preserved and adapted for future technologies.",
	"Ultimately, net-art shows how the internet can change our ideas about art, who creates it,and what artists do today. As we deal with the challenges of the digital era, net-art will be important for shaping how we see things, sparking discussions, and encouraging new ways to be creative. The future of net-art holds both exciting possibilities and formidable challenges. As new technologies emerge, such as artificial intelligence and virtual reality, artists will undoubtedly find new ways to use these innovations in their art, pushing the boundaries of what is possible in the digital realm ",
];

const BookPage = () => {
	return (
		<div className="book-page">
			<Book imageSrc="/path/to/your/image.jpg" essayPages={essayPages} />
		</div>
	);
};

export default BookPage;
