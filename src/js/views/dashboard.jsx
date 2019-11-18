import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			product: ""

			// initialize your state
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-10 pt-5">
						<h1 className="text-white text-center">Welcome, Sean!</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="card-group">
						<div className="card" style={{ width: "10px !important;" }}>
							<img
								src="https://via.placeholder.com/140x215"
								className="card-img-top"
								alt="..."
								height="20"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the card
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
						<div className="card" style={{ width: "10px !important;" }}>
							<img
								src="https://via.placeholder.com/140x215"
								className="card-img-top"
								alt="..."
								height="20"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the card
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
