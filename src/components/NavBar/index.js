import React, { useEffect } from "react";
import { Header, Anchor, Nav, Menu, ResponsiveContext } from "grommet";
export default function NavBar({
	categories,
	setCurrentCategory,
	currentCategory,
}) {
	useEffect(() => {
		document.title = currentCategory;
	}, [currentCategory]);

	return (
		<Header height="small" background="light-1" pad={{ horizontal: "8%" }}>
			<Anchor size="xxlarge" href="/" label="Florence Kamp" />
			<ResponsiveContext.Consumer>
				{(responsive) =>
					responsive === "small" ? (
						<Menu
							items={categories.map((category) => ({
								label: category,
								onClick: () => {
									setCurrentCategory(category);
								},
							}))}
						/>
					) : (
						<Nav direction="row">
							{categories.map((category) => (
								<Anchor
									size="large"
									weight="normal"
									key={category}
									label={category}
									href={`#${category}`}
									onClick={() => {
										setCurrentCategory(category);
									}}
								/>
							))}
						</Nav>
					)
				}
			</ResponsiveContext.Consumer>
		</Header>
	);
}
