import React from "react";

function Portfolio() {
	const projects = [
		{
			title: "Zing",
			description:
				"An app powered by Socket.IO that allows users to create and join live chat rooms.",
			git: "https://github.com/JamesLuu96/zing",
			demo: "https://zing-chat.herokuapp.com/login",
			image: "zing",
		},
		{
			title: "Who you gonna call?",
			description:
				"An app that helps streamline contact with local reps in charge of managing the pandemic.",
			git: "https://github.com/JPKashlak/who-you-gonna-call",
			demo: "https://jpkashlak.github.io/who-you-gonna-call/",
			image: "who-you-gonna-call",
		},
		{
			title: "Budgie",
			description:
				"An app that allows you to easily track your income and expenses.",
			git: "https://github.com/flokamp/budget-tracker",
			demo: "https://fathomless-temple-08454.herokuapp.com/",
			image: "budgie",
		},
		{
			title: "Tech Thoughts",
			description: "A blog where tech lovers can create and engage with posts.",
			git: "https://github.com/flokamp/tech-blog",
			demo: "https://salty-castle-11685.herokuapp.com/login",
			image: "techblog",
		},
		{
			title: "Sidenotes",
			description: "An app for taking quick notes.",
			git: "https://github.com/flokamp/note-taker-2",
			demo: "https://my-note-taker-project.herokuapp.com/",
			image: "note-taker",
		},
		{
			title: "Team Profile Generator",
			description: "An app that generates a team profile in HTML.",
			git: "https://github.com/flokamp/team-profile-generator",
			demo: "https://flokamp.github.io/team-profile-generator/",
			image: "team-profile-generator",
		},
	];

	return (
		<div>
			<div>
				{projects.map((project) => (
					<div class='project-card'>
						<span class='project-info'>
							<h4>{project.title}</h4>
						</span>

						<img
							style={{ position: "relative" }}
							src={require(`../../assets/projects/${project.image}.png`)}
							className='img-thumbnail mx-1'
							alt=''
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;
