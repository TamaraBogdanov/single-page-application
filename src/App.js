import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
//Components
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import ScrollToTop from "./Customhook";

//Pages
import Theory from "./pages/Theory";
import Planning from "./pages/Planning";
import NetArtPage from "./pages/NetArt";
import AboutPage from "./pages/About";

//App component displaying routing for every page
function App() {
	return (
		<React.Fragment>
			<BrowserRouter basename="/single-page-application/">
				{/* Scrolltotop component called to start from top of page on every link clicked */}
				<ScrollToTop />;
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />}></Route>
					<Route path="/about" exact element={<AboutPage />}></Route>
					<Route path="/user" exact element={<User />}></Route>
					<Route path="/theory" exact element={<Theory />}></Route>
					<Route path="/art" exact element={<Planning />}></Route>
					<Route path="/netart" exact element={<NetArtPage />}></Route>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
