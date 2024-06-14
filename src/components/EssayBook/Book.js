import React, { useState } from "react";

//Import Styling
import "./Book.css";

const Book = ({ imageSrc, essayPages }) => {
	// State for managing the current page
	const [currentPage, setCurrentPage] = useState(0);

	// Function to handle navigation to the next page
	function nextPage() {
		// Update the current page to the next page, wrapping around to the first page if at the end
		setCurrentPage((prevPage) => (prevPage + 1) % essayPages.length);
	}

	// Function to handle navigation to the previous page
	function prevPage() {
		// Update the current page to the previous page, wrapping around to the last page if at the beginning
		setCurrentPage(
			(prevPage) => (prevPage - 1 + essayPages.length) % essayPages.length
		);
	}

	return (
		<section className="book">
			<img src="./images/img-3.jpg" className="bg-image" alt="img" />

			<h1>NetArt Essay</h1>

			<section className="book-content">
				<figure className="book-image">
					<img src="./images/img-6.jpg" alt="Book Illustration" />
				</figure>

				<article className="book-text">
					{/* Display the current page content */}
					<p>{essayPages[currentPage]}</p>
				</article>
			</section>

			<section className="book-navigation">
				{/* Button to navigate to the previous page */}
				<button className="btn" onClick={prevPage} disabled={currentPage === 0}>
					Previous
				</button>

				{/* Button to navigate to the next page */}
				<button
					className="btn"
					onClick={nextPage}
					disabled={currentPage === essayPages.length - 1}
				>
					Next
				</button>
			</section>
		</section>
	);
};

export default Book;
