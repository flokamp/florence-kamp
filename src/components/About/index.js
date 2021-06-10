import React from "react";
import { Box, Image, Heading, Text } from "grommet";
import headshotImage from "../../assets/headshot.jpg";

export default function About() {
	return (
		<Box margin={{ top: "large" }} wrap={true} justify="center" direction="row">
			<Box
				border={{ color: "dark-1", size: "medium" }}
				margin="small"
				width="medium">
				<Image src={headshotImage} fit="cover" />
			</Box>
			<Box margin="small" width="medium">
				<Heading
					level="2"
					weight="400"
					margin={{
						bottom: "medium",
					}}>
					As a uix designer and full-stack developer, I guess you could say I'm
					like the swiss army knife of software.
				</Heading>
				<Text alignSelf="start" size="large">
					If I'm not sketching prototypes or writing code, I'm probably playing
					chess.
				</Text>
			</Box>
		</Box>
	);
}
