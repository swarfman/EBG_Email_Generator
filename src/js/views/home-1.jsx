import React from "react";
import "../../styles/home.scss";

export class Home extends React.Component {
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
						<h1 className="text-white text-center">Welcome to the Future of Email Creation.</h1>
					</div>
				</div>
				<div className="row justify-content-center pt-5 mt-5">
					<div className="col-10 text-white border p-5">
						<form>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputName">Username</label>
									<input type="text" className="form-control" id="username" placeholder="Username" />
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputName">Password</label>
									<input type="text" className="form-control" id="password" placeholder="Password" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
