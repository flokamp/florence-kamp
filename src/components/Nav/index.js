import React, { useEffect } from "react";

function Nav(props) {
	const { categories, setCurrentCategory, currentCategory } = props;

	useEffect(() => {
		document.title = currentCategory.name;
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
