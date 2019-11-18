import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext.jsx";
import { Submit } from "./views/submit.jsx";
import { PromoEmail } from "./views/st_promo_template.jsx";
import { Home } from "./views/home-1.jsx";
import { Dashboard } from "./views/dashboard.jsx";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100 bg-dark">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/submit" component={Submit} />
						<Route path="/promo-email" component={PromoEmail} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
