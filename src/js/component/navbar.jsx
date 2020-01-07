import React from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";

//CREATE CONDITIONAL STATEMENTS FOR LINK IN DASHBOARD LINK
export const Navbar = () => {
	if (ls.get("username")) {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/dashboard">
					<span className="navbar-brand mb-0 h1">EBG-E Generator</span>
				</Link>
				<div className="ml-auto">
					<Link to="/email-history">
						<button className="btn btn-primary">Email History</button>
					</Link>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">EBG-E Generator</span>
				</Link>
				<div className="ml-auto">
					<Link to="/email-history">
						<button className="btn btn-primary">Email History</button>
					</Link>
				</div>
			</nav>
		);
	}
};
