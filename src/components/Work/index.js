import React from "react";
import {
	Card,
	CardBody,
	Image,
	Box,
	Heading,
	Text,
	Grid,
	Button,
} from "grommet";

import zingImg from "../../assets/zing.png";
import whoyougonnacallImg from "../../assets/who-you-gonna-call.png";
import budgieImg from "../../assets/budgie.png";
import techblogImg from "../../assets/techblog.png";
import sidenotesImg from "../../assets/note-taker.png";
import teamprofileImg from "../../assets/team-profile-generator.png";

export default function Work() {
	const projects = [
		{
			title: "Zing",
			description:
				"A Socket.IO powered app for creating and joining live chat rooms.",
			git: "https://github.com/JamesLuu96/zing-chat",
			demo: "https://zing2.herokuapp.com/",
			image: zingImg,
		},
		{
			title: "Who you gonna call?",
			description:
				"An app that helps streamline contact with local reps managing the pandemic.",
			git: "https://github.com/JPKashlak/who-you-gonna-call",
			demo: "https://jpkashlak.github.io/who-you-gonna-call/",
			image: whoyougonnacallImg,
		},
		{
			title: "Budgie",
			description:
				"An app that allows you to easily track your income and expenses.",
			git: "https://github.com/flokamp/budget-tracker",
			demo: "https://fathomless-temple-08454.herokuapp.com/",
			image: budgieImg,
		},
		{
			title: "Tech Thoughts",
			description: "A blog where tech lovers can create and engage with posts.",
			git: "https://github.com/flokamp/tech-blog",
			demo: "https://salty-castle-11685.herokuapp.com/login",
			image: techblogImg,
		},
		{
			title: "Sidenotes",
			description: "A simple app for taking quick notes.",
			git: "https://github.com/flokamp/note-taker-2",
			demo: "https://my-note-taker-project.herokuapp.com/",
			image: sidenotesImg,
		},
		{
			title: "Team Profile Generator",
			description: "An app that generates a team profile in HTML.",
			git: "https://github.com/flokamp/team-profile-generator",
			demo: "https://flokamp.github.io/team-profile-generator/",
			image: teamprofileImg,
		},
	];

	return (
		<Grid
			pad="large"
			gap="large"
			columns={{ count: "fit", size: ["small", "medium"] }}
			justifyContent="center">
			{projects.map((project) => (
				<Card
					align="start"
					round="4px"
					elevation="small"
					width="medium"
					key={`${project.title}`}>
					<CardBody height="xsmall">
						<Image
							fit="cover"
							src={`${project.image}`}
							a11yTitle={`${project.title}`}
						/>
					</CardBody>
					<Box pad="small" responsive={true}>
						<Box background="light">
							<Heading level="4" margin="xsmall">
								{`${project.title}`}
							</Heading>
							<Text margin="xsmall" size="small">
								{`${project.description}`}
							</Text>
							<Box align="start" fill="horizontal" direction="row">
								<Button
									size="xsmall"
									margin="xsmall"
									href={`${project.git}`}
									label="Github"
								/>
								<Button
									margin="xsmall"
									size="xsmall"
									href={`${project.demo}`}
									label="Demo"
								/>
							</Box>
						</Box>
					</Box>
				</Card>
			))}
		</Grid>
	);
}
