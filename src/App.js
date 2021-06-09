import React, { useState } from "react";
import Nav from "./components/NavBar";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Grommet } from "grommet";

const myTheme = {
	global: {
		colors: {
			focus: "status-ok",
			active: "#5044ee",
			black: "#121619",
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
			family: "Roboto",
		},
	},
	button: {
		default: {
			border: {
				width: "1px",
			},
			padding: {
				horizontal: "12px",
			},
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
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}></Nav>
			<main>
				{currentCategory === "About" && <About />}
				{currentCategory === "Portfolio" && <Portfolio />}
				{currentCategory === "Resume" && <Resume />}
				{currentCategory === "Contact" && <ContactForm />}
			</main>
			<Footer />
		</Grommet>
	);
}

export default App;
