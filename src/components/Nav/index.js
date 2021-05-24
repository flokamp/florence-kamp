import React, { useEffect } from "react";

function Nav(props) {
	const { categories, setCurrentCategory, currentCategory } = props;

	useEffect(() => {
		document.title = currentCategory;
	}, [currentCategory]);

	return (
		<header>
			<a href="/"> Florence Kamp </a>

			<nav>
				<ul>
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
