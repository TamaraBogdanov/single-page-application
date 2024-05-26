import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/pages/User";
import ScrollToTop from "./Customhook";
import Theory from "./components/pages/Theory";
import Planning from "./components/pages/Planning";
import NetArt from "./components/pages/NetArt";
import NetArtPage from "./components/pages/NetArt";

function App() {
	return (
		<>
			<Router>
				<ScrollToTop />;
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />}></Route>
					<Route path="/about" exact element={<About />}></Route>
					<Route path="/user" exact element={<User />}></Route>
					<Route path="/theory" exact element={<Theory />}></Route>
					<Route path="/art" exact element={<Planning />}></Route>
					<Route path="/netart" exact element={<NetArtPage />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
