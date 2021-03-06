import React from "react";
import { Context } from "../store/appContext.jsx";
import { STEditorialComponent } from "../component/st_editorial_component.jsx";
import { Navbar } from "../component/navbar.jsx";

export class STEditorialEmail extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<Navbar />
							<STEditorialComponent />
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
