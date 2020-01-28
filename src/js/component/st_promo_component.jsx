import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import slashes from "slashes";
import { Link } from "react-router-dom";

let emailObject = {};

export class PromoEmailComponent extends Component {
	copyEmail = page => {
		let emailHTML = document.querySelector("#promo-email").cloneNode(true);

		emailObject.html = emailHTML.innerHTML;
		//console.log(emailObject);

		let emailHTMLForJSON = slashes.add(emailHTML.innerHTML);
		return emailHTMLForJSON;
	};

	downloadEmail = () => {
		//REGEX EXPRESSIONS WITH STR.REPLACE ADD MSO FORMATTING FOR EMAIL TEMPLATE
		let almostMSO = emailObject.html.replace(
			/"microsoft-styling-buy-now">/g,
			'"microsoft-styling-buy-now"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:36px;v-text-anchor:middle;width:125px;" arcsize="10%" stroke="f" fillcolor="#FB5724"><w:anchorlock/><center><![endif]-->'
		);
		let almostMSO1 = almostMSO.replace(
			/"microsoft-styling-buy-now-space">/g,
			'"microsoft-styling-buy-now-space"> <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:36px;v-text-anchor:middle;width:125px;" arcsize="10%" stroke="f" fillcolor="#FB5724"><w:anchorlock/><center><![endif]-->'
		);
		let almostMSO2 = almostMSO1.replace(
			/"hero-buy-now">/g,
			'"hero-buy-now"> <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:36px;v-text-anchor:middle;width:125px;" arcsize="10%" stroke="f" fillcolor="#FB5724"><w:anchorlock/><center><![endif]-->'
		);
		let addingHeaderStyling = almostMSO2.replace(
			/<head>/g,
			'<head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/><meta content="width=device-width" name="viewport"/><style type="text/css"> .Title{color: #000000; font-size: 15px; font-family: "Lato", Arial, Helvetica, sans-serif; font-weight: bold; padding: 10px 0 10px 0;} .Subtext{color: #fc1d12; font-size: 15px; font-family: "Lato", Arial, Helvetica, sans-serif; font-weight: normal; padding: 5px 0 10px 0} .RecommendedTitle{color:rgb(0, 0, 0); font-family: "Lato", Arial, Helvetica, sans-serif; font-size: 15px; font-weight:normal; padding: 20px 0px 20px 0px;} #outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */ .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */ body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */ table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */ img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */ /* RESET STYLES */ body{margin:0; padding:0;} img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;} table{border-collapse:collapse !important;} body{height:100% !important; margin:0; padding:0; width:100% !important;} /* iOS BLUE LINKS */ .appleBody a {color:#68440a; text-decoration: none;} .appleFooter a {color:#999999; text-decoration: none;} /* MOBILE STYLES */ @media screen and (max-width: 525px) { /* ALLOWS FOR FLUID TABLES */ table[class="wrapper"]{ width:100% !important;} /* ADJUSTS LAYOUT OF LOGO IMAGE */ td[class="logo"]{ text-align: left; padding: 20px 0 20px 0 !important; } td[class="logo"] img{ margin:0 auto!important; } /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */ td[class="mobile-hide"]{ display:none;} img[class="mobile-hide"]{ display: none !important; } img[class="img-max"]{ max-width: 100% !important; height:auto !important; } /* FULL-WIDTH TABLES */ table[class="responsive-table"]{ width:100%!important; margin: 0 auto !important; padding: 0 !important; text-align: center !important; background-color: #ffffff!important;} /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */ td[class="padding"]{ padding: 10px 5% 15px 5% !important; } td[class="padding-copy"]{ padding: 0px 0% 0px 0% !important; text-align: center; } td[class="padding-meta"]{ padding: 30px 5% 0px 5% !important; text-align: center; } td[class="no-pad"]{ padding: 0 0 20px 0 !important; } td[class="no-padding"]{ padding: 0 !important; } td[class="promo-padding"]{ padding: 0px 5px 0 5px !important; } td[class="section-padding"]{ padding: 0px 0px 0px 0px !important; } td[class="section-padding-bottom-image"]{ padding: 0px 0px 0px 0px !important; } /* ADJUST BUTTONS ON MOBILE */ td[class="mobile-wrapper"]{ padding: 0px 0% 0px 0% !important; border: none !important} table[class="mobile-button-container"]{ margin:0 auto; width:100% !important; } a[class="mobile-button"]{ width:80% !important; padding: 15px !important; border: 0 !important; font-size: 16px !important; } table[class="responsive-table-50"] { margin: 0 auto !important; padding: 0 !important; text-align: center !important; width: 50% !important; } td[Class="date"]{ text-align: center!important; padding: 2px !important; margin:0 auto!important; } td[Class="City"]{ text-align: center!important; padding: 12px !important; margin:0 auto!important; } table[Class="productcell"]{ text-align: center!important; padding: 30px  0!important; margin:0 auto!important; } td[Class="productcell"]{ text-align: center!important; padding: 5px !important; margin:0 auto!important; font-size: 18px !important;} td[Class="font16"]{ text-align: center!important; padding: 5px !important; margin:0 auto!important; font-size: 18px!important;} } </style><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head>'
		);
		let addingHTMLTag = addingHeaderStyling.replace(
			/<html>/g,
			'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">'
		);

		let finalText = addingHTMLTag.replace(
			/Buy Tickets<\/a>/g,
			"Buy Tickets</a><!--[if mso]></center></v:roundrect><![endif]-->"
		);

		let filename = "ST_Promo_Email.html";

		console.log(finalText);
		var element = document.createElement("a");
		element.setAttribute("href", "data:text;charset=utf-8," + encodeURIComponent(finalText));
		element.setAttribute("download", filename);

		element.style.display = "none";
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div id="promo-email">
								<html>
									<head />
									<body>
										<table
											border="0"
											cellPadding="0"
											cellSpacing="0"
											width="100%"
											className="section-padding">
											<tr>
												<td align="center" bgcolor="#F2F2F2">
													<table
														align="center"
														border="0"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table"
														width="600">
														<tbody>
															<tr>
																<td align="center" valign="middle">
																	<table
																		width="100%"
																		border="0"
																		align="center"
																		cellPadding="0"
																		cellSpacing="0">
																		<tr>
																			<td
																				align="left"
																				bgcolor="#000034"
																				className="date"
																				style={{
																					padding: "10px",
																					fontFamily: "Arial, sans-serif",
																					color: "#ffffff",
																					fontSize: "15px"
																				}}
																				valign="middle"
																				width="50%">
																				<strong>
																					<cpt_date format="MONTH YYYY" />
																				</strong>
																			</td>
																			<td
																				align="right"
																				bgcolor="#000034"
																				className="mobile-hide"
																				style={{ padding: "0 10px 0 0" }}
																				valign="middle"
																				width="50%">
																				<table
																					border="0"
																					cellPadding="0"
																					cellSpacing="0">
																					<tr>
																						<td
																							align="right"
																							style={{
																								padding:
																									"0 0 5px 0; fontSize: 10px",
																								fontFamily:
																									"Arial, sans-serif",
																								color: "#515151",
																								textDecoration: "none"
																							}}>
																							<span
																								style={{
																									fontFamily:
																										"OpenSans",
																									fontSize: "12px",
																									style: "italic",
																									height: "12px",
																									color: "#ffffff",
																									fontWeight: "400",
																									textTransform:
																										"scale(0.5,0.5)"
																								}}
																							/>
																							<div className="Webview" />
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</table>
										<table
											width="100%"
											border="0"
											align="center"
											cellPadding="0"
											cellSpacing="0"
											className="section-padding">
											<tr>
												<td align="center" bgcolor="#f2f2f2">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<td align="center" bgcolor="#FFFFFF">
															<table
																width="100%"
																border="0"
																align="center"
																cellPadding="0"
																cellSpacing="0">
																<tr>
																	<td
																		style={{ padding: "0px" }}
																		bgcolor="#ffffff"
																		valign="middle">
																		<table
																			align="left"
																			border="0"
																			cellPadding="0"
																			cellSpacing="0"
																			className="responsive-table"
																			width="47%">
																			<tr>
																				<td
																					align="center"
																					valign="middle"
																					style={{ padding: "20px 5px" }}>
																					<a
																						ALT=""
																						DESCRIPTION="Logo-top"
																						TARGET="_blank"
																						href="https://www.showtickets.com/?utm_campaign=Logo-Top&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																						<img
																							alt="Visit ShowTickets.com"
																							height="auto"
																							src="http://images.delivery.net/cm50content/20483/18489/show-tickets-logo.png"
																							style={{
																								display:
																									"inline-inline-block"
																							}}
																							width="237"
																						/>
																					</a>
																				</td>
																			</tr>
																		</table>

																		<table
																			align="right"
																			border="0"
																			cellPadding="0"
																			cellSpacing="0"
																			className="responsive-table"
																			width="47%">
																			<tr>
																				<td
																					align="center"
																					valign="middle"
																					style={{ padding: "20px 0" }}>
																					<table
																						border="0"
																						cellPadding="0"
																						cellSpacing="0"
																						style={{
																							fontFamily: "'Lato', Arial",
																							fontSize: "12px",
																							fontWeight: "bold",
																							color: "#000034",
																							height: "22px",
																							wordWrap: "break-word"
																						}}
																						width="90%">
																						<tbody>
																							<tr>
																								<td align="center">
																									<a
																										ALT=""
																										DESCRIPTION="Showtickets-Las-Vegas-Top-Nav"
																										style={{
																											textDecoration:
																												"none",
																											color:
																												"#000034"
																										}}
																										href="https://lasvegas.showtickets.com/?utm_campaign=Showtickets-Las-Vegas-Top-Nav&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																										Las Vegas&#160;
																										&gt;
																									</a>
																								</td>
																								<td align="center">
																									<a
																										ALT=""
																										DESCRIPTION="Showtickets-New-York-Top-Nav"
																										style={{
																											textDecoration:
																												"none",
																											color:
																												"#000034"
																										}}
																										href="https://broadway.showtickets.com/?utm_campaign=Showtickets-New-York-Top-Nav&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																										New York&#160;
																										&gt;
																									</a>
																								</td>
																								<td align="center">
																									<a
																										ALT=""
																										DESCRIPTION="Showtickets-Orlando-Top-Nav"
																										style={{
																											textDecoration:
																												"none",
																											color:
																												"#000034"
																										}}
																										href="https://orlando.showtickets.com/?utm_campaign=Showtickets-Orlando-Top-Nav&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																										Orlando &#160;
																										&gt;
																									</a>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</table>
												</td>
											</tr>
										</table>
										<table
											border="0"
											cellPadding="0"
											cellSpacing="0"
											width="100%"
											className="section-padding">
											<tr>
												<td align="center" bgcolor="#F2F2F2">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<tr>
															<td align="center" valign="top" bgcolor="#FFFFFF">
																<table
																	border="0"
																	cellPadding="0"
																	cellSpacing="0"
																	width="98%">
																	<tr>
																		<td>
																			<table
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				width="100%">
																				<tbody>
																					<tr>
																						<td>
																							<table
																								border="0"
																								cellPadding="0"
																								cellSpacing="0"
																								width="100%">
																								<tr>
																									<td>
																										<a
																											ALT=""
																											DESCRIPTION={
																												store
																													.URLs[1]
																													.URLTitle
																											}
																											TARGET="_blank "
																											href={
																												store
																													.URLs[1]
																													.URL +
																												"?utm_campaign=" +
																												store
																													.URLs[1]
																													.URLTitle +
																												"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																											}>
																											<img
																												alt="Don't Miss"
																												border="0"
																												className="img-max"
																												height="auto"
																												src="https://via.placeholder.com/300x140"
																												style={{
																													display:
																														"block",
																													padding:
																														"0",
																													color:
																														"#515151",
																													textDecoration:
																														"none",
																													fontFamily:
																														"Helvetica, arial, sans-serif",
																													fontSize:
																														"15px; width: 600px; height: auto"
																												}}
																												width="600"
																											/>
																										</a>
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<table
																				width="98%"
																				border="0"
																				align="center"
																				cellPadding="0"
																				cellSpacing="0">
																				<tr>
																					<td
																						className="mobile-wrapper"
																						style={{
																							padding: "15px 0 0 0"
																						}}
																						valign="top">
																						<table
																							align="left"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							className="responsive-table"
																							width="74%">
																							<tr>
																								<td
																									align="left"
																									style={{
																										color:
																											"#000000",
																										fontSize:
																											"20px",
																										fontFamily:
																											"'Lato', Arial, Helvetica, sans-serif",
																										fontWeight:
																											"normal",
																										textTransform:
																											"uppercase",
																										padding:
																											"0 10px"
																									}}>
																									<strong>
																										{
																											store
																												.URLs[1]
																												.title
																										}
																									</strong>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="left"
																									style={{
																										color:
																											"#000000",
																										fontSize:
																											"14px",
																										fontFamily:
																											"'Lato', Arial, Helvetica, sans-serif",
																										fontWeight:
																											"normal",
																										padding: "10px"
																									}}>
																									<div>
																										Lorem ipsum.
																										Copy provided by
																										content team.
																									</div>
																								</td>
																							</tr>
																						</table>
																						<table
																							align="right"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							className="responsive-table"
																							width="24%">
																							<tr>
																								<td
																									align="center"
																									valign="middle">
																									<table
																										width="100%"
																										border="0"
																										align="center"
																										cellPadding="0"
																										cellSpacing="0">
																										<tbody>
																											<tr>
																												<td
																													align="center"
																													style={{
																														color:
																															"#000034",
																														fontSize:
																															"14px",
																														height:
																															"20px",
																														fontFamily:
																															"'Lato', Arial, Helvetica, sans-serif",
																														fontWeight:
																															"bold;padding:0 0 5px 0"
																													}}
																													valign="middle">
																													From
																												</td>
																											</tr>
																											<tr>
																												<td
																													align="center"
																													style={{
																														color:
																															"#000034",
																														fontSize:
																															"32px",
																														height:
																															"30px",
																														fontFamily:
																															"'Lato', Arial, Helvetica, sans-serif",
																														fontWeight:
																															"bold"
																													}}>
																													$
																													{
																														store
																															.URLs[1]
																															.price
																													}
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									valign="middle"
																									style={{
																										padding:
																											"10px 0"
																									}}>
																									<table
																										width="50%"
																										border="0"
																										align="center"
																										cellPadding="0"
																										cellSpacing="0"
																										className="mobilebuttoncontainer">
																										<tr>
																											<td
																												align="center"
																												className="padding-copy"
																												style={{
																													padding:
																														"0"
																												}}>
																												<table
																													border="0"
																													align="center"
																													cellPadding="0"
																													cellSpacing="0"
																													className="responsive-table">
																													<tr>
																														<td align="center">
																															<div className="hero-buy-now">
																																<a
																																	style={{
																																		backgroundColor:
																																			"#FB5724",

																																		border:
																																			"1px solid #FB5724",
																																		borderRadius:
																																			"3px",
																																		color:
																																			"#ffffff",
																																		display:
																																			"inline-block",
																																		fontFamily:
																																			"sans-serif",
																																		fontSize:
																																			"12px",
																																		fontWeight:
																																			"bold",
																																		lineHeight:
																																			"32px",
																																		textAlign:
																																			"center",
																																		textDecoration:
																																			"none",
																																		width:
																																			"150px",
																																		WebKitTextSizeAdjust:
																																			"none"
																																	}}
																																	href={
																																		store
																																			.URLs[1]
																																			.URL +
																																		"?utm_campaign=" +
																																		store
																																			.URLs[1]
																																			.URLTitle +
																																		"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																	}>
																																	Buy
																																	Tickets
																																</a>
																															</div>
																														</td>
																													</tr>
																												</table>
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>

										<table border="0" cellPadding="0" cellSpacing="0" width="100%">
											<tr>
												<td align="center" bgcolor="#f2f2f2" className="section-padding">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<tr>
															<td bgcolor="#ffffff">
																<table
																	width="98%"
																	border="0"
																	align="center"
																	cellPadding="0"
																	cellSpacing="0">
																	<tr>
																		<td
																			align="left"
																			style={{
																				fontFamily: "'Lato', Arial",
																				fontSize: "16px",
																				color: "#ffffff",
																				wordWrap: "break-word",
																				textTransform: "uppercase",
																				padding: "10px"
																			}}
																			valign="top"
																			bgcolor="#000034"
																			className="City">
																			<strong>New York</strong>
																		</td>
																	</tr>
																	<tr>
																		<td
																			className="mobile-wrapper"
																			style={{
																				padding: "0",
																				borderBottom: "solid 1px #cecece"
																			}}
																			valign="bottom">
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="47%">
																				<tr>
																					<td
																						style={{ padding: "0px 0" }}
																						valign="bottom">
																						<table
																							align="left"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[2]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[2]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[2]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"inline-block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="276"
																										/>
																									</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</table>
																			<table
																				align="right"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="47%">
																				<tr>
																					<td
																						align="left"
																						className="productcell"
																						valign="top">
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							style={{
																								collapse: "collapse"
																							}}
																							width="100%">
																							<tbody>
																								<tr>
																									<td
																										align="left"
																										className="productcell">
																										<div className="Title">
																											{
																												store
																													.URLs[2]
																													.title
																											}
																										</div>
																									</td>
																								</tr>
																								<tr>
																									<td
																										align="left"
																										className="font16"
																										style={{
																											color:
																												"#fc1d12",
																											fontSize:
																												"15px",
																											fontFamily:
																												"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																											fontWeight:
																												"normal",
																											padding:
																												"0 0 10px 0"
																										}}>
																										<div className="Subtext">
																											{
																												store
																													.URLs[2]
																													.subtext
																											}
																										</div>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="left"
																						className="productcell"
																						valign="bottom">
																						<table
																							align="right"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							className="responsive-table"
																							width="20%">
																							<tr>
																								<td
																									align="right"
																									className="font16"
																									colSpan="2"
																									style={{
																										color:
																											"#000034",
																										fontSize:
																											"15px",
																										fontFamily:
																											"'Lato', Arial, Helvetica, sans-serif",
																										fontWeight:
																											"normal",
																										textTransform:
																											"none",
																										padding:
																											"0 10px 0 0"
																									}}>
																									<strong>
																										<em
																											style={{
																												fontFamily:
																													"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																											}}>
																											from
																										</em>{" "}
																										$
																										{
																											store
																												.URLs[2]
																												.price
																										}
																									</strong>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="productcell"
																									style={{
																										padding:
																											"12px 0 0 0",
																										fontFamily:
																											"Arial, sans-serif",
																										color:
																											"#333333",
																										fontSize: "15px"
																									}}>
																									<table
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										className="productcell"
																										width="20%">
																										<tr>
																											<td
																												align="center"
																												style={{
																													padding:
																														"0"
																												}}>
																												<table
																													border="0"
																													cellPadding="0"
																													cellSpacing="0"
																													className="responsive-table">
																													<tr>
																														<td align="center">
																															<div className="microsoft-styling-buy-now">
																																<a
																																	style={{
																																		backgroundColor:
																																			"#FB5724",

																																		border:
																																			"1px solid #FB5724",
																																		borderRadius:
																																			"3px",
																																		color:
																																			"#ffffff",
																																		display:
																																			"inline-block",
																																		fontFamily:
																																			"sans-serif",
																																		fontSize:
																																			"12px",
																																		fontWeight:
																																			"bold",
																																		lineHeight:
																																			"32px",
																																		textAlign:
																																			"center",
																																		textDecoration:
																																			"none",
																																		width:
																																			"90px",
																																		WebKitTextSizeAdjust:
																																			"none"
																																	}}
																																	href={
																																		store
																																			.URLs[2]
																																			.URL +
																																		"?utm_campaign=" +
																																		store
																																			.URLs[2]
																																			.URLTitle +
																																		"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																	}>
																																	Buy
																																	Tickets
																																</a>
																															</div>
																														</td>
																													</tr>
																												</table>
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="left"
																						className="productcell"
																						valign="bottom">
																						&#160;
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td className="mobile-hide">&#160; </td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td bgcolor="#ffffff">
																<table
																	align="center"
																	border="0"
																	cellPadding="0"
																	cellSpacing="0"
																	width="98%">
																	<tr>
																		<td className="mobile-hide">&#160; </td>
																	</tr>
																	<tr>
																		<td className="mobile-wrapper" valign="bottom">
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="47%">
																				<tr>
																					<td
																						style={{ padding: "0px 0" }}
																						valign="bottom">
																						<table
																							align="left"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									className="productcell"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[3]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[3]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[3]
																												.title +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"inline-block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="276"
																										/>
																									</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</table>
																			<table
																				align="right"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="47%">
																				<tr>
																					<td
																						align="left"
																						className="productcell"
																						valign="top">
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							style={{
																								collapse: "collapse"
																							}}
																							width="100%">
																							<tbody>
																								<tr>
																									<td
																										align="left"
																										className="productcell">
																										<div className="Title">
																											{
																												store
																													.URLs[3]
																													.title
																											}
																										</div>
																									</td>
																								</tr>
																								<tr>
																									<td
																										align="left"
																										className="font16"
																										style={{
																											color:
																												"#fc1d12",
																											fontSize:
																												"15px",
																											fontFamily:
																												"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																											fontWeight:
																												"normal",
																											padding:
																												"0 0 10px 0"
																										}}>
																										<div className="Subtext">
																											{
																												store
																													.URLs[3]
																													.subtext
																											}
																										</div>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="left"
																						className="productcell"
																						valign="bottom">
																						<table
																							align="right"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							className="responsive-table"
																							width="20%">
																							<tr>
																								<td
																									align="right"
																									className="font16"
																									colSpan="2"
																									style={{
																										color:
																											"#000034",
																										fontSize:
																											"15px",
																										fontFamily:
																											"'Lato', Arial, Helvetica, sans-serif",
																										fontWeight:
																											"normal",
																										textTransform:
																											"none",
																										padding:
																											"0 10px 0 0"
																									}}>
																									<strong>
																										<em
																											style={{
																												fontFamily:
																													"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																											}}>
																											from
																										</em>{" "}
																										$
																										{
																											store
																												.URLs[3]
																												.price
																										}
																									</strong>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="productcell"
																									style={{
																										padding:
																											"12px 0 0 0",
																										fontFamily:
																											"Arial, sans-serif",
																										color:
																											"#333333",
																										fontSize: "15px"
																									}}>
																									<table
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										className="productcell"
																										width="20%">
																										<tr>
																											<td
																												align="center"
																												style={{
																													padding:
																														"0"
																												}}>
																												<table
																													border="0"
																													cellPadding="0"
																													cellSpacing="0"
																													className="responsive-table">
																													<tr>
																														<td align="center">
																															<div className="microsoft-styling-buy-now">
																																<a
																																	style={{
																																		backgroundColor:
																																			"#FB5724",
																																		border:
																																			"1px solid #FB5724",
																																		borderRadius:
																																			"3px",
																																		color:
																																			"#ffffff",
																																		display:
																																			"inline-block",
																																		fontFamily:
																																			"sans-serif",
																																		fontSize:
																																			"12px",
																																		fontWeight:
																																			"bold",
																																		lineHeight:
																																			"32px",
																																		textAlign:
																																			"center",
																																		textDecoration:
																																			"none",
																																		width:
																																			"90px",
																																		WebKitTextSizeAdjust:
																																			"none"
																																	}}
																																	href={
																																		store
																																			.URLs[3]
																																			.URL +
																																		"?utm_campaign=" +
																																		store
																																			.URLs[3]
																																			.URLTitle +
																																		"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																	}>
																																	Buy
																																	Tickets
																																</a>
																															</div>
																														</td>
																													</tr>
																												</table>
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="left"
																						className="productcell"
																						valign="bottom">
																						&#160;
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td className="mobile-hide">&#160; </td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<table
											border="0"
											cellPadding="0"
											cellSpacing="0"
											width="100%"
											className="section-padding">
											<tbody>
												<tr>
													<td align="center" bgcolor="#f2f2f2" className="section-padding">
														<table
															width="600"
															border="0"
															align="center"
															cellPadding="0"
															cellSpacing="0"
															className="responsive-table">
															<tbody
																width="600"
																border="0"
																align="center"
																cellPadding="0"
																cellSpacing="0"
																className="responsive-table">
																<tr>
																	<td bgcolor="#ffffff">
																		<table
																			width="600"
																			border="0"
																			align="center"
																			cellPadding="0"
																			cellSpacing="0"
																			className="responsive-table">
																			<tbody
																				width="600"
																				border="0"
																				align="center"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table">
																				<tr>
																					<td>&#160;</td>
																				</tr>
																				<tr>
																					<td>&#160;</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>

										<table
											border="0"
											cellPadding="0"
											cellSpacing="0"
											width="100%"
											className="section-padding">
											<tr>
												<td align="center" bgcolor="#f2f2f2" className="section-padding">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<tr>
															<td bgcolor="#ffffff">
																<table
																	align="center"
																	border="0"
																	cellPadding="0"
																	cellSpacing="0"
																	width="98%">
																	<tr>
																		<td
																			align="left"
																			bgcolor="#000034"
																			style={{
																				fontFamily: "'Lato', Arial",
																				fontSize: "16px",
																				color: "#ffffff",
																				wordWrap: "break-word",
																				textTransform: "uppercase",
																				padding: "10px"
																			}}
																			valign="top"
																			className="City">
																			<strong>Las Vegas</strong>
																		</td>
																	</tr>
																	<tr>
																		<td
																			className="mobile-wrapper"
																			style={{ padding: "0" }}
																			valign="top">
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="33%">
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[4]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[4]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[4]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="180"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										width="98%">
																										<tbody>
																											<tr>
																												<td align="left">
																													<table
																														align="center"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														style={{
																															collapse:
																																"collapse"
																														}}
																														width="100%">
																														<tbody>
																															<tr>
																																<td
																																	align="left"
																																	className="productcell">
																																	<div className="Title">
																																		{
																																			store
																																				.URLs[4]
																																				.title
																																		}
																																	</div>
																																</td>
																															</tr>
																															<tr>
																																<td
																																	align="left"
																																	className="font16"
																																	style={{
																																		color:
																																			"#fc1d12",
																																		fontSize:
																																			"15px",
																																		fontFamily:
																																			"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																																		fontWeight:
																																			"normal",
																																		padding:
																																			"0 0 10px 0"
																																	}}>
																																	<div className="Subtext">
																																		{
																																			store
																																				.URLs[4]
																																				.subtext
																																		}
																																	</div>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																													<table
																														align="right"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														className="responsive-table"
																														width="20%">
																														<tr>
																															<td
																																align="right"
																																className="font16"
																																colSpan="2"
																																style={{
																																	color:
																																		"#000034",
																																	fontSize:
																																		"15px; fontFamily:'Lato', Arial, Helvetica, sans-serif",
																																	fontWeight:
																																		"normal",
																																	textTransform:
																																		"none",
																																	padding:
																																		"0 10px 0 0"
																																}}>
																																<strong>
																																	<em
																																		style={{
																																			fontFamily:
																																				"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																																		}}>
																																		from
																																	</em>{" "}
																																	$
																																	{
																																		store
																																			.URLs[4]
																																			.price
																																	}
																																</strong>
																															</td>
																														</tr>
																														<tr>
																															<td
																																align="center"
																																style={{
																																	padding:
																																		"12px 0 0 0",
																																	fontFamily:
																																		"Arial, sans-serif",
																																	color:
																																		"#333333",
																																	fontSize:
																																		"15px"
																																}}>
																																<table
																																	border="0"
																																	cellPadding="0"
																																	cellSpacing="0"
																																	className="mobile-button-container"
																																	width="20%">
																																	<tr>
																																		<td
																																			align="center"
																																			style={{
																																				padding:
																																					"0"
																																			}}>
																																			<table
																																				border="0"
																																				cellPadding="0"
																																				cellSpacing="0"
																																				className="responsive-table">
																																				<tr>
																																					<td align="center">
																																						<div className="microsoft-styling-buy-now">
																																							<a
																																								style={{
																																									backgroundColor:
																																										"#FB5724",
																																									border:
																																										"1px solid #FB5724",
																																									borderRadius:
																																										"3px",
																																									color:
																																										"#ffffff",
																																									display:
																																										"inline-block",
																																									fontFamily:
																																										"sans-serif",
																																									fontSize:
																																										"12px",
																																									fontWeight:
																																										"bold",
																																									lineHeight:
																																										"32px",
																																									textAlign:
																																										"center",
																																									textDecoration:
																																										"none",
																																									width:
																																										"90px",
																																									WebKitTextSizeAdjust:
																																										"none"
																																								}}
																																								href={
																																									store
																																										.URLs[4]
																																										.URL +
																																									"?utm_campaign=" +
																																									store
																																										.URLs[4]
																																										.URLTitle +
																																									"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																								}>
																																								Buy
																																								Tickets
																																							</a>
																																						</div>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="33%">
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px" }}>
																						&nbsp;
																					</td>
																					<td
																						align="center"
																						style={{ padding: "0px" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[5]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[5]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[5]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="180"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										width="98%">
																										<tbody>
																											<tr>
																												<td align="left">
																													<table
																														align="center"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														style={{
																															borderCollapse:
																																"collapse"
																														}}
																														width="100%">
																														<tbody>
																															<tr>
																																<td
																																	align="left"
																																	className="productcell">
																																	<div className="Title">
																																		{
																																			store
																																				.URLs[5]
																																				.title
																																		}
																																	</div>
																																</td>
																															</tr>
																															<tr>
																																<td
																																	align="left"
																																	className="font16"
																																	style={{
																																		color:
																																			"#fc1d12",
																																		fontSize:
																																			"15px",
																																		fontFamily:
																																			"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																																		fontWeight:
																																			"normal",
																																		padding:
																																			"0 0 10px 0"
																																	}}>
																																	<div className="Subtext">
																																		{
																																			store
																																				.URLs[5]
																																				.subtext
																																		}
																																	</div>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																													<table
																														align="right"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														className="responsive-table"
																														width="20%">
																														<tr>
																															<td
																																align="right"
																																className="font16"
																																colSpan="2"
																																style={{
																																	color:
																																		"#000034",
																																	fontSize:
																																		"15px",
																																	fontFamily:
																																		"'Lato', Arial, Helvetica, sans-serif",
																																	fontWeight:
																																		"normal",
																																	textTransform:
																																		"none",
																																	padding:
																																		"0 10px 0 0"
																																}}>
																																<strong>
																																	<em
																																		style={{
																																			fontFamily:
																																				"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																																		}}>
																																		from
																																	</em>{" "}
																																	$
																																	{
																																		store
																																			.URLs[5]
																																			.price
																																	}
																																</strong>
																															</td>
																														</tr>
																														<tr>
																															<td
																																align="center"
																																style={{
																																	padding:
																																		"12px 0 0 0",
																																	fontFamily:
																																		"Arial, sans-serif",
																																	color:
																																		"#333333; fontSize: 15px"
																																}}>
																																<table
																																	border="0"
																																	cellPadding="0"
																																	cellSpacing="0"
																																	className="mobile-button-container"
																																	width="20%">
																																	<tr>
																																		<td
																																			align="center"
																																			style={{
																																				padding:
																																					"0"
																																			}}>
																																			<table
																																				border="0"
																																				cellPadding="0"
																																				cellSpacing="0"
																																				className="responsive-table">
																																				<tr>
																																					<td align="center">
																																						<div className="microsoft-styling-buy-now">
																																							<a
																																								style={{
																																									backgroundColor:
																																										"#FB5724",
																																									border:
																																										"1px solid #FB5724",
																																									borderRadius:
																																										"3px",
																																									color:
																																										"#ffffff",
																																									display:
																																										"inline-block",
																																									fontFamily:
																																										"sans-serif",
																																									fontSize:
																																										"12px",
																																									fontWeight:
																																										"bold",
																																									lineHeight:
																																										"32px",
																																									textAlign:
																																										"center",
																																									textDecoration:
																																										"none",
																																									width:
																																										"90px",
																																									WebKitTextSizeAdjust:
																																										"none"
																																								}}
																																								href={
																																									store
																																										.URLs[5]
																																										.URL +
																																									"?utm_campaign=" +
																																									store
																																										.URLs[5]
																																										.URLTitle +
																																									"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																								}>
																																								Buy
																																								Tickets
																																							</a>
																																						</div>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px " }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="right"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="33%">
																				<tr>
																					<td style={{ padding: "0px" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[6]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[6]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[6]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151; fontFamily: Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="180"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										width="98%">
																										<tbody>
																											<tr>
																												<td align="left">
																													<table
																														align="center"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														style={{
																															borderCollapse:
																																"collapse"
																														}}
																														width="100%">
																														<tbody>
																															<tr>
																																<td
																																	align="left"
																																	className="productcell">
																																	<div className="Title">
																																		{
																																			store
																																				.URLs[6]
																																				.title
																																		}
																																	</div>
																																</td>
																															</tr>
																															<tr>
																																<td
																																	align="left"
																																	className="font16"
																																	style={{
																																		color:
																																			"#fc1d12",
																																		fontSize:
																																			"15px",
																																		fontFamily:
																																			"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																																		fontWeight:
																																			"normal",
																																		padding:
																																			"0 0 10px 0"
																																	}}>
																																	<div className="Subtext">
																																		{
																																			store
																																				.URLs[6]
																																				.subtext
																																		}
																																	</div>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																													<table
																														align="right"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														className="responsive-table"
																														width="20%">
																														<tr>
																															<td
																																align="right"
																																className="font16"
																																colSpan="2"
																																style={{
																																	color:
																																		"#000034",
																																	fontSize:
																																		"15px",
																																	fontFamily:
																																		"'Lato', Arial, Helvetica, sans-serif",
																																	fontWeight:
																																		"normal",
																																	textTransform:
																																		"none",
																																	padding:
																																		"0 10px 0 0"
																																}}>
																																<strong>
																																	<em
																																		style={{
																																			fontFamily:
																																				"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																																		}}>
																																		from
																																	</em>{" "}
																																	$
																																	{
																																		store
																																			.URLs[6]
																																			.price
																																	}
																																</strong>
																															</td>
																														</tr>
																														<tr>
																															<td
																																align="center"
																																style={{
																																	padding:
																																		"12px 0 0 0",
																																	fontFamily:
																																		"Arial, sans-serif",
																																	color:
																																		"#333333",
																																	fontSize:
																																		"15px"
																																}}>
																																<table
																																	border="0"
																																	cellPadding="0"
																																	cellSpacing="0"
																																	className="mobile-button-container"
																																	width="20%">
																																	<tr>
																																		<td
																																			align="center"
																																			style={{
																																				padding:
																																					"0"
																																			}}>
																																			<table
																																				border="0"
																																				cellPadding="0"
																																				cellSpacing="0"
																																				className="responsive-table">
																																				<tr>
																																					<td align="center">
																																						<div className="microsoft-styling-buy-now">
																																							<a
																																								style={{
																																									backgroundColor:
																																										"#FB5724",
																																									border:
																																										"1px solid #FB5724",
																																									borderRadius:
																																										"3px",
																																									color:
																																										"#ffffff",
																																									display:
																																										"inline-block",
																																									fontFamily:
																																										"sans-serif",
																																									fontSize:
																																										"12px",
																																									fontWeight:
																																										"bold",
																																									lineHeight:
																																										"32px",
																																									textAlign:
																																										"center",
																																									textDecoration:
																																										"none",
																																									width:
																																										"90px",
																																									WebKitTextSizeAdjust:
																																										"none"
																																								}}
																																								href={
																																									store
																																										.URLs[6]
																																										.URL +
																																									"?utm_campaign=" +
																																									store
																																										.URLs[6]
																																										.URLTitle +
																																									"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																								}>
																																								Buy
																																								Tickets
																																							</a>
																																						</div>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px " }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td bgcolor="#ffffff">&#160;</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<table border="0" cellPadding="0" cellSpacing="0" width="100%">
											<tr>
												<td align="center" bgcolor="#f2f2f2" className="section-padding">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<tr>
															<td bgcolor="#ffffff">
																<table
																	align="center"
																	border="0"
																	cellPadding="0"
																	cellSpacing="0"
																	width="98%">
																	<tr>
																		<td
																			align="left"
																			bgcolor="#000034"
																			style={{
																				fontFamily: "'Lato', Arial",
																				fontSize: "16px",
																				color: "#ffffff",
																				wordWrap: "break-word",
																				textTransform: "uppercase",
																				padding: "10px"
																			}}
																			valign="top"
																			className="City">
																			<strong>Orlando</strong>
																		</td>
																	</tr>
																	<tr>
																		<td
																			className="mobile-wrapper"
																			style={{ padding: "0" }}
																			valign="top">
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="47%">
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[7]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[7]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[7]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"98%",
																												height:
																													"auto"
																											}}
																											width="265"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										width="98%">
																										<tbody>
																											<tr>
																												<td align="left">
																													<table
																														align="center"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														style={{
																															borderCollapse:
																																"collapse"
																														}}
																														width="100%">
																														<tbody>
																															<tr>
																																<td
																																	align="left"
																																	className="productcell">
																																	<div className="Title">
																																		{
																																			store
																																				.URLs[7]
																																				.title
																																		}
																																	</div>
																																</td>
																															</tr>
																															<tr>
																																<td
																																	align="left"
																																	className="font16"
																																	style={{
																																		color:
																																			"#fc1d12",
																																		fontSize:
																																			"15px",
																																		fontFamily:
																																			"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																																		fontWeight:
																																			"normal",
																																		padding:
																																			"0 0 10px 0"
																																	}}>
																																	<div className="Subtext">
																																		{
																																			store
																																				.URLs[7]
																																				.subtext
																																		}
																																	</div>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																													<table
																														align="right"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														className="responsive-table"
																														width="20%">
																														<tr>
																															<td
																																align="right"
																																className="font16"
																																colSpan="2"
																																style={{
																																	color:
																																		"#000034",
																																	fontSize:
																																		"15px",
																																	fontFamily:
																																		"'Lato', Arial, Helvetica, sans-serif",
																																	fontWeight:
																																		"normal",
																																	textTransform:
																																		"none",
																																	padding:
																																		"0 10px 0 0"
																																}}>
																																<strong>
																																	<em
																																		style={{
																																			fontFamily:
																																				"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																																		}}>
																																		from
																																	</em>{" "}
																																	$
																																	{
																																		store
																																			.URLs[7]
																																			.price
																																	}
																																</strong>
																															</td>
																														</tr>
																														<tr>
																															<td
																																align="center"
																																style={{
																																	padding:
																																		"12px 0 0 0",
																																	fontFamily:
																																		"Arial, sans-serif",
																																	color:
																																		"#333333",
																																	fontSize:
																																		"15px"
																																}}>
																																<table
																																	border="0"
																																	cellPadding="0"
																																	cellSpacing="0"
																																	className="mobile-button-container"
																																	width="20%">
																																	<tr>
																																		<td
																																			align="center"
																																			style={{
																																				padding:
																																					"0"
																																			}}>
																																			<table
																																				border="0"
																																				cellPadding="0"
																																				cellSpacing="0"
																																				className="responsive-table">
																																				<tr>
																																					<td align="center">
																																						<div className="microsoft-styling-buy-now-space">
																																							{" "}
																																							<a
																																								style={{
																																									backgroundColor:
																																										"#FB5724",
																																									border:
																																										"1px solid #FB5724",
																																									borderRadius:
																																										"3px",
																																									color:
																																										"#ffffff",
																																									display:
																																										"inline-block",
																																									fontFamily:
																																										"sans-serif",
																																									fontSize:
																																										"12px",
																																									fontWeight:
																																										"bold",
																																									lineHeight:
																																										"32px",
																																									textAlign:
																																										"center",
																																									textDecoration:
																																										"none",
																																									width:
																																										"90px",
																																									WebKitTextSizeAdjust:
																																										"none"
																																								}}
																																								href={
																																									store
																																										.URLs[7]
																																										.URL +
																																									"?utm_campaign=" +
																																									store
																																										.URLs[7]
																																										.URLTitle +
																																									"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																								}>
																																								Buy
																																								Tickets
																																							</a>
																																						</div>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="right"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="47%">
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="right"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[8]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[8]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[8]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/300x140"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"98%",
																												height:
																													"auto"
																											}}
																											width="265"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="right"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										width="98%">
																										<tbody>
																											<tr>
																												<td
																													align="left"
																													width="200">
																													<table
																														align="center"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														style={{
																															borderCollapse:
																																"collapse"
																														}}
																														width="100%">
																														<tbody>
																															<tr>
																																<td
																																	align="left"
																																	className="productcell">
																																	<div className="Title">
																																		{
																																			store
																																				.URLs[8]
																																				.title
																																		}
																																	</div>
																																</td>
																															</tr>
																															<tr>
																																<td
																																	align="left"
																																	className="font16"
																																	style={{
																																		color:
																																			"#fc1d12",
																																		fontSize:
																																			"15px",
																																		fontFamily:
																																			"&#39;Lato&#39;, Arial, Helvetica, sans-serif",
																																		fontWeight:
																																			"normal",
																																		padding:
																																			"0 0 10px 0"
																																	}}>
																																	<div className="Subtext">
																																		{
																																			store
																																				.URLs[8]
																																				.subtext
																																		}
																																	</div>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																													<table
																														align="right"
																														border="0"
																														cellPadding="0"
																														cellSpacing="0"
																														className="responsive-table"
																														width="20%">
																														<tr>
																															<td
																																align="right"
																																className="font16"
																																colSpan="2"
																																style={{
																																	color:
																																		"#000034",
																																	fontSize:
																																		"15px",
																																	fontFamily:
																																		"'Lato', Arial, Helvetica, sans-serif",
																																	fontWeight:
																																		"normal",
																																	textTransform:
																																		"none",
																																	padding:
																																		"0 10px 0 0"
																																}}>
																																<strong>
																																	<em
																																		style={{
																																			fontFamily:
																																				"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																																		}}>
																																		from
																																	</em>{" "}
																																	$
																																	{
																																		store
																																			.URLs[8]
																																			.price
																																	}
																																</strong>
																															</td>
																														</tr>
																														<tr>
																															<td
																																align="center"
																																style={{
																																	padding:
																																		"12px 0 0 0",
																																	fontFamily:
																																		"Arial, sans-serif",
																																	color:
																																		"#333333",
																																	fontSize:
																																		"15px"
																																}}>
																																<table
																																	border="0"
																																	cellPadding="0"
																																	cellSpacing="0"
																																	className="mobile-button-container"
																																	width="20%">
																																	<tr>
																																		<td
																																			align="center"
																																			style={{
																																				padding:
																																					"0"
																																			}}>
																																			<table
																																				border="0"
																																				cellPadding="0"
																																				cellSpacing="0"
																																				className="responsive-table">
																																				<tr>
																																					<td align="center">
																																						<div className="microsoft-styling-buy-now-space">
																																							{" "}
																																							<a
																																								style={{
																																									backgroundColor:
																																										"#FB5724",
																																									border:
																																										"1px solid #FB5724",
																																									borderRadius:
																																										"3px",
																																									color:
																																										"#ffffff",
																																									display:
																																										"inline-block",
																																									fontFamily:
																																										"sans-serif",
																																									fontSize:
																																										"12px",
																																									fontWeight:
																																										"bold",
																																									lineHeight:
																																										"32px",
																																									textAlign:
																																										"center",
																																									textDecoration:
																																										"none",
																																									width:
																																										"90px",
																																									WebKitTextSizeAdjust:
																																										"none"
																																								}}
																																								href={
																																									store
																																										.URLs[8]
																																										.URL +
																																									"?utm_campaign=" +
																																									store
																																										.URLs[8]
																																										.URLTitle +
																																									"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																								}>
																																								Buy
																																								Tickets
																																							</a>
																																						</div>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr />
													</table>
												</td>
											</tr>
										</table>
										<table border="0" cellPadding="0" cellSpacing="0" width="100%">
											<tr>
												<td align="center" bgcolor="#f2f2f2" className="section-padding">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<tr>
															<td bgcolor="#ffffff">
																<table
																	align="center"
																	border="0"
																	cellPadding="0"
																	cellSpacing="0"
																	width="98%">
																	<tr>
																		<td
																			align="center"
																			bgcolor="#ffffff"
																			height="50">
																			<table
																				align="center"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				width="100%">
																				<tbody>
																					<tr>
																						<td
																							align="center"
																							className="mobile-hide"
																							valign="middle"
																							width="20%">
																							<hr
																								style={{
																									width: "90%",
																									display:
																										"inline-block"
																								}}
																							/>
																						</td>
																						<td
																							align="center"
																							className="stack-column-center p-0"
																							style={{
																								fontFamily:
																									"'Lato', Arial",
																								fontSize: "24px",
																								color: "#000034",
																								word: "break-word",
																								textTransform:
																									"capitalize",
																								style: "italic"
																							}}
																							width="60%">
																							<strong>
																								Recommended For You
																							</strong>
																						</td>
																						<td
																							align="center"
																							className="mobile-hide"
																							valign="middle"
																							width="20%">
																							<hr
																								style={{
																									width: "90%",
																									display:
																										"inline-block"
																								}}
																							/>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td
																			className="mobile-wrapper"
																			style={{ padding: "0" }}
																			valign="top">
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table-50"
																				width="24%">
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px 0" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="140">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[9]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[9]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[9]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/140x215"
																											style={{
																												display:
																													"block; color: #515151; fontFamily: Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"140px; height:auto"
																											}}
																											width="140"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										style={{
																											borderCollapse:
																												"collapse"
																										}}
																										width="100%">
																										<tbody>
																											<tr>
																												<td
																													align="center"
																													className="productcell"
																													style={{
																														color:
																															"rgb(0, 0, 0)",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontSize:
																															"15px",
																														fontWeight:
																															"normal",
																														padding:
																															"20px 0px 20px 0px"
																													}}>
																													<div className="RecommendedTitle">
																														{
																															store
																																.URLs[9]
																																.title
																														}
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													align="center"
																													className="font16"
																													style={{
																														color:
																															"#000034",
																														fontSize:
																															"15px",
																														fontFamily:
																															"'Lato', Arial, Helvetica, sans-serif",
																														fontWeight:
																															"normal",
																														textTransform:
																															"none",
																														padding:
																															"0 10px 0 0"
																													}}>
																													<strong>
																														<em
																															style={{
																																fontFamily:
																																	"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																															}}>
																															from
																														</em>{" "}
																														$
																														{
																															store
																																.URLs[9]
																																.price
																														}
																													</strong>
																												</td>
																											</tr>
																											<tr>
																												<td
																													height="60"
																													align="center"
																													valign="middle">
																													<a
																														style={{
																															color:
																																"#23a1fd",
																															fontSize:
																																"13px",
																															fontFamily:
																																"Lato, Arial, Helvetica, sans-serif",
																															fontWeight:
																																"normal",
																															textTransform:
																																"uppercase",
																															textDecoration:
																																"none"
																														}}
																														href={
																															store
																																.URLs[9]
																																.URL +
																															"?utm_campaign=" +
																															store
																																.URLs[9]
																																.URLTitle +
																															"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																														}>
																														<strong>
																															BUY
																															TICKETS
																														</strong>
																													</a>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table-50"
																				width="24%">
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px" }}>
																						&nbsp;
																					</td>
																					<td
																						align="center"
																						style={{
																							padding: "0px"
																						}}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="120">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[10]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[10]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[10]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/140x215"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"140px",
																												height:
																													"auto"
																											}}
																											width="140"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										style={{
																											collapse:
																												"collapse"
																										}}
																										width="100%">
																										<tbody>
																											<tr>
																												<td
																													align="center"
																													className="productcell"
																													style={{
																														color:
																															"rgb(0, 0, 0)",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontSize:
																															"15px",
																														fontWeight:
																															"normal",
																														padding:
																															"20px 0px 20px 0px"
																													}}>
																													<div className="RecommendedTitle">
																														{
																															store
																																.URLs[10]
																																.title
																														}
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													align="center"
																													className="font16"
																													style={{
																														color:
																															"#000034",
																														fontSize:
																															"15px",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontWeight:
																															"normal",
																														textTransform:
																															"none",
																														padding:
																															"0 10px 0 0"
																													}}>
																													<strong>
																														<em
																															style={{
																																fontFamily:
																																	"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																															}}>
																															from
																														</em>{" "}
																														$
																														{
																															store
																																.URLs[10]
																																.price
																														}
																													</strong>
																												</td>
																											</tr>
																											<tr>
																												<td
																													height="60"
																													align="center"
																													valign="middle">
																													<a
																														style={{
																															color:
																																"#23a1fd",
																															fontSize:
																																"13px",
																															fontFamily:
																																"Lato, Arial, Helvetica, sans-serif",
																															fontWeight:
																																"normal",
																															textTransform:
																																"uppercase",
																															textDecoration:
																																"none"
																														}}
																														href={
																															store
																																.URLs[10]
																																.URL +
																															"?utm_campaign=" +
																															store
																																.URLs[10]
																																.URLTitle +
																															"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																														}>
																														<strong>
																															BUY
																															TICKETS
																														</strong>
																													</a>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table-50"
																				width="20%">
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px" }}>
																						&nbsp;
																					</td>
																					<td
																						align="center"
																						style={{
																							padding: "0 0 0px 3px"
																						}}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="120">
																							<tr>
																								<td
																									align="right"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[11]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[11]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[11]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/140x215"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"140px",
																												height:
																													"auto"
																											}}
																											width="140"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										style={{
																											collapse:
																												"collapse"
																										}}
																										width="100%">
																										<tbody>
																											<tr>
																												<td
																													align="center"
																													className="productcell"
																													style={{
																														color:
																															"rgb(0, 0, 0)",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontSize:
																															"15px",
																														fontWeight:
																															"normal",
																														padding:
																															"20px 0px 20px 0px"
																													}}>
																													<div className="RecommendedTitle">
																														{
																															store
																																.URLs[11]
																																.title
																														}
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													align="center"
																													className="font16"
																													style={{
																														color:
																															"#000034",
																														fontSize:
																															"15px",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontWeight:
																															"normal",
																														textTransform:
																															"none",
																														padding:
																															"0 10px 0 0"
																													}}>
																													<strong>
																														<em
																															style={{
																																fontFamily:
																																	"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																															}}>
																															from
																														</em>{" "}
																														$
																														{
																															store
																																.URLs[11]
																																.price
																														}
																													</strong>
																												</td>
																											</tr>
																											<tr>
																												<td
																													height="60"
																													align="center"
																													valign="middle">
																													<a
																														style={{
																															color:
																																"#23a1fd",
																															fontSize:
																																"13px",
																															fontFamily:
																																"Lato, Arial, Helvetica, sans-serif",
																															fontWeight:
																																"normal",
																															textTransform:
																																"uppercase",
																															textDecoration:
																																"none"
																														}}
																														href={
																															store
																																.URLs[11]
																																.URL +
																															"?utm_campaign=" +
																															store
																																.URLs[11]
																																.URLTitle +
																															"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																														}>
																														<strong>
																															BUY
																															TICKETS
																														</strong>
																													</a>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table-50"
																				width="20%">
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																					<td
																						align="center"
																						style={{
																							padding: "0px"
																						}}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="120">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION={
																											store
																												.URLs[12]
																												.URLTitle
																										}
																										TARGET="_blank"
																										href={
																											store
																												.URLs[12]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[12]
																												.URLTitle +
																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}>
																										<img
																											alt="Don't Miss"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="https://via.placeholder.com/140x215"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"140px",
																												height:
																													"auto"
																											}}
																											width="140"
																										/>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td
																									align="center"
																									className="promo-padding">
																									<table
																										align="center"
																										border="0"
																										cellPadding="0"
																										cellSpacing="0"
																										style={{
																											collapse:
																												"collapse"
																										}}
																										width="100%">
																										<tbody>
																											<tr>
																												<td
																													align="center"
																													className="productcell"
																													style={{
																														color:
																															"rgb(0, 0, 0)",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontSize:
																															"15px",
																														fontWeight:
																															"normal",
																														padding:
																															"20px 0px 20px 0px"
																													}}>
																													<div className="RecommendedTitle">
																														{
																															store
																																.URLs[12]
																																.title
																														}
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													align="center"
																													className="font16"
																													style={{
																														color:
																															"#000034",
																														fontSize:
																															"15px",
																														fontFamily:
																															"Lato, Arial, Helvetica, sans-serif",
																														fontWeight:
																															"normal",
																														textTransform:
																															"none",
																														padding:
																															"0 10px 0 0"
																													}}>
																													<strong>
																														<em
																															style={{
																																fontFamily:
																																	"Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'"
																															}}>
																															from
																														</em>{" "}
																														$
																														{
																															store
																																.URLs[12]
																																.price
																														}
																													</strong>
																												</td>
																											</tr>
																											<tr>
																												<td
																													height="60"
																													align="center"
																													valign="middle">
																													<a
																														style={{
																															color:
																																"#23a1fd",
																															fontSize:
																																"13px",
																															fontFamily:
																																"Lato, Arial, Helvetica, sans-serif",
																															fontWeight:
																																"normal",
																															textTransform:
																																"uppercase",
																															textDecoration:
																																"none"
																														}}
																														href={
																															store
																																.URLs[12]
																																.URL +
																															"?utm_campaign=" +
																															store
																																.URLs[12]
																																.URLTitle +
																															"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																														}>
																														<strong>
																															BUY
																															TICKETS
																														</strong>
																													</a>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="center"
																						style={{
																							padding: "0 0 0px 3px"
																						}}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td bgcolor="#ffffff">&#160;</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<table border="0" cellPadding="0" cellSpacing="0" width="100%">
											<tr>
												<td align="center" bgcolor="#f2f2f2" className="section-padding">
													<table
														width="600"
														border="0"
														align="center"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table">
														<tr>
															<td bgcolor="#ffffff">
																<table
																	align="center"
																	border="0"
																	cellPadding="0"
																	cellSpacing="0"
																	width="98%">
																	<tr>
																		<td
																			align="center"
																			bgcolor="#ffffff"
																			height="50">
																			<table
																				align="center"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				width="100%">
																				<tbody>
																					<tr>
																						<td
																							align="center"
																							className="mobile-hide"
																							valign="middle"
																							width="20%">
																							<hr
																								style={{
																									width: "90%",
																									display:
																										"inline-block"
																								}}
																							/>
																						</td>
																						<td
																							align="center"
																							className="stack-column-center p-0"
																							style={{
																								fontFamily:
																									"'Lato', Arial",
																								fontSize: "22px",
																								color: "#000034",
																								wordWrap: "break-word",
																								textTransform:
																									"capitalize",
																								style: "italic"
																							}}
																							width="60%">
																							<strong>
																								Select a city to see
																								more deals
																							</strong>
																						</td>
																						<td
																							align="center"
																							className="mobile-hide"
																							valign="middle"
																							width="20%">
																							<hr
																								style={{
																									width: "90%",
																									display:
																										"inline-block"
																								}}
																							/>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td
																			className="mobile-wrapper"
																			style={{ padding: "0" }}
																			valign="top">
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="33%">
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION="View Las Vegas Deals"
																										TARGET="_blank"
																										href="https://lasvegas.showtickets.com/?utm_campaign=Showtickets-Las-Vegas&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																										<img
																											alt="View Las Vegas Deals"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="http://images.delivery.net/cm50content/20483/15237/city-lasvegas.jpg"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="180"
																										/>
																									</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px 0" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="left"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="33%">
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="left"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION="View New York Deals"
																										TARGET="_blank"
																										href="https://broadway.showtickets.com/?utm_campaign=Showtickets-New-York&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																										<img
																											alt="View New York Deals"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="http://images.delivery.net/cm50content/20483/15237/city-new-york.jpg"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="93%"
																										/>
																									</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td
																						align="center"
																						style={{ padding: "0px " }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																			<table
																				align="right"
																				border="0"
																				cellPadding="0"
																				cellSpacing="0"
																				className="responsive-table"
																				width="33%">
																				<tr>
																					<td style={{ padding: "0px" }}>
																						<table
																							align="center"
																							border="0"
																							cellPadding="0"
																							cellSpacing="0"
																							width="100%">
																							<tr>
																								<td
																									align="right"
																									bgcolor="#ffffff"
																									valign="middle">
																									<a
																										ALT=""
																										DESCRIPTION="View Orlando Deals"
																										TARGET="_blank"
																										href="https://orlando.showtickets.com/?utm_campaign=Showtickets-Orlando&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																										<img
																											alt="View Orlando Deals"
																											border="0"
																											className="img-max"
																											height="auto"
																											src="http://images.delivery.net/cm50content/20483/15237/city-orlando.jpg"
																											style={{
																												display:
																													"block",
																												color:
																													"#515151",
																												fontFamily:
																													"Helvetica, arial, sans-serif",
																												fontSize:
																													"15px",
																												width:
																													"100%",
																												height:
																													"auto"
																											}}
																											width="180"
																										/>
																									</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td style={{ padding: "0px" }}>
																						&nbsp;
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td bgcolor="#ffffff">&#160;</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<table border="0" cellPadding="0" cellSpacing="0" width="100%">
											<tr>
												<td
													align="center"
													bgcolor="#f2f2f2"
													style={{ padding: "0px 0px 0px 0px" }}>
													<table
														align="center"
														border="0"
														cellPadding="0"
														cellSpacing="0"
														className="responsive-table"
														width="600">
														<tr>
															<td
																align="left"
																bgcolor="#000034"
																style={{
																	padding: "15px",
																	fontFamily: "Arial, Helvetica, sans-serif",
																	fontSize: "8pt"
																}}>
																<p style={{ color: "#999" }}>
																	Just a reminder that you&apos;re receiving this
																	email because you subscribed via our website or
																	provided your email during your last visit. You may{" "}
																	<cpt_cell_unique cell_id="0">
																		<unsub>Unsub</unsub>
																	</cpt_cell_unique>
																	<a
																		ALT=""
																		style={{
																			textDecoration: "none",
																			color: "#23a1fd"
																		}}
																		href="http://showtickets.p.delivery.net/m/u/ebg/st/n.asp?mid=<DI_MEMBER_ID/>&cid=<DI_CATALOG_ID/>">
																		Unsubscribe
																	</a>{" "}
																	if you&apos;re no longer interested.{" "}
																</p>
																<p style={{ color: "#999" }}>
																	*Prices and Offers are subject to availability and
																	subject to change without notice. Please review the
																	terms and conditions for offers. Blackout dates may
																	apply. Offers have no cash value and become void if
																	qualifying booking is cancelled.
																</p>
																<p style={{ color: "#999" }}>
																	This email was sent by: ShowTickets - 1421 East
																	Sunset Road, Suite 4, Las Vegas, Nevada, 89119, USA
																	<br />
																	<a
																		ALT=""
																		style={{
																			textDecoration: "none;color: #23a1fd"
																		}}
																		TARGET="_blank"
																		href="http://www.showtickets.com/?utm_campaign=Footer-Link&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																		www.ShowTickets.com
																	</a>{" "}
																	&#160;&#160;|&#160;&#160;{" "}
																	<a
																		ALT=""
																		style={{
																			textDecoration: "none",
																			color: "#23a1fd"
																		}}
																		TARGET="_blank"
																		href="http://www.showtickets.com/pages/Privacy_Policy/?utm_campaign=Privacy_Policy_link&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">
																		Privacy Policy
																	</a>{" "}
																	&#160;&#160;|&#160;&#160;{" "}
																	<a
																		ALT=""
																		style={{
																			textDecoration: "none",
																			color: "#23a1fd"
																		}}
																		href="http://showtickets.p.delivery.net/m/p/ebg/st/c.asp?mid=<DI_MEMBER_ID/>&cid=<DI_CATALOG_ID/>">
																		Update Profile
																	</a>
																</p>
																<br />
																<p style={{ color: "#999" }}>
																	Questions? You can reach ShowTickets.com toll free
																	at 1-800-838-8155 or 702-617-5513 (Int&apos;l).
																</p>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</body>
								</html>
							</div>
							<div className="row justify-content-center pt-5">
								<button
									type="button"
									className="btn btn-success login col-6 mr-2"
									onClick={e => {
										actions.sendSTPromoEmailToAPI(this.copyEmail());
										this.downloadEmail();
									}}>
									Download
								</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
