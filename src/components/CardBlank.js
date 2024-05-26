import React from "react";
import "./CardComponent.css";

function CardBlank() {
	return (
		<div className="cards">
			<div className="cards-container">
				<h1>Style Guide</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
					magna ac bibendum tincidunt, velit libero bibendum ex, vel bibendum
					nulla nibh vel eros. Nulla facilisi. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Donec vel
					turpis sit amet augue hendrerit efficitur. Sed venenatis risus eget
					orci laoreet, ut commodo mauris vulputate.{" "}
				</p>
			</div>

			<div className="cards-container">
				<h1>Here are the UI/UX decisions i've made!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
					magna ac bibendum tincidunt, velit libero bibendum ex, vel bibendum
					nulla nibh vel eros. Nulla facilisi. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Donec vel
					turpis sit amet augue hendrerit efficitur. Sed venenatis risus eget
					orci laoreet, ut commodo mauris vulputate.{" "}
				</p>
			</div>
		</div>
	);
}

export default CardBlank;
