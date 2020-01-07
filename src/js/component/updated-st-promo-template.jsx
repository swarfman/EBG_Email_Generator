import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import slashes from "slashes";

let emailObject = {};

export className PromoEmailComponent extends Component {
	copyEmail = page => {
		let emailHTML = document.querySelector("#promo-email").cloneNode(true);

		emailObject.html = emailHTML.innerHTML;
		//console.log(emailObject);

		let emailHTMLForJSON = slashes.add(emailHTML.innerHTML);
		return emailHTMLForJSON;
	};

	downloadEmail = () => {
		let filename = "ST_Promo_Email.html";
		let text = emailObject.html;

		var element = document.createElement("a");
		element.setAttribute("href", "data:text;charset=utf-8," + encodeURIComponent(text));
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

<body style="margin: 0; padding: 0; color:#f2f2f2" bgcolor="#f2f2f2">
<table border="0" cellPadding="0" cellSpacing="0" width="100%" className="section-padding">
<tr>
<td align="center" bgcolor="#F2F2F2">
<table align="center" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="600">
<tbody>
<tr>
<td align="center" valign="middle">
<table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0">
<tr>
<td align="left" bgcolor="#000034" className="date" style="padding:10px; font-family: Arial, sans-serif; color: #ffffff; font-size: 15px;" valign="middle" width="50%">
<strong><cpt_date format="MONTH YYYY"/></strong></td>
<td align="right" bgcolor="#000034" className="mobile-hide" style="padding: 0 10px 0 0;" valign="middle" width="50%"><table border="0" cellPadding="0" cellSpacing="0">
<tr>
<td align="right" style="padding: 0 0 5px 0; font-size: 10px; font-family: Arial, sans-serif; color: #515151; text-decoration: none;"><span style="font-family: OpenSans; font-size: 12px; font-style: italic;line-height: 12px;color: #ffffff; font-weight: 400;transform: scale(0.5,0.5);"><di_at_webview BROWSERVERSION="H" DISPLAY_IN_WEBMODE="FALSE" HTMLLABEL="&#60;span STYLE&#61;'color:&#35;23a1fd;text-decoration:none;'&#62;Click here.&#60;&#47;span&#62;" MOBILEVERSION="H" OFFERID="5186366" POSTTEXT="" PRETEXT="Email not displaying correctly? "/></span></td>
</tr>
</table></td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</table>
<table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0" className="section-padding">
<tr>
<td align="center" bgcolor="#f2f2f2">
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<td align="center" bgcolor="#FFFFFF">

<table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0">
<tr>
<td style="padding: 0px;" bgcolor="#ffffff" valign="middle">

<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td align="center" valign="middle" style="padding: 20px 5px;">
<a ALT="" DESCRIPTION="Logo-top" TARGET="_blank" href="https://www.showtickets.com/?utm_campaign=Logo-Top&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"><img alt="Visit ShowTickets.com" height="auto" src="http://images.delivery.net/cm50content/20483/18489/show-tickets-logo.png" style="display: inline-inline-block;" width="237"/></a> 
</td>
</tr>
</table>

<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td align="center" valign="middle" style="padding: 20px 0;">
<table border="0" cellPadding="0" cellSpacing="0" style="font-family: 'Lato', Arial; font-size: 12px; font-weight: bold; color: #000034; line-height: 22px; word-wrap: break-word" width="90%">
<tbody>
<tr>
<td align="center"><a ALT="" DESCRIPTION="Showtickets-Las-Vegas-Top-Nav" STYLE="text-decoration:none;color:#000034;" href="https://lasvegas.showtickets.com/?utm_campaign=Showtickets-Las-Vegas-Top-Nav&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">Las Vegas&#160; &gt;</a></td>
<td align="center"><a ALT="" DESCRIPTION="Showtickets-New-York-Top-Nav" STYLE="text-decoration:none;color:#000034;" href="https://broadway.showtickets.com/?utm_campaign=Showtickets-New-York-Top-Nav&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">New York&#160; &gt;</a></td>
<td align="center"><a ALT="" DESCRIPTION="Showtickets-Orlando-Top-Nav" STYLE="text-decoration:none;color:#000034;" href="https://orlando.showtickets.com/?utm_campaign=Showtickets-Orlando-Top-Nav&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">Orlando &#160; &gt;</a></td>
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
<table border="0" cellPadding="0" cellSpacing="0" width="100%" className="section-padding">
<tr>
<td align="center" bgcolor="#F2F2F2">
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td align="center" valign="top" bgcolor="#FFFFFF">
<table border="0" cellPadding="0" cellSpacing="0" width="98%">
<tr>
<td>
<table border="0" cellPadding="0" cellSpacing="0" width="100%">
<tbody>
<tr>
<td>
<table border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td>
<a ALT="" DESCRIPTION={
																											store
																												.URLs[1]
																												.URLTitle
																										} TARGET="_blank " href={
																											store
																												.URLs[1]
																												.URL +
																											"?utm_campaign=" +
																											store
																												.URLs[1]
																												.URLTitle +
																											"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src={
																												store
																													.URLs[1]
																													.imageAddress
																											} style="display: block; padding: 0; color: #515151; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 600px; height: auto;" width="600"/></a> 
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
<table width="98%" border="0" align="center" cellPadding="0" cellSpacing="0">
<tr>
<td className="mobile-wrapper" style="padding:15px 0 0 0;" valign="top">
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="74%">
<tr>
<td align="left" style="color:#000000; font-size:20px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:uppercase;padding: 0 10px;"><strong>Sin City’s stellar magic-comedy duo are at it again</strong></td>
</tr>
<tr>
<td align="left" style="color:#000000; font-size:14px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; padding: 10px ;"><div>The Rio mainstays and <em>Fool Us</em> stars mix laughs with mind-boggling tricks </div></td>
</tr>
</table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="24%">
<tr><td align="center" valign="middle">
<table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0">
<tbody>
<tr>
<td align="center" style="color:#000034;font-size:14px; mso-line-height-rule:exactly; line-height:20px; font-family: 'Lato', Arial, Helvetica, sans-serif;font-weight:bold;padding:0 0 5px 0;" valign="middle">From</td>
</tr>
<tr>
<td align="center" style="color:#000034; font-size:32px; mso-line-height-rule:exactly; line-height:30px; font-family: 'Lato', Arial, Helvetica, sans-serif; font-weight: bold">$59</td>
</tr>
</tbody>
</table>
</td></tr>
<tr>
<td align="center" valign="middle" style="padding: 10px 0;">
<table width="50%" border="0" align="center" cellPadding="0" cellSpacing="0" className="mobilebuttoncontainer">
<tr>
<td align="center" className="padding-copy" style="padding: 0;">
<table border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td align="center"><div>
<center>
<a STYLE="background-color:#FB5724;border:1px solid #FB5724;border-radius:3px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:14px;font-weight:bold;line-height:36px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust: none;" href={
																																			store
																																				.URLs[1]
																																				.URL +
																																			"?utm_campaign=" +
																																			store
																																				.URLs[1]
																																				.URLTitle +
																																			"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																		}>BUY TICKETS</a>
</center>
</div></td>
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
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td bgcolor="#ffffff">
<table width="98%" border="0" align="center" cellPadding="0" cellSpacing="0">
<tr>
<td align="left" style="font-family: 'Lato', Arial; font-size: 16px; color: #ffffff; word-wrap: break-word; text-transform: uppercase;padding:10px" valign="top" bgcolor="#000034" className="City">
<strong>New York</strong></td>
</tr>
<tr>
<td className="mobile-wrapper" style="padding: 0; border-bottom: solid 1px #cecece;" valign="bottom">
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td style="padding: 0px 0;" valign="bottom">
<table align="left" border="0" cellPadding="0" cellSpacing="0"  width="100%">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="come-from-away" TARGET="_blank" href={
																																			store
																																				.URLs[2]
																																				.URL +
																																			"?utm_campaign=" +
																																			store
																																				.URLs[2]
																																				.URLTitle +
																																			"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																		}><img alt="Don't Miss" border="0" className="img-max" height="auto" src={
                                                                                                                                            store
                                                                                                                                                .URLs[2]
                                                                                                                                                .imageAddress
                                                                                                                                        } style="display:inline-block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="276"/></a></td>
</tr>
</table>
</td>
</tr>
</table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td align="left" className="productcell" valign="top">
<table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>Come From Away</strong></td>
</tr>
<tr>
<td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Buy Now and Save</td>
</tr>
</tbody></table>
</td>
</tr>
<tr><td align="left" className="productcell" valign="bottom"><table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
<tr>
<td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $68</strong></td>
</tr>
<tr>
<td align="center" className="productcell" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">
<table border="0" cellPadding="0" cellSpacing="0" className="productcell" width="20%">
<tr>
<td align="center" style="padding: 0;"><table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td align="center"><div>
<a STYLE="background-color:#FB5724;border:1px solid #FB5724;border-radius:3px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:bold;line-height:32px;text-align:center;text-decoration:none;width:90px;-webkit-text-size-adjust:none;" href={
																																							store
																																								.URLs[2]
																																								.URL +
																																							"?utm_campaign=" +
																																							store
																																								.URLs[2]
																																								.URLTitle +
																																							"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																						}>Buy Tickets</a> 
</div></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr><tr>
<td align="left" className="productcell" valign="bottom">&#160;</td>
</tr></table>
</td>
</tr>
<tr><td className="mobile-hide">&#160; </td></tr>
</table>
</td>
</tr>
<tr>
<td bgcolor="#ffffff">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
<tr><td className="mobile-hide">&#160; </td></tr>
<tr>
<td className="mobile-wrapper" valign="bottom">
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td style="padding: 0px 0;" valign="bottom">
<table align="left" border="0" cellPadding="0" cellSpacing="0"  width="100%">
<tr>
<td align="left" bgcolor="#ffffff" className="productcell" valign="middle"><a ALT="" DESCRIPTION="new-york-explorer-pass" TARGET="_blank" href={
																																			store
																																				.URLs[3]
																																				.URL +
																																			"?utm_campaign=" +
																																			store
																																				.URLs[3]
																																				.itle +
																																			"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																		}><img alt="Don't Miss" border="0" className="img-max" height="auto" src={
                                                                                                                                            store
                                                                                                                                                .URLs[3]
                                                                                                                                                .imageAddress
                                                                                                                                        } style="display:inline-block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="276"/></a></td>
</tr>
</table>
</td>
</tr>
</table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td align="left" className="productcell" valign="top">
<table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>New York City Explorer Pass</strong></td>
</tr>
<tr>
<td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Save up to 50%</td>
</tr>
</tbody></table>
</td>
</tr>
<tr><td align="left" className="productcell" valign="bottom"><table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
<tr>
<td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $59</strong></td>
</tr>
<tr>
<td align="center" className="productcell" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">
<table border="0" cellPadding="0" cellSpacing="0" className="productcell" width="20%">
<tr>
<td align="center" style="padding: 0;"><table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td align="center"><div>
<a STYLE="background-color:#FB5724;border:1px solid #FB5724;border-radius:3px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:bold;line-height:32px;text-align:center;text-decoration:none;width:90px;-webkit-text-size-adjust:none;" href={
																																							store
																																								.URLs[3]
																																								.URL +
																																							"?utm_campaign=" +
																																							store
																																								.URLs[3]
																																								.URLTitle +
																																							"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																						}>Buy Tickets</a> 
</div></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr><tr>
<td align="left" className="productcell" valign="bottom">&#160;</td>
</tr></table>
</td>
</tr>
<tr><td className="mobile-hide">&#160; </td></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellPadding="0" cellSpacing="0" width="100%" className="section-padding">
  <tbody>
    <tr>
<td align="center" bgcolor="#f2f2f2" className="section-padding">
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tbody width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
	<tr>
	<td bgcolor="#ffffff">
	<table  width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
		<tbody width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
		<tr>
<td >&#160;</td>
</tr>	
	<tr>
	<td align="center">
	<a DESCRIPTION="Promo-Code" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="q-and-a-alex-timbers-director-beetlejuice-musical" className="resizeimage" height="auto" src="http://ebgimg.delivery.net/Refresh/Fall-Promo-Extended-728x90.jpg" style="display: block; margin: 0 auto" width="589"/></a> 
	</td>
</tr>
	<tr>
<td >&#160;</td>
</tr>
		</tbody>			
	</table>
	</td>
	</tr>
</tbody></table>
</td>
</tr>
  </tbody>
</table>

<table border="0" cellPadding="0" cellSpacing="0" width="100%" className="section-padding">

<tr>
  <td align="center" bgcolor="#f2f2f2" className="section-padding">
  <table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
  <tr>
  <td bgcolor="#ffffff">
  <table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
  <tr>
  <td align="left" bgcolor="#000034" style="font-family: 'Lato', Arial; font-size: 16px; color: #ffffff; word-wrap: break-word; text-transform: uppercase;padding: 10px" valign="top" className="City">
  <strong>Las Vegas</strong></td>
  </tr>
  <tr>
  <td className="mobile-wrapper" style="padding: 0;" valign="top">
  <table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="33%">
  <tr>
  <td style="padding: 0px 0;">
  <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
  <tr>
  <td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="dwight-yoakam" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src={
                                                                                                                                                                            store
                                                                                                                                                                                .URLs[4]
                                                                                                                                                                                .imageAddress
                                                                                                                                                                        } style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="180"/></a></td>
  </tr>
  <tr>
  <td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
  <tbody>
  <tr>
  <td align="left"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
  <tbody><tr>
  <td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>An Evening with Dwight Yoakam & The Bakersfield Beat</strong></td>
  </tr>
  <tr>
  <td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Receive Assigned Seats</td>
  </tr>
  </tbody></table>
  <table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
  <tr>
  <td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $101</strong></td>
  </tr>
  <tr>
  <td align="center" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">
  <table border="0" cellPadding="0" cellSpacing="0" className="mobile-button-container" width="20%">
  <tr>
  <td align="center" style="padding: 0;">
  <table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
  <tr>
  <td align="center"><div></div></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td></tr>
  </tbody>
  </table></td></tr>
  </table>
  </td>
  </tr>
  <tr>
    <td style="padding: 0px 0;">&nbsp;</td>
  </tr>
  </table>
  <table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="33%">
  <tr>
    <td align="center" style="padding: 0px ;">&nbsp;</td>
  <td align="center" style="padding: 0px ;">
  <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
  <tr>
  <td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="grand-canyon-south-rim-bus-tours-gray-line" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/grand-canyon-south-rim-bus-tours_300x140.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="180"/></a></td>
  </tr>
  <tr>
  <td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
  <tbody>
  <tr>
  <td align="left"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
  <tbody><tr>
  <td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>Grand Canyon South Rim Bus Tour<br>&nbsp;</ br><br /></strong></td>
  </tr>
  <tr>
  <td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Save up to $125</td>
  </tr>
  </tbody></table>
  <table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
  <tr>
  <td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $89</strong></td>
  </tr>
  <tr>
  <td align="center" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">
  <table border="0" cellPadding="0" cellSpacing="0" className="mobile-button-container" width="20%">
  <tr>
  <td align="center" style="padding: 0;">
  <table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
  <tr>
  <td align="center"></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td></tr>
  </tbody>
  </table></td></tr>
  </table>
  </td>
  </tr>
  <tr>
    <td align="center" style="padding: 0px ;">&nbsp;</td>
  </tr>
  </table>
  <table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="33%">
  <tr>
  <td style="padding: 0px ;">
  <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
  <tr>
  <td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="o-cirque-du-soleil" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/o-cirque-du-soleil-slider-300x140.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="180"/></a></td>
  </tr>
  <tr>
  <td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
  <tbody>
  <tr>
  <td align="left"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
  <tbody><tr>
  <td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>"O™" by Cirque du Soleil®</strong></td>
  </tr>
  <tr>
  <td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Receive Exclusive Assigned Seating</td>
  </tr>
  </tbody></table>
  <table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
  <tr>
  <td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $119</strong></td>
  </tr>
  <tr>
  <td align="center" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">

  <table border="0" cellPadding="0" cellSpacing="0" className="mobile-button-container" width="20%">
  <tr>
  <td align="center" style="padding: 0;">
  <table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
  <tr>
  <td align="center"><div></div></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td></tr>
  </tbody>
  </table></td></tr>
  </table>
  </td>
  </tr>
  <tr>
    <td style="padding: 0px ;">&nbsp;</td>
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
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td bgcolor="#ffffff">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
<tr>
<td align="left" bgcolor="#000034" style="font-family: 'Lato', Arial; font-size: 16px; color: #ffffff; word-wrap: break-word; text-transform: uppercase;padding: 10px" valign="top" className="City">
<strong>Orlando</strong></td>
</tr>
<tr>
<td className="mobile-wrapper" style="padding: 0;" valign="top">
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td style="padding: 0px 0;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="pirates-dinner-adventure" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/pirates-dinner-adventure-300x140.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 98%; height:auto;" width="265"/></a></td>
</tr>
<tr>
<td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
<tbody>
<tr>
<td align="left"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>Pirates Dinner Adventure</strong></td>
</tr>
<tr>
<td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Save 50%</td>
</tr>
</tbody></table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
<tr>
<td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $35</strong></td>
</tr>
<tr>
<td align="center" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">
<table border="0" cellPadding="0" cellSpacing="0" className="mobile-button-container" width="20%">
<tr>
<td align="center" style="padding: 0;">
<table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td align="center"><div></div></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td></tr>
</tbody>
</table></td></tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px 0;">&nbsp;</td>
</tr>
</table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="47%">
<tr>
<td style="padding: 0px 0;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td align="right" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="blue-man-group" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/blue-man-300x140_82.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 98%; height:auto;" width="265"/></a></td>
</tr>
<tr>
<td align="center" className="promo-padding"><table align="right" border="0" cellPadding="0" cellSpacing="0" width="98%">
<tbody>
<tr>
<td align="left" width="200"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="left" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 10px 0 10px 0;"><strong>Blue Man Group Orlando</strong></td>
</tr>
<tr>
<td align="left" className="font16" style="color:#fc1d12; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 0 0 10px 0;">Save 15% on Premium Seating</td>
</tr>
</tbody></table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="20%">
<tr>
<td align="right" className="font16" colSpan="2" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $54</strong></td>
</tr>
<tr>
<td align="center" style="padding: 12px 0 0 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px;">
<table border="0" cellPadding="0" cellSpacing="0" className="mobile-button-container" width="20%">
<tr>
<td align="center" style="padding: 0;">
<table border="0" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td align="center"><div></div></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td></tr>
</tbody>
</table></td></tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px 0;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td align="center" bgcolor="#f2f2f2" className="section-padding">
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td bgcolor="#ffffff">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
<tr>
<td align="center" bgcolor="#ffffff" height="50">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tbody>
<tr>
<td align="center" className="mobile-hide" valign="middle" width="20%"><hr style="width:90%; display: inline-block;"/></td>
<td align="center" className="stack-column-center p-0" style="font-family: 'Lato', Arial; font-size: 24px; color: #000034; word-wrap: break-word; text-transform: capitalize; font-style: italic;" width="60%"><strong>Recommended For You</strong></td>
<td align="center" className="mobile-hide" valign="middle" width="20%"><hr style="width:90%; display: inline-block;"/></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td className="mobile-wrapper" style="padding: 0;" valign="top">
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table-50" width="24%">
<tr>
<td align="center" style="padding: 0px 0;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="140">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="dear-evan-hansen" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/dear-evan-hansen-140x215.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 140px; height:auto;" width="140"/></a></td>
</tr>
<tr>
<td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="center" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 20px 0 20px 0;">Dear Evan Hansen<br>&nbsp;</ br><br /></td>
</tr>
<tr>
<td align="center" className="font16" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $79</strong></td>
</tr>
<tr><td height="60" align="center" valign="middle"><a STYLE="color:#23a1fd; font-size:13px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal; text-transform:uppercase;text-decoration:none;" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><strong>Buy Tickets</strong></a></td>
</tr>
</tbody></table></td></tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px 0;">&nbsp;</td>
</tr>
</table>
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table-50" width="24%">
<tr>
	<td align="center" style="padding: 0px ;">&nbsp;</td>
<td align="center" style="padding: 0 0 0px3px;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="140">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="mangos-tropical-cafe" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/mangostropicalcafe_140x215.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width:140px; height:auto;" width="140"/></a></td>
</tr>
<tr>
<td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="center" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 20px 0 20px 0;">Mango's Tropical Cafe Orlando</td>
</tr>
<tr>
<td align="center" className="font16" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $36</strong></td>
</tr>
<tr><td height="60" align="center" valign="middle"><a STYLE="color:#23a1fd; font-size:13px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal; text-transform:uppercase;text-decoration:none;" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><strong>Buy Tickets</strong></a></td>
</tr>
</tbody></table></td></tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px 0;">&nbsp;</td>
</tr>
</table>
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table-50" width="24%">
<tr>
	<td align="center" style="padding: 0px ;">&nbsp;</td>
<td align="center" style="padding: 0 0 0px 3px;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="140">
<tr>
<td align="right" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="absinthe" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/absinthe-140x215.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width:140px; height:auto;" width="140"/></a></td>
</tr>
<tr>
<td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="center" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 20px 0 20px 0;">Absinthe<br>&nbsp;</ br><br /></td>
</tr>
<tr>
<td align="center" className="font16" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $83</strong></td>
</tr>
<tr><td height="60" align="center" valign="middle"><a STYLE="color:#23a1fd; font-size:13px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal; text-transform:uppercase;text-decoration:none;" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><strong>Buy Tickets</strong></a></td>
</tr>
</tbody></table></td></tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px 0;">&nbsp;</td>
</tr>
</table>
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table-50" width="24%">
<tr>
	<td style="padding: 0px 0;">&nbsp;</td>
<td align="center" style="padding: 0 0 0px 3px;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="140">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="las-vegas-off-road-racing" TARGET="_blank" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-img&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><img alt="Don't Miss" border="0" className="img-max" height="auto" src="images/off-road-racing-140x215.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width:140px; height:auto;" width="140"/></a></td>
</tr>
<tr>
<td align="center" className="promo-padding"><table align="center" border="0" cellPadding="0" cellSpacing="0" style="border-collapse: collapse" width="100%">
<tbody><tr>
<td align="center" className="productcell" style="color:#000000; font-size:15px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal;padding: 20px 0 20px 0;">
Off-Road Racing Experience</td>
</tr>
<tr>
<td align="center" className="font16" style="color:#000034; font-size:15px; font-family:'Lato', Arial, Helvetica, sans-serif; font-weight:normal; text-transform:none;padding-right: 10px;"><strong><em style="font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">from</em> $65</strong></td>
</tr>
<tr><td height="60" align="center" valign="middle"><a STYLE="color:#23a1fd; font-size:13px; font-family:&#39;Lato&#39;, Arial, Helvetica, sans-serif; font-weight:normal; text-transform:uppercase;text-decoration:none;" href={
																																											store
																																												.URLs[4]
																																												.URL +
																																											"?utm_campaign=" +
																																											store
																																												.URLs[4]
																																												.URLTitle +
																																											"-btn&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"
																																										}><strong>Buy Tickets</strong></a></td>
</tr>
</tbody></table></td></tr>
</table>
</td>
</tr>
<tr>
 <td align="center" style="padding: 0 0 0px 3px;">&nbsp;</td>
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
<table width="600" border="0" align="center" cellPadding="0" cellSpacing="0" className="responsive-table">
<tr>
<td bgcolor="#ffffff">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="98%">
<tr>
<td align="center" bgcolor="#ffffff" height="50">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tbody>
<tr>
<td align="center" className="mobile-hide" valign="middle" width="20%"><hr style="width:90%; display: inline-block;"/></td>
<td align="center" className="stack-column-center p-0" style="font-family: 'Lato', Arial; font-size: 22px; color: #000034; word-wrap: break-word; text-transform: capitalize; font-style: italic;" width="60%"><strong>Select a city to see more deals</strong></td>
<td align="center" className="mobile-hide" valign="middle" width="20%"><hr style="width:90%; display: inline-block;"/></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td className="mobile-wrapper" style="padding: 0;" valign="top">
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="33%">
<tr>
<td style="padding: 0px 0;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="View Las Vegas Deals" TARGET="_blank" href="https://lasvegas.showtickets.com/?utm_campaign=Showtickets-Las-Vegas&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"><img alt="View Las Vegas Deals" border="0" className="img-max" height="auto" src="http://images.delivery.net/cm50content/20483/15237/city-lasvegas.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="180"/></a></td>
</tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px 0;">&nbsp;</td>
</tr>
</table>
<table align="left" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="33%">
<tr>
<td align="center" style="padding: 0px ;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td align="left" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="View New York Deals" TARGET="_blank" href="https://broadway.showtickets.com/?utm_campaign=Showtickets-New-York&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"><img alt="View New York Deals" border="0" className="img-max" height="auto" src="http://images.delivery.net/cm50content/20483/15237/city-new-york.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="93%"/></a></td>
</tr>
</table>
</td>
</tr>
<tr>
 <td align="center" style="padding: 0px ;">&nbsp;</td>
</tr>
</table>
<table align="right" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="33%">
<tr>
<td style="padding: 0px ;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
<tr>
<td align="right" bgcolor="#ffffff" valign="middle"><a ALT="" DESCRIPTION="View Orlando Deals" TARGET="_blank" href="https://orlando.showtickets.com/?utm_campaign=Showtickets-Orlando&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta"><img alt="View Orlando Deals" border="0" className="img-max" height="auto" src="http://images.delivery.net/cm50content/20483/15237/city-orlando.jpg" style="display: block; color: #515151; font-family: Helvetica, arial, sans-serif; font-size: 15px; width: 100%; height:auto;" width="180"/></a></td>
</tr>
</table>
</td>
</tr>
<tr>
 <td style="padding: 0px ;">&nbsp;</td>
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
<td align="center" bgcolor="#f2f2f2" style="padding: 0px 0px 0px 0px;">
<table align="center" border="0" cellPadding="0" cellSpacing="0" className="responsive-table" width="600">
<tr>
<td align="left" bgcolor="#000034" style="padding:15px; font-family: Arial, Helvetica, sans-serif; font-size: 8pt;"><p style="color:#999;">Just 
 a reminder that you're receiving this email because you subscribed via 
our website or provided your email during your last visit. You may <cpt_cell_unique cell_id="0"><unsub>Unsub</unsub></cpt_cell_unique><a ALT="" STYLE="text-decoration: none;color: #23a1fd;" href="http://showtickets.p.delivery.net/m/u/ebg/st/n.asp?mid=<DI_MEMBER_ID/>&cid=<DI_CATALOG_ID/>">Unsubscribe</a> if you're no longer interested. </p>
<p style="color:#999;">*Prices and Offers are subject to availability and subject to change without notice. Please review the terms and conditions for offers. Blackout dates may apply. Offers have no cash value and become void if qualifying booking is cancelled.</p>
<p style="color:#999;">
This email was sent by: ShowTickets - 1421 East Sunset Road, Suite 4, Las Vegas, Nevada, 89119, USA<br/>
<a ALT="" STYLE="text-decoration: none;color: #23a1fd;" TARGET="_blank" href="http://www.showtickets.com/?utm_campaign=Footer-Link&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">www.ShowTickets.com</a> &#160;&#160;|&#160;&#160; <a ALT="" STYLE="text-decoration: none;color: #23a1fd;" TARGET="_blank" href="http://www.showtickets.com/pages/Privacy_Policy/?utm_campaign=Privacy_Policy_link&aff=ST2543dc&utm_source=Email&utm_medium=<DI_TRACKING_CODE/>&conv_source=zeta">Privacy Policy</a> &#160;&#160;|&#160;&#160; <a ALT="" STYLE="text-decoration: none;color: #23a1fd;" href="http://showtickets.p.delivery.net/m/p/ebg/st/c.asp?mid=<DI_MEMBER_ID/>&cid=<DI_CATALOG_ID/>">Update Profile</a><br/>
Questions? You can reach ShowTickets.com toll free at 1-800-838-8155 or 702-617-5513 (Int'l).</p></td>
</tr>
</table>
</td>
</tr>
</table>

</body>
							</div>
							<div classNameName="row justify-content-center pt-5">
								<button
									type="button"
									classNameName="btn btn-success login col-md-10 col-lg-5 col-sm-8 col-xs-8 mb-1"
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
