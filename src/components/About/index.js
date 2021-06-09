import React from "react";
import { Box, Image, Grid, Heading, Text } from "grommet";
import headshotImage from "../../assets/headshot.jpg";

export default function About() {
	return (
		<Grid
			pad={{ horizontal: "10%" }}
			wrap="true"
			areas={[
				{ name: "headshot", start: [0, 0], end: [0, 0] },
				{ name: "bio", start: [1, 0], end: [1, 0] },
			]}
			columns={["medium", "flex"]}
			rows={["flex"]}>
			<Box gridArea="headshot" pad={{ horizontal: "10%" }}>
				<Image src={headshotImage} width="100%" />
			</Box>
			<Box gridArea="bio">
				<Heading
					level="2"
					margin={{
						bottom: "medium",
					}}>
					Designer & developer — the swiss army knife of software
				</Heading>
				<Text alignSelf="start" size="medium">
					If I'm not sketching prototypes or writing code, I'm probably playing
					chess.
				</Text>
			</Box>
		</Grid>
	);
}
