import React from "react";
import { Footer } from "grommet";
import { Github, Linkedin, Instagram } from "grommet-icons";

export default function FooterEl() {
	return (
		<Footer background="light-2">
			<Github />
			<Linkedin />
			<Instagram />
		</Footer>
	);
}
