import React, { useEffect } from "react";

function Nav(props) {
	const { categories, setCurrentCategory, currentCategory } = props;

	useEffect(() => {
		document.title = currentCategory;
	}, [currentCategory]);

	return (
		<header className="flex-row space-between">
			<h2>
				<a href="/">Florence Kamp</a>
			</h2>
			<nav>
				<ul className="flex-row">
					{categories.map((category) => (
						<li
							className={`mx-1 ${currentCategory === category && `navActive`}`}
							key={category}>
							<a
								href={`#${category}`}
								onClick={() => {
									setCurrentCategory(category);
								}}>
								{category}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
