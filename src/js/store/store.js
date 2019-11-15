const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLs: [{}],
			storeProductNames: [{}],
			imageURLs: [{}],
			storeProductTitles: [{}]
		},

		actions: {
			pushProduct1ImgSrc: e => {
				var tempStore = getStore();
				let productImages = {};
				productImages.product1 = e;

				tempStore.imageURLs.push(productImages);
				console.log(tempStore);
				setStore({ tempStore });
			},
			setURLInformation: e => {
				var tempStore = getStore();
				let landingPageInformation = {};
				landingPageInformation = e;
				tempStore.URLs.push(landingPageInformation);
				setStore({ tempStore });
			},

			getNameofProduct: e => {
				let productNames = {};

				//FOR LAS VEGAS URL CONDITIONS

				//Get Vegas product name to search for image on search page
				if (
					e.substring(7, 9) === "/l" &&
					e.substring(33, 37) != "tour"
				) {
					let name = e.substring(33, 37);
					productNames.productName = name;
					//console.log(blogName);
				} else if (
					e.substring(7, 9) === "/l" &&
					e.substring(33, 37) === "tour"
				) {
					let name = e.substring(51, 56);
					productNames.productName = name;
				}

				//NEW YORK URL CONDITIONS

				if (
					e.substring(7, 9) === "/b" &&
					e.substring(33, 41) != "new-york"
				) {
					let name = e.substring(33, 38);
					productNames.productName = name;
				} else if (
					e.substring(7, 9) === "/b" &&
					e.substring(33, 41) === "new-york"
				) {
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
			}

			// updateProductURLs: e => {
			// 	var tempStore = getStore();
			// 	tempStore.URLs.push(e);
			// 	console.log(tempStore);
			// 	setStore({ tempStore });
			// }

			// pushProductTitle: e => {
			// 	var productTitles = {};
			// 	console.log(e);
			// 	productTitles.productTitle = e;
			// 	var tempStore = getStore();
			// 	tempStore.storeProductTitles.push(productTitles);
			// 	console.log(tempStore);
			// 	setStore({ tempStore });
			// }
		}
	};
};

export default getState;
