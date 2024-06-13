import React from "react";
import { Link } from "react-router-dom";

//Import Styling
import "./Footer.css";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<main className="footer-container">
			<section class="footer-links">
				{/* First Column */}
				<section className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>About Us</h2>
						<Link to="/">How it works</Link>
						<Link to="/">NetART</Link>
						<Link to="/">Our philosophy</Link>
						<Link to="/">Motivations</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					{/* Second Column */}
					<div class="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">Contact</Link>
						<Link to="/">Support</Link>
						<Link to="/">Consultations</Link>
						<Link to="/">Sponsorships</Link>
					</div>
				</section>
				{/* Third Column */}
				<section className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Social Media</h2>
						<Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
					</div>
				</section>
			</section>
			{/* Social Media Section */}
			<section class="social-media">
				<section class="social-media-wrap">
					<div class="footer-logo">
						{/* Link to Homepage */}
						<Link to="/" className="social-logo">
							OBA
							<FontAwesomeIcon icon={faBottleDroplet} />
						</Link>
					</div>
					{/* Copyright Information */}
					<small class="website-rights">OBA © 2024</small>
					{/* Social Icons */}
					<div class="social-icons">
						{/* Facebook */}
						<Link
							class="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</Link>
						{/* Instagram */}
						<Link
							class="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</Link>
						{/* Youtube */}
						<Link
							class="social-icon-link youtube"
							to="/"
							target="_blank"
							aria-label="Youtube"
						>
							<FontAwesomeIcon icon={faYoutube} />
						</Link>
						{/* Twitter */}
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<FontAwesomeIcon icon={faXTwitter} />
						</Link>
					</div>
				</section>
			</section>
		</main>
	);
}

export default Footer;
