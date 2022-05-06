import React, { useEffect, useState } from "react";
import { ReactComponent as NetflixLogo } from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import "./navbar.styles.css";

function Navbar() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<NetflixLogo className="logo" />
			<img src={avatar} className="avatar" alt="avatar" />
		</div>
	);
}

export default Navbar;
