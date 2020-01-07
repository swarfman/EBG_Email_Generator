import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { EmailCard } from "../component/emailCard.jsx";
import ls from "local-storage";
import { Navbar } from "../component/navbar.jsx";

export class EmailHistory extends React.Component {
	constructor() {
		super();
		this.state = {
			results: []
		};
	}

	componentDidMount = () => {
		let tempObject = {
			username: ls.get("username")
		};

		fetch("http://127.0.0.1:5000/getAllEmails", {
			method: "POST",
			body: JSON.stringify(tempObject),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				console.log("Success:", typeof response);
				//console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ results: response.data.emails });
					console.log(this.state);
				} else {
					this.setState({ results: [] });
				}
			})

			.catch(error => console.error("Error:", error));
	};

	componentDidUpdate = prevProps => {
		// Typical usage (don't forget to compare props):
		if (this.props !== prevProps) {
			let tempObject = {
				username: ls.get("username")
			};
			fetch("http://127.0.0.1:5000/getAllEmails", {
				method: "POST",
				body: JSON.stringify(tempObject),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response => {
					console.log("Success:", typeof response);
					//console.log(response);
					if (typeof response === typeof {}) {
						this.setState({ results: response.data.emails });
						console.log(this.state);
					} else {
						this.setState({ results: [] });
					}
				})

				.catch(error => console.error("Error:", error));
		}
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container-fluid">
							<Navbar />
							<div className="row justify-content-center">
								<h1 className="text-white">{ls.get("username")} History</h1>
							</div>
							<div className="row pt-5 text-white pb-2 pl-5">
								<h3>Email History</h3>
							</div>
							<div
								className="row m-3 card-columns d-flex justify-content-between"
								style={{ overflowX: "scroll" }}>
								{this.state.results.map((elem, index) => {
									return (
										<EmailCard
											key={index}
											index={index}
											timestamp={elem.timestamp}
											email_type={elem.email_type}
											body={elem.body}
											id={elem.id}
										/>
									);
								})}
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
EmailHistory.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
