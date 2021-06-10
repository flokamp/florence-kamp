import React, { useState } from "react";
import Nav from "./components/NavBar";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Grommet, Main, ResponsiveContext } from "grommet";

const myTheme = {
	global: {
		colors: {
			"light-1": "#E2EDF2",
			"dark-2": "#447388",
			focus: "status-ok",
			active: "#5044ee",
			black: "#0D1821",
			border: {
				light: "rgba(0,0,0,0.33)",
			},
			brand: "#121619",
			control: {
				light: "brand",
			},
			focus: "none",
			placeholder: "#AAAAAA",
			selected: "brand",
			text: {
				light: "#444444",
			},
		},
		font: {
			family: "Space Mono",
		},
	},

	formField: {
		border: {
			color: "",
			side: "all",
		},
		label: {
			margin: {
				horizontal: "xsmall",
			},
		},
	},
};

function App() {
	const categories = ["About", "Portfolio", "Resume", "Contact"];
	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<Grommet theme={myTheme}>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main>
						<Nav
							categories={categories}
							setCurrentCategory={setCurrentCategory}
							currentCategory={currentCategory}
						/>
						{currentCategory === "About" && <About />}
						{currentCategory === "Portfolio" && <Portfolio />}
						{currentCategory === "Resume" && <Resume />}
						{currentCategory === "Contact" && <ContactForm />}
						<Footer />
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	);
}

export default App;
