import React from "react";
import { Context } from "../store/appContext.jsx";
import { PromoEmailComponent } from "../component/st_promo_component.jsx";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { Navbar } from "../component/navbar.jsx";

export class PromoEmail extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<Navbar />
							<PromoEmailComponent />
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
