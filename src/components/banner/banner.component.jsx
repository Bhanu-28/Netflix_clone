import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { requests, IMAGE_BASE_URL } from "../../requests";
import "./banner.styles.css";

function Banner() {
	const [movie, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(
				requests.fetchNetflixOriginals,
			);
			setMovies(
				request.data.results[
					Math.floor(
						Math.random() * request.data.results.length - 1,
					)
				],
			);
			return request;
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n
			? str.substr(0, n - 1) + "..."
			: str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title ||
						movie?.name ||
						movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">
						My List
					</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
