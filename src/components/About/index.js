import React from "react";
import { Box, Image, Heading, Text } from "grommet";
import headshotImage from "../../assets/headshot.jpg";

export default function About() {
	return (
		<Box justify="center" pad="large" wrap={true} direction="row">
			<Box pad="small" height="320px" width="320px">
				<Image src={headshotImage} fit="cover" />
			</Box>
			<Box pad="small">
				<Heading
					level="3"
					margin={{
						bottom: "medium",
					}}>
					As a <b>UIX designer</b> & <b>full-stack developer</b>, I guess you
					could say I'm the swiss army knife of software.
				</Heading>
				<Text alignSelf="start" size="medium">
					If I'm not sketching prototypes or writing code, I'm probably playing
					chess.
				</Text>
			</Box>
		</Box>
	);
}
