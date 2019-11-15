import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import "babel-polyfill";

export class Submit extends React.Component {
	constructor() {
		super();
		this.state = {
			product: ""

			// initialize your state
		};
	}

	subtextFunction = almostSubtext => {
		console.log(almostSubtext.substring(13, 14));

		if (almostSubtext.substring(11, 14) == " Me") {
			return almostSubtext.substring(0, 11) + " Mezzanine";
		} else if (almostSubtext.substring(0, 11) === "Receive Ass") {
			return "Receive Assigned Seats";
		} else if (almostSubtext.substring(11, 14) == " Sa") {
			return "Buy Now and Save";
		} else if (almostSubtext.substring(13, 14) == "<") {
			return almostSubtext.substring(0, 13);
		} else if (almostSubtext.substring(8, 9) == "<") {
			return almostSubtext.substring(0, 8);
		} else {
			return almostSubtext.substring(0, 14);
		}
	};

	scrapeWebPage = async (e, subtextFunction) => {
		let webScrapeObject = {};
		return await fetch(e.target.value)
			.then(response => {
				let newResponse = response.text();
				//console.log(newResponse);
				return newResponse;
			})
			.then(newResponse => {
				//console.log(newResponse);
				const url = e.target.value;

				webScrapeObject.URL = url;

				var title = newResponse.match(/<h1 class="semi-bold h1">(.*?)<\/h1>/)[1];
				console.log(title);
				webScrapeObject.title = title;

				let regex = new RegExp('<span class="h5 promo-text semi-bold orange">(.*)</span>', "s");

				let almostSubtext = newResponse.match(regex)[1];

				let subtext = this.subtextFunction(almostSubtext);
				webScrapeObject.subtext = subtext;
				console.log(webScrapeObject);

				let almostPrice = newResponse.match(/<span class="price bold">(.*)<\/span>/)[1];
				let price = almostPrice.substring(27, 30);

				webScrapeObject.price = price;

				// if (newResponse.match(/<img src="(.*)125x125.jpg"/)[1] != "") {
				// 	webScrapeObject.imageAddress = "https://via.placeholder.com/300x140";
				// } else {
				// 	let almostImage = newResponse.match(/<img src="(.*)125x125.jpg"/)[1];
				// 	let image = almostImage + "125x125.jpg";
				// 	webScrapeObject.imageAddress = image;
				// }
				webScrapeObject.imageAddress = "https://via.placeholder.com/300x140";
				console.log(webScrapeObject);
				return webScrapeObject;
			});
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container-fluid">
							<div className="row mb-5 d-flex justify-content-center">
								<div className="col-10 payNowForm text-white border">
									<form>
										<div className="text-center mt-3">
											<h1>Generate ST Promo Eblast in One Click!</h1>
											<p className="text-muted">The future is here.</p>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputName">Blog/Hero Feature</label>
												<input
													type="text"
													className="form-control"
													id="blog"
													placeholder="URL for Blog Article Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputName">First Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product1"
													placeholder="URL for First Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="form-row d-flex justify-content-between">
											<div className="form-group col-md-6">
												<label htmlFor="inputAddress">Second Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product2"
													placeholder="URL for Second Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputPassword6">Third Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product3"
													placeholder="URL for Third Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Fourth Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product4"
													placeholder="URL for 4th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Fifth Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product5"
													placeholder="URL for 5th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Sixth Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product6"
													placeholder="URL for 6th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Seventh Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product7"
													placeholder="URL for 7th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">8th Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product8"
													placeholder="URL for 8th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">9th Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product9"
													placeholder="URL for 9th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">10th Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product10"
													placeholder="URL for 10th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">11th Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product11"
													placeholder="URL for 11th Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeWebPage(e).then(scraped => {
																actions.setURLInformation(scraped);
															})
														);
														actions.getNameofProduct(e.target.value);
													}}
												/>
											</div>
										</div>
										<div className="row justify-content-center">
											<button
												type="submit"
												className="btn btn-success login col-md-10 col-lg-5 col-sm-8 col-xs-8 mb-1"
												onClick={e => {
													this.props.history.push("/promo-email");
												}}>
												Generate
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Submit.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
