import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/pages/User";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />}></Route>
					<Route path="/about" exact element={<About />}></Route>
					<Route path="/user" exact element={<User />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
