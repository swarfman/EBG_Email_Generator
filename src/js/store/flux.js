import slashes from "slashes";
import ls from "local-storage";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLs: [{}],
			user: [{}],
			storeProductNames: [{}],
			imageURLs: [{}],
			storeProductTitles: [{}],
			STEmails: [{}]
		},
		actions: {
			setURLInformation: e => {
				var tempStore = getStore();
				let landingPageInformation = {};
				landingPageInformation = e;
				tempStore.URLs.push(landingPageInformation);
				setStore({ tempStore });
			},
			addUser: e => {
				let newUser = {};
				newUser = e;

				fetch("http://127.0.0.1:5000/addUser", {
					method: "POST",
					body: JSON.stringify(newUser),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(response => {
						var tempStore = getStore();

						tempStore.URLs.push(newUser);
						setStore({ tempStore });
					});
			},
			login: e => {
				return fetch("http://127.0.0.1:5000/login", {
					method: "POST",
					body: JSON.stringify(e),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(response => {
						if (response.response != "ok") {
							return false;
						} else {
							return true;
						}
					})
					.catch(error => console.error("Error:", error));
			},

			sendSTPromoEmailToAPI: email => {
				//console.log(email);

				let tempObject = {
					username: ls.get("username"),
					email_type: "ST-Promo",
					body: email
				};

				fetch("http://127.0.0.1:5000/addSTEmail", {
					method: "POST",
					body: JSON.stringify(tempObject),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						//can't console.log res.json(), says it can't execute .json() function because "body stream is locked"
						return res.json();
					})
					.then(response => {
						//console.log("Success:", typeof response);
						//	console.log(response);
						let emails = getStore();
						//console.log(newValues);
						let newTempObject = slashes.strip(tempObject);
						emails.STEmails.push(newTempObject);
						setStore({ emails });
					});
			},
			sendSTEditorialEmailToAPI: email => {
				//console.log(email);

				let tempObject = {
					username: ls.get("username"),
					email_type: "ST-Editorial",
					body: email
				};

				fetch("http://127.0.0.1:5000/addSTEditorialEmail", {
					method: "POST",
					body: JSON.stringify(tempObject),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						//can't console.log res.json(), says it can't execute .json() function because "body stream is locked"
						return res.json();
					})
					.then(response => {
						//console.log("Success:", typeof response);
						//	console.log(response);
						let emails = getStore();
						//console.log(newValues);
						let newTempObject = slashes.strip(tempObject);
						emails.STEmails.push(newTempObject);
						setStore({ emails });
					});
			}
		}
	};
};

export default getState;
