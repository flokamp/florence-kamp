import React from "react";
import headshotImage from "../../assets/headshot.jpg";

function About() {
	return (
		<section id="about" className="flex-row">
			<div className="headshot-circle">
				<img id="headshot" src={headshotImage} alt="headshot" />
			</div>
			<div className="px-2" style={{ width: "60%" }}>
				<h1>Hi, nice to meet you 👋</h1>
				<h4>
					My name is Florence Kamp. I'm a UIX designer and full stack developer.
				</h4>
				<p>
					I've always loved designing interfaces and wanting to learn the skills
					to bring my own projects to life, I started learning how to code.
				</p>
			</div>
		</section>
	);
}

export default About;
