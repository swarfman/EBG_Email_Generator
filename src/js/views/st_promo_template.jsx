import React from "react";
import { Context } from "../store/appContext.jsx";
import { PromoEmailComponent } from "../component/st_promo_component.jsx";
import { render } from "react-dom";
import PropTypes from "prop-types";

export class PromoEmail extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<PromoEmailComponent />
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
