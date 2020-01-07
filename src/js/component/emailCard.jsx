import React, { Component } from "react";
import PropTypes from "prop-types";
import slashes from "slashes";
import ls from "local-storage";

export const EmailCard = props => {
	return (
		<div>
			<div className="card m-3" style={{ width: "18rem" }}>
				<div className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.email_type}</h5>
					<p className="card-text">
						Date Created: <br />
						{props.timestamp}
						<br />
						&nbsp;
						<br />*<em>If downloading from here, manually add header style tag back into code.</em>
					</p>
					<div className="row d-flex justify-content-between">
						<a
							href="#"
							className="ml-3 btn btn-primary"
							onClick={() => {
								//ADD STR.REPLACE TO TURN JS COMMENT INTO HTML COMMENT ON DOWNLOAD
								let email = slashes.strip(props.body);
								let filename = props.email_type + ".html";
								var element = document.createElement("a");
								element.setAttribute("href", "data:text;charset=utf-8," + encodeURIComponent(email));
								element.setAttribute("download", filename);

								element.style.display = "none";
								document.body.appendChild(element);
								element.click();
								document.body.removeChild(element);
							}}>
							Download
						</a>
						<a
							href="#"
							className="btn btn-danger mr-3"
							onClick={() => {
								let tempObject = {
									username: ls.get("username"),
									id: props.id
								};
								fetch("http://127.0.0.1:5000/deleteEmail/" + props.id, {
									method: "DELETE",
									body: JSON.stringify(tempObject),
									headers: {
										"Content-Type": "application/json"
									}
								}).then(res => {
									return res.json();
								});
							}}>
							Delete
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
EmailCard.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func,
	timestamp: PropTypes.string,
	email_type: PropTypes.string,
	body: PropTypes.string,
	id: PropTypes.number
};
