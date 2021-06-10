import React from "react";
import { Box } from "grommet";
import { Github, Linkedin, Instagram } from "grommet-icons";

export default function FooterEl() {
	return (
		<Box
			direction="row"
			justify="evenly"
			flex={false}
			background="light-3"
			margin={{ top: "2%" }}
			pad={{ vertical: "2%", horizontal: "40%" }}>
			<Github />
			<Linkedin />
			<Instagram />
		</Box>
	);
}
