import React, { useEffect } from "react";
import { Header, Anchor, Nav } from "grommet";

export default function NavBar({
	categories,
	setCurrentCategory,
	currentCategory,
}) {
	useEffect(() => {
		document.title = currentCategory;
	}, [currentCategory]);

	return (
		<Header pad="small" height="xsmall">
			<Anchor href="/" label="Florence Kamp" />
			<Nav direction="row-responsive">
				{categories.map((category) => (
					<Anchor
						className={`${currentCategory === category && `navActive`}`}
						key={category}
						label={category}
						href={`#${category}`}
						onClick={() => {
							setCurrentCategory(category);
						}}
					/>
				))}
			</Nav>
		</Header>
	);
}
