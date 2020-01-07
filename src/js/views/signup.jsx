import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			full_name: "",
			username: "",
			password: ""

			// initialize your state
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container-fluid">
							<div className="row d-flex justify-content-center">
								<div className="col-10 pt-5">
									<h1 className="text-white text-center">
										Sign up! EBG Email Generation in Two Clicks - for real.
									</h1>
								</div>
							</div>
							<div className="row justify-content-center pt-5 mt-5">
								<div className="col-10 text-white border p-5">
									<form>
										<div className="form-row">
											<div className="form-group col-12">
												<label htmlFor="inputName">Your Full Name</label>
												<input
													type="text"
													className="form-control"
													id="fullName"
													placeholder="Full Name"
													value={this.state.full_name}
													onChange={e =>
														this.setState({
															full_name: e.target.value
														})
													}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputName">Create Username</label>
												<input
													type="text"
													className="form-control"
													id="username"
													placeholder="Username"
													value={this.state.username}
													onChange={e =>
														this.setState({
															username: e.target.value
														})
													}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputName">Create Password</label>
												<input
													type="text"
													className="form-control"
													id="password"
													placeholder="Password"
													value={this.state.password}
													onChange={e =>
														this.setState({
															password: e.target.value
														})
													}
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="row d-flex justify-content-center pt-5">
								<button
									type="button"
									className="col-6 btn btn-success justify-content-center text-white"
									onClick={e => {
										actions.addUser(this.state);
										this.props.history.push("/login");
									}}>
									Login
								</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
SignUp.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
