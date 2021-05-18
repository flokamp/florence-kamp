import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
	const categories = ["About", "Portfolio", "Resume", "Contact"];
	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}></Nav>
			<main>
				{currentCategory === "About" && <About />}
				{currentCategory === "Portfolio" && <Portfolio />}
				{currentCategory === "Resume" && <Resume />}
				{currentCategory === "Contact" && <Contact />}
			</main>
		</div>
	);
}

export default App;
