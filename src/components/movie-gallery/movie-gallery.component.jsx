import React from "react";
import { requests } from "../../requests";
import "./movie-gallery.styles.css";
import Row from "../row/row.component";
import Banner from "../banner/banner.component";
function MovieGallery() {
	return (
		<div class="gallery">
			<Banner />
			<d>
				<Row
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row
					title="Trending Now"
					fetchUrl={requests.fetchTrending}
				/>
				<Row
					title="Top Rated"
					fetchUrl={requests.fetchTopRated}
				/>
				<Row
					title="Action Movies"
					fetchUrl={requests.fetchActionMovies}
				/>
				<Row
					title="Comedy Movies"
					fetchUrl={requests.fetchComedyMovies}
				/>
				<Row
					title="Horror Movies"
					fetchUrl={requests.fetchHorrorMovies}
				/>
				<Row
					title="Romantic Movies"
					fetchUrl={requests.fetchRomanceMovies}
				/>
				<Row
					title="Documentaries"
					fetchUrl={requests.fetchDocumentaries}
				/>
			</d>
		</div>
	);
}

export default MovieGallery;
