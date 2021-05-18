import React from "react";
import headshotImage from "../../assets/headshot.jpg";

function About() {
	return (
		<section>
			<img
				src={headshotImage}
				style={{ width: "40%", float: "left" }}
				className='mx-2'
				alt='headshot'
			/>
			<div className='mx-1'>
				<h1 id='about'>Hello!</h1>
				<p>
					My name is Florence Kamp. I'm a UIX designer and full stack developer.
				</p>
			</div>
		</section>
	);
}

export default About;
