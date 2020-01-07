import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import ls from "local-storage";

export class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}

	setLocalStorage = e => {
		let username = this.state.username;
		let password = this.state.password;
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
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
												<label htmlFor="inputName">Password</label>
												<input
													type="password"
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
										actions.login(this.state).then(e => {
											if (e == true) {
												this.props.history.push("dashboard");
												this.setLocalStorage();
											}
										});
										// console.log(ls.get("username", "password"));
										// console.log(ls.get("password"));
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
Login.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
