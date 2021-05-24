import React from "react";
import headshotImage from "../../assets/headshot.jpg";

function About() {
	return (
		<section id="about">
			<div className="headshot-container">
				<img id="headshot" src={headshotImage} alt="headshot" />
			</div>
			<div className="px-2" style={{ width: "60%" }}>
				<h1>Designer & developer — the swiss army knife of software</h1>
				<h3>
					If I'm not sketching prototypes or writing code, I'm probably playing
					chess.
				</h3>
			</div>
		</section>
	);
}

export default About;
