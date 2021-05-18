import React from "react";

function Nav(props) {
	const { contactSelected, setContactSelected } = props;

	const handleClick = (item) => {
		console.log(item);
		return item;
	};

	return (
		<header className='flex-row px-1'>
			<h2>
				<a data-testid='link' href='/'>
					Florence Kamp
				</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					<li className='mx-2'>
						<a href='#about' onClick={() => setContactSelected(false)}>
							about
						</a>
					</li>
					<li className='mx-2'>
						<a href='#portfolio' onClick={() => setContactSelected(false)}>
							portfolio
						</a>
					</li>
					<li className='mx-2'>
						<a href='#resume' onClick={() => setContactSelected(false)}>
							resume
						</a>
					</li>
					<li className={`mx-2 ${contactSelected && "navActive"}`}>
						<a onClick={() => setContactSelected(true)}>contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
