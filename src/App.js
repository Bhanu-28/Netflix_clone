import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

// stylesheets
import "./App.css";

// custom components

import Navbar from "./components/navbar/navbar.component";
import MovieGallery from "./components/movie-gallery/movie-gallery.component";

function App() {
	return (
		<div className="app">
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MovieGallery} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
