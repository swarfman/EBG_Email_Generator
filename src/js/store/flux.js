import slashes from "slashes";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLs: [{}],
			storeProductNames: [{}],
			imageURLs: [{}],
			storeProductTitles: [{}],
			STEmails: [{}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setURLInformation: e => {
				var tempStore = getStore();
				let landingPageInformation = {};
				landingPageInformation = e;
				tempStore.URLs.push(landingPageInformation);
				console.log(tempStore);
				setStore({ tempStore });
			},

			getNameofProduct: e => {
				let productNames = {};

				//FOR LAS VEGAS URL CONDITIONS

				//Get Vegas product name to search for image on search page
				if (e.substring(7, 9) === "/l" && e.substring(33, 37) != "tour") {
					let name = e.substring(33, 37);
					productNames.productName = name;
					//console.log(blogName);
				} else if (e.substring(7, 9) === "/l" && e.substring(33, 37) === "tour") {
					let name = e.substring(51, 56);
					productNames.productName = name;
				}

				//NEW YORK URL CONDITIONS

				if (e.substring(7, 9) === "/b" && e.substring(33, 41) != "new-york") {
					let name = e.substring(33, 38);
					productNames.productName = name;
				} else if (e.substring(7, 9) === "/b" && e.substring(33, 41) === "new-york") {
					let name = e.substring(60, 65);
					productNames.productName = name;
				}

				//ORLANDO URL CONDITIONS

				//GET ORLANDO BLOGNAME
				if (e.substring(7, 9) === "/o") {
					let name = e.substring(32, 37);
					productNames.productName = name;
				}

				var tempStore = getStore();
				tempStore.storeProductNames.push(productNames);
				console.log(tempStore);
				setStore({ tempStore });
			},

			sendSTEmailToAPI: email => {
				console.log(email);

				let tempObject = {
					name: "",
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
			}
		}
	};
};

export default getState;
