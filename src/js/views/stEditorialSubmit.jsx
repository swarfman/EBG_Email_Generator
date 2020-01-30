import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import "babel-polyfill";
import { Navbar } from "../component/navbar.jsx";

export class STEditorialSubmit extends React.Component {
	constructor() {
		super();
		this.state = {
			product: ""

			// initialize your state
		};
	}

	subtextFunction = almostSubtext => {
		if (almostSubtext.substring(11, 14) == " Me") {
			return almostSubtext.substring(0, 11) + " Mezzanine";
		} else if (almostSubtext.substring(0, 11) === "Receive Ass") {
			return "Receive Assigned Seats";
		} else if (almostSubtext.substring(11, 14) == " Sa") {
			return "Buy Now and Save";
		} else if (almostSubtext.substring(11, 14) == " sa") {
			return "Buy Now and Save";
		} else if (almostSubtext.substring(13, 14) == "<") {
			return almostSubtext.substring(0, 13);
		} else if (almostSubtext.substring(8, 9) == "<") {
			return almostSubtext.substring(0, 8);
		} else {
			return almostSubtext.substring(0, 14);
		}
	};

	scrapeProductWebPage = async (e, subtextFunction) => {
		let webScrapeObject = {};
		//console.log(e);

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
				webScrapeObject.title = title;

				// Adjust title in URL Google Analytics UTM tracking campaigns.
				let URLTitle = title.replace(/ /g, "-");
				webScrapeObject.URLTitle = URLTitle;

				let regex = new RegExp('<span class="h5 promo-text semi-bold orange">(.*)</span>', "s");

				let almostSubtext = newResponse.match(regex)[1];

				let subtext = this.subtextFunction(almostSubtext);
				webScrapeObject.subtext = subtext;

				let almostPrice = newResponse.match(/<span class="price bold">(.*)<\/span>/)[1];
				let price = almostPrice.substring(27, 30);

				webScrapeObject.price = price;

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
							<Navbar />
							<div className="row mb-5 d-flex justify-content-center">
								<div className="col-10 payNowForm text-white border">
									<form>
										<div className="text-center mt-3">
											<h1>Generate ST Editorial Eblast in One Click!</h1>
											<p className="text-muted">The future is here.</p>
										</div>
										<div className="form-row">
											<h5>Main Feature</h5>
											<div className="form-group col-md-12">
												<label htmlFor="inputName">Blog/Hero Feature</label>
												<input
													type="text"
													className="form-control"
													id="blog"
													placeholder="URL for Blog Article Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<h5 className="pt-5">New York</h5>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputName">
													<em>New York Article</em>
												</label>
												<input
													type="text"
													className="form-control"
													id="New-York-Article"
													placeholder="URL for New York Article"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputName">New York First Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product1"
													placeholder="URL for New York's 1st Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<div className="form-row d-flex justify-content-between">
											<div className="form-group col-md-6">
												<label htmlFor="inputAddress">New York Second Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product2"
													placeholder="URL for NY 2nd Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputPassword6">New York Third Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product3"
													placeholder="URL for New York's 3rd Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<h5 className="pt-5">Las Vegas</h5>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputName">
													<em>Las Vegas Article</em>
												</label>
												<input
													type="text"
													className="form-control"
													id="Las-Vegas-Article"
													placeholder="URL for Las Vegas Article"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputName">Las Vegas First Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product1"
													placeholder="URL for Las Vegas' 1st Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Las Vegas Second Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product5"
													placeholder="URL for Vegas' 2nd Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Las Vegas Third Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product6"
													placeholder="URL for Vegas' Third Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<h5 className="pt-5">Orlando</h5>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputName">
													<em>Orlando Article</em>
												</label>
												<input
													type="text"
													className="form-control"
													id="Las-Vegas-Article"
													placeholder="URL for Orlando Article"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputName">Orlando First Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product1"
													placeholder="URL for Orlando's 1st Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Orlando Second Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product5"
													placeholder="URL for Orlando's 2nd Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Orlando Third Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="product6"
													placeholder="URL for Orlando's Third Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<h5 className="pt-5">Recommended For You</h5>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputName">Recommended For You First Product</label>
												<input
													type="text"
													className="form-control"
													id="Recommended-Article-1"
													placeholder="URL for Recommended First Product"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputName">Recommended Second Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="Recommended-Article-2"
													placeholder="URL for Recommended 2nd Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Recommended Third Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="Recommended-Article-3"
													placeholder="URL for Recommended 3rd Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>

											<div className="form-group col-md-6">
												<label htmlFor="inputPhone4">Recommended Fourth Product Feature</label>
												<input
													type="text"
													className="form-control"
													id="Recommended-Article-4"
													placeholder="URL for Recommended Fourth Product Feature"
													onChange={e => {
														e.persist(
															this.scrapeProductWebPage(e).then(scraped => {
																actions.pushProductObjectToStore(scraped);
															})
														);
													}}
												/>
											</div>
										</div>
										<div className="row justify-content-center">
											<button
												type="submit"
												className="btn btn-success login col-md-10 col-lg-5 col-sm-8 col-xs-8 mb-1"
												onClick={e => {
													this.props.history.push("/ST-Editorial-Email");
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
STEditorialSubmit.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
