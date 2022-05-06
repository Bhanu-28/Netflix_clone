import React from "react";
import "./home.styles.css";
function Home() {
	return (
		<div className="Home">
			<header className="header">
				<div className="story-card">
					<h1 className="story-card__title">
						Unlimited movies, TV shows and more.
					</h1>
					<h2 className="story-card__subtitle">
						Watch anywhere. Cancel anytime.
					</h2>
					<form action="" className="story-card__form">
						<h3 className="story-card__form-title">
							Ready to watch? Enter your email to create or
							restart your membership.
						</h3>
						<ul className="story-card__form-lookup">
							<input
								className="story-card__form-lookup__input"
								placeholder="Email Address"
							/>
							<input
								type="button"
								value="Get Started &rarr;"
								className="story-card__form-lookup__button"
							/>
						</ul>
					</form>
				</div>
			</header>
			<section className="features">
				<div className="feature">
					<div className="feature__card">
						<div className="feature__card__text">
							<h1 className="feature__card__text-title">
								Download your shows to watch offline.
							</h1>
							<h2 className="feature__card__text-subtitle">
								Save your favourites easily and always have
								something to watch.
							</h2>
						</div>
						<div className="feature__card__img__container">
							<img
								alt=""
								src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
							/>
						</div>
					</div>
				</div>
				<div className="feature">
					<div className="feature__card">
						<div className="feature__card__text">
							<h1 className="feature__card__text-title">
								Create profiles for children.
							</h1>
							<h2 className="feature__card__text-subtitle">
								Send children on adventures with their
								favourite characters in a space made just
								for them—free with your membership.
							</h2>
						</div>
						<div className="feature__card__img__container">
							<img
								alt=""
								src="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
							/>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<h1 className="footer__text">
					Copyright &copy; 2021 by Netflix
				</h1>
			</footer>
		</div>
	);
}

export default Home;
