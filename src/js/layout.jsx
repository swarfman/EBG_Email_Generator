import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext.jsx";
import { Submit } from "./views/submit.jsx";
import { STEditorialSubmit } from "./views/stEditorialSubmit.jsx";
import { PromoEmail } from "./views/st_promo_template.jsx";
import { STEditorialEmail } from "./views/st_editorial_template.jsx";
import { Login } from "./views/login.jsx";
import { Dashboard } from "./views/dashboard.jsx";
import { SignUp } from "./views/signup.jsx";
import { EmailHistory } from "./views/emailHistory.jsx";
import { Navbar } from "./component/navbar.jsx";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column bg-dark">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/email-history" component={EmailHistory} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/ST-Promo-submit" component={Submit} />
						<Route exact path="/ST-Editorial-submit" component={STEditorialSubmit} />
						<Route path="/promo-email" component={PromoEmail} />
						<Route path="/ST-Editorial-Email" component={STEditorialEmail} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
