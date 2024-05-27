// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	// Destructuring the 'pathname' property from the location object obtained using the useLocation hook
	const { pathname } = useLocation();

	// useEffect hook is called whenever the pathname changes
	useEffect(() => {
		// Scroll the window to the top (0 pixels horizontally and 0 pixels vertically)
		window.scrollTo(0, 0);
	}, [pathname]);

	// Return null, as this component doesn't render any UI
	return null;
};

export default ScrollToTop;
