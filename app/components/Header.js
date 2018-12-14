import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
			    <div className="navbar navbar-dark bg-dark shadow-sm">
			        <div className="container d-flex justify-content-between">
						<a href="#" className="navbar-brand d-flex align-items-center">
							<strong>Album</strong>
						</a>
			        </div>
			    </div>
			</header>
		);
	}
}

export default Header;