import React, { useEffect } from "react";

function Nav(props) {
	const { categories, setCurrentCategory, currentCategory } = props;

	useEffect(() => {
		document.title = currentCategory;
	}, [currentCategory]);

	return (
		<header className="flex-row">
			<h3>Florence Kamp</h3>
			<nav>
				<ul className="flex-row">
					{categories.map((category) => (
						<li
							className={`${currentCategory === category && `navActive`}`}
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
