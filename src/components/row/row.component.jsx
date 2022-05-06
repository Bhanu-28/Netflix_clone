import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { IMAGE_BASE_URL } from "../../requests.js";
import "./row.styles.css";

// row component

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(
				movie?.name || movie?.original_name || "netflix",
			)
				.then((url) => {
					const urlParams = new URLSearchParams(
						new URL(url).search,
					);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="row">
			<h1 className="row__title">{title}</h1>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						src={`${IMAGE_BASE_URL}${
							isLargeRow
								? movie.poster_path
								: movie.backdrop_path
						}`}
						alt={movie.name}
						onClick={() => handleClick(movie)}
						className={`row__poster  ${
							isLargeRow && "row__posterLarge"
						} `}
					/>
				))}
			</div>
			{trailerUrl && (
				<Youtube videoId={trailerUrl} opts={opts} />
			)}
		</div>
	);
};

export default Row;
