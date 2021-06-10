import React from "react";
import { Box } from "grommet";
import { Github, Linkedin, Instagram } from "grommet-icons";

export default function FooterEl() {
	return (
		<Box
			direction="row"
			justify="evenly"
			flex={false}
			background="dark-2"
			margin={{ top: "2%" }}
			pad={{ vertical: "2%", horizontal: "40%" }}>
			<a href="https://github.com/flokamp" target="_blank">
				<Github size="large" />
			</a>
			<a href="www.linkedin.com/in/florencekamp" target="_blank">
				<Linkedin size="large" />
			</a>
			<a href="https://www.instagram.com/flokamp/?hl=en" target="_blank">
				<Instagram size="large" />
			</a>
		</Box>
	);
}
