import React, { useState } from "react";
import "./Book.css";

const Book = ({ imageSrc, essayPages }) => {
	const [currentPage, setCurrentPage] = useState(0);

	const nextPage = () => {
		setCurrentPage((prevPage) => (prevPage + 1) % essayPages.length);
	};

	const prevPage = () => {
		setCurrentPage(
			(prevPage) => (prevPage - 1 + essayPages.length) % essayPages.length
		);
	};

	return (
		<div className="book">
			<img src="/images/img-3.jpg" className="bg-image" alt="img" />{" "}
			{/* Background Image */}
			<h1>NetArt Essay</h1>
			<div className="book-content">
				<div className="book-image">
					<img src="/images/img-6.jpg" alt="Book Illustration" />
				</div>
				<div className="book-text">
					<p>{essayPages[currentPage]}</p>
				</div>
			</div>
			<div className="book-navigation">
				<button className="btn" onClick={prevPage} disabled={currentPage === 0}>
					Previous
				</button>
				<button
					className="btn"
					onClick={nextPage}
					disabled={currentPage === essayPages.length - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Book;
