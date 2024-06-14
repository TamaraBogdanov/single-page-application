import { useEffect } from "react";

//Import Component
import BottleArt from "../components/NetArt/BottleArt";

function NetArt() {
	//Added specific styling so that desired effect is applied only on netart page.
	//Assistance on implementing feature taken from "https://stackoverflow.com/questions/56926963/react-add-body-class-only-to-certain-components-in-useeffect-hook"
	useEffect(() => {
		document.body.style.margin = "0";
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.margin = "";
			document.body.style.overflow = "";
		};
	}, []);
	return (
		<main className="App">
			<BottleArt />
		</main>
	);
}

export default NetArt;
