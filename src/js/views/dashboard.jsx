import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import ls from "local-storage";
import { Navbar } from "../component/navbar.jsx";

export class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			product: ""

			// initialize your state
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<Navbar />
				<div className="row d-flex justify-content-center">
					<div className="col-10 pt-5">
						<h1 className="text-white text-center">Welcome, {ls.get("username")}</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="card-columns d-flex justify-content-between">
						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src="https://lh3.googleusercontent.com/D844zrcxhP38TSuXSnRnNvQEmJ8ZziHlnNxED_mA7CMR1aQ9sBxX5QVD7YWYfVaJLTq5AlqT5r_vlOX-Eig4Bp5ynzca5ezaBMX_5HEOv2zTqpbfO2t-ATN5UyDrZv0GI5xhiSvG6yv1eY5ArYNgTexk7q8tzMmM2KZwaDCwM3GEIBEQVnpCe2-A6uRjwxRfibue_bjJNh5L-WgSQ9O9N_eaYkVfBfA4-peD8MFEWxXBou-GA37XE2B-TMpshgIqvbvI1o-aKUtN7LPxsrrBgdGtthqlic4OO7QHKNeEGx-u1Gk4BprmoVH3OJA_xBs18Rl5gJS_PfkU1q6fvDeMCH8riqQi4DugLQcVmRMW1OLqmKNeE2UDccTPs19LVogt1b2jOyvL77fh_cPhl6GG2eFFVMunPoKpHFp73_HLeKB6vh76DctlVYOPDCyPWZHpCtFp_-Qd15W_6A1Cnk9pZSlgIB5m7sDKdGxcS06g1pCTJ7p6duz52jwGnm1Qa1-LVNtDqQL-CE8SEXJB760luIlWQs6ESUfQkE_OjS9f31oc9v7LQwYt_xuK93FmEFWQDKVMrevcgFA6FXc1bR1yFqfJDi-ORFQnFtrkigmPpLSUbPq8GZGRyBs72XK1olL78izC8sLicICpWeBkZPdOUCgOJMQuSsAWKy0LZTurvQFB0lvmPiu4ig=w280-h430-no"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">BOV Newsletter</h5>
								<p className="card-text">
									Generate BOV newsletter with your chosen products. Just enter the URL!
								</p>
								<a href="#" className="btn btn-primary">
									Generate BOV Email Newsletter
								</a>
							</div>
						</div>
						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src="https://lh3.googleusercontent.com/K7eamBEYvO7eQm5znVaM2xzbNDQZRmZC7_-oFh9KxpZODvLTWT7_MoVjVL8yofCGyOkdR7DNHI2qQB00HFR0dZbzc2A-LBFRnSLcyJ5gYiMsKVYGH9GnvwVPX_8NLECb8xSB790NdpNIg_VUZJrEeEy0M6xSCElDWzO2d7DFaho-dI58SycCp2hZQh1BglMwCiKKYt1HSm32fi-QW1IOJJwTqIa0xRYLFpXu7H36q7XR60TB2SFJq62_wVMKJ_yXXxSkzkankrtSh4aoaJxejFgp_H79-Kpq5VQs04bH5nKHpxuRSh2VdBqOG4C0iTuuYcc-uZkPjdnQ8SMR9ov1m9GG1K5P4p3nmurvJ9evdyzSkwEeKeNkMUIDnCDCCmCBOeKU_6a4thBgvExiAab6AeeOVbPzhl-Tta1dK30CbI0fCGmuEZOAHmP1WKhZryqRK7MBHsEPbJlWz1HoHfNsb1zItIOxyHq_YQUktgDq2rrLtLYi5FX2NYJPcjABY-UVkZXweki3Xs_eHnwTwQ3UVLgsoyrBeLhp2Dc6YLyqp1PuPNRADScqrMOUGoLkvDcQ-TyAX7u1Lsxskas1uJUvgbx2Jb26vL0ghsCL4q7euf2Wce6LJZ09VfFfin7JuO4Zx_IJ3JNBG3BQ_U3USPii_OKg3CPTYdwcpGiRVOD_TgGKd60UUkJJxQV4Vj9Cuh-DAVXoQWQ4osAGFBvQbAc5OTH-SnsZplJVcX1OgTkkTq_QP3Y=w280-h430-no"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">ST Promo Newsletter</h5>
								<p className="card-text">
									Generate ST Promotional newsletter with your chosen products. Just enter the URL!
								</p>
								<a
									onClick={e => {
										this.props.history.push("/ST-Promo-submit");
									}}
									className="btn btn-primary text-white">
									Generate ST Promo Email Newsletter
								</a>
							</div>
						</div>
						<div className="card m-3" style={{ width: "18rem" }}>
							<img
								src="https://lh3.googleusercontent.com/JksrOc2V_zi76M3Rc-w_BPQCtUp1fVHVgMHMyemAknx55EYF-2HyUQvwiCttwK310EczjQWgxh1Q-CEKabIs4fUPbGi85ZeEMjiRMCnpi0gg07ElrlBpQ6qAVfwUzW_D64eOKdvnvgy9-hQHIOccaKqGaKccRmkG0Bx_RKD35CAtb66zUgeCCAGkai9dj1DNDLDw6V_KVp2vt0uqGuNlyxK7TynIVYihu4rl-0FhZq6ymDhfXJbUYSPoIDr_9ikMTQJfxSHgrJaUcFcQIsCmBiC7x1fRymxehQuXzaidWSnTyA_aZBer2VycjdKOOxg9XSLS8CHr5MN7XR_NAhS1cK54IzDKpLGdkqgZJP5Bdjtl6-ap_j9ApwuBEiGoBtBjT_QfbOVVBPXp_-V5Hh9_VbtTQwky_PkKi8AZjv_DUg4UGR6bllkB_fn2Z4w3CXNT53Y58AGwZ9Ki_bb1XqcaCm4dpIxJPZSKdxJ3gHIV5BzVldHYbwUWw0Y-VpaAEUh1j0bfXEspO-7s8Df8YzOuUZFSYorPqEF6uKD34pTHp9AhIAfCwfWGGWZ34TfiDRa3g4Ypl4zxqJbqRaXlUU2q_oUquEU4rdMi8nG96b8wlXb2NesdCBWHR-_zW9zkUMDyRYL2z-_ZbkfRkojTnS67xynHDqew0som0yO41tZPS_tkG_WK4dOaWA=w280-h430-no"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">ST Editorial</h5>
								<p className="card-text">
									Generate Showtickets Editorial newsletter with your chosen products. Just enter the
									URL!
								</p>
								<a href="#" className="btn btn-primary text-white">
									Generate ST Editorial Email Newsletter
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Dashboard.propTypes = {
	history: PropTypes.array,
	push: PropTypes.func
};
