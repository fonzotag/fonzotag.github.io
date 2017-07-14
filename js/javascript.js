function leaveAlert() {
	alert("Warning! This link will take you away from our Helpdesk site\n" +
	"and open in a new tab or window! Please click Ok to continue.");
}
function clear() {
	document.getElementById("this").reset();
}

//function guideLinks() {
//var googleCat = ["Gmail", "Calendar", "iPhone/iPad", "Contacts", "Drive", "Forms", "Documents", "Printing"];
//var arrayLink = [gmailArray(), calendarArray(), appmobArray(), contactsArray(), driveArray(), formsArray(), docsArray(), printArray()];
//for (i = 0; i < googleCat.length; i++) {
//	arrayCat = "<ul>" + googleCat[i] + "</ul>";
//	document.getElementById("p1").innerHTML += arrayCat;
//}
//for (i = 0; i < arrayLink.length; i++) {
//	googleCat[i].onclick = "arrayLink[i]";
//}


//	GMAIL----------------------------
function gmailArray() {
var gmaildocLink = ['javascript:', 'https://gsuite.google.com/learning-center/products/gmail/cheat-sheet/', 'https://gsuite.google.com/learning-center/products/gmail/get-started/#section-1', 'https://gsuite.google.com/learning-center/products/gmail/switch-from-outlook/', 'guides/inboxsearchadv/Inbox_SearchAdvanced.html', 'guides/turnoffconvmodegmailpc/How_To_Turn_Off_Conversation_Mode_in_Gmail_-_LaptopComputer.html', 'guides/addswitchaccountgmailpc/How_To_Add_AccountSwitch_Users_in_Gmail_-_PC.html'];
var gmaildocTitle = ["documents", "Cheat Sheet", "10-Minute Training", "Switch Training", "Inbox Search", "Conversation Mode", "Switch/Add Account"];
var gmaildocAlt = ["", "Google Cheat Sheet For Gmail", "Google 10-Minute Training For Gmail", "Google Training For Switching To Gmail From Outlook", "Gmail Inbox Search", "How To Turn Off Conversation Mode In Gmail - Laptop/Computer", "How To Switch/Add Accounts In Gmail"];
var gmailvidLink = ['javascript:'];
var gmailvidTitle = ["videos"];
var gmailvidAlt = [""];
if (document.getElementById("gmailList").innerHTML == "" & document.getElementById("gmailList1").innerHTML == "") {
	if (gmaildocTitle.length == 1) {
		document.getElementById("gmailList").innerHTML = "";
	}
	else {
	for (i = 0; i < gmaildocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", gmaildocLink[i]);
	link.setAttribute("title", gmaildocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = gmaildocTitle[i];
	document.getElementById("gmailList").innerHTML += link.outerHTML + "<br>";
}}
	if (gmailvidTitle.length == 1) {
		document.getElementById("gmailList1").innerHTML = "";
	}
	else {
	for (i = 0; i < gmailvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", gmailvidLink[i]);
	link.setAttribute("title", gmailvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = gmailvidTitle[i];
	document.getElementById("gmailList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("gmailList").innerHTML = "";
	document.getElementById("gmailList1").innerHTML = "";
}}

//	CALENDAR---------------------------
function calendarArray () {
var calendardocLink = ['javascript:', 'https://gsuite.google.com/learning-center/products/calendar/get-started/#section-1-1'];
var calendardocTitle = ["documents", "Getting started"];
var calendardocAlt = ["", "Google Learning Center Getting Started In Calendar"];
var calendarvidLink = ['javascript:'];
var calendarvidTitle = ["videos"];
var calendarvidAlt = [""];
if (document.getElementById("calendarList").innerHTML == "" & document.getElementById("calendarList1").innerHTML == "") {
	if (calendardocTitle.length == 1) {
		document.getElementById("calendarList").innerHTML = "";
	}
	else {
	for (i = 0; i < calendardocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", calendardocLink[i]);
	link.setAttribute("title", calendardocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = calendardocTitle[i];
	document.getElementById("calendarList").innerHTML += link.outerHTML + "<br>";
}}
	if (calendarvidTitle.length == 1) {
		document.getElementById("calendarList1").innerHTML = "";
	}
	else {
	for (i = 0; i < calendarvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", calendarvidLink[i]);
	link.setAttribute("title", calendarvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = calendarvidTitle[i];
	document.getElementById("calendarList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("calendarList").innerHTML = "";
	document.getElementById("calendarList1").innerHTML = "";
}}

//	IPHONE/IPAD
function appmobArray() {
var appmobdocLink = ['javascript:', 'guides/gmailiphoneipad/Setting_Up_Google_Mail_On_An_iPhone_or_iPad.html', 'guides/turnoffconvmodeimailiphone/How_To_Turn_Off_Conversation_Mode_In_iMail_-_iPhoneiPad.html'];
var appmobdocTitle = ["documents", "Gmail Setup", "Conversation Mode"];
var appmobdocAlt = ["", "Setting Up Google Mail On An iPhone or iPad", "How To Turn Off Conversation Mode in iMail - iPad/iPhone"]
var appmobvidLink = ['javascript:', 'https://www.youtube.com/watch?v=Fkg9EFLaSWY'];
var appmobvidTitle = ["videos", "Docs Offline Access"];
var appmobvidAlt = ["", "Google Docs Offline Mode"]
if (document.getElementById("appmobList").innerHTML == "" & document.getElementById("appmobList1").innerHTML == "") {
	if (appmobdocTitle.length == 1) {
		document.getElementById("appmobList").innerHTML = "";
	}
	else {
	for (i = 0; i < appmobdocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", appmobdocLink[i]);
	link.setAttribute("title", appmobdocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = appmobdocTitle[i];
	document.getElementById("appmobList").innerHTML += link.outerHTML + "<br>";
}}
	if (appmobvidTitle.length == 1) {
		document.getElementById("appmobList1").innerHTML = "";
	}
	else {
	for (i = 0; i < appmobvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", appmobvidLink[i]);
	link.setAttribute("title", appmobvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = appmobvidTitle[i];
	document.getElementById("appmobList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("appmobList").innerHTML = "";
	document.getElementById("appmobList1").innerHTML = "";
}}

//	CONTACTS
function contactsArray () {
var contactsdocLink = ['javascript:', 'https://gsuite.google.com/learning-center/products/contacts/get-started/'];
var contactsdocTitle = ["documents", "Getting Started"];
var contactsdocAlt = ["", "Getting Started With Contacts In Gmail"];
var contactsvidLink = ['javascript:'];
var contactsvidTitle = ["videos"];
var contactsvidAlt = [""];
if (document.getElementById("contactsList").innerHTML == "" & document.getElementById("contactsList1").innerHTML == "") {
	if (contactsdocTitle.length == 1) {
		document.getElementById("contactsList").innerHTML = "";
	}
	else {
	for (i = 0; i < contactsdocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", contactsdocLink[i]);
	link.setAttribute("title", contactsdocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = contactsdocTitle[i];
	document.getElementById("contactsList").innerHTML += link.outerHTML + "<br>";
}}
	if (contactsvidTitle.length == 1) {
		document.getElementById("contactsList1").innerHTML = "";
	}
	else {
	for (i = 0; i < contactsvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", contactsvidLink[i]);
	link.setAttribute("title", contactsvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = contactsvidTitle[i];
	document.getElementById("contactsList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("contactsList").innerHTML = "";
	document.getElementById("contactsList1").innerHTML = "";
}}

//	DRIVE
function driveArray () {
var drivedocLink = ['javascript:', 'guides/sharepermgoogledrive/How_to_Share_View_Permissions_in_Google_Drive.html'];
var drivedocTitle = ["documents", "Sharing"];
var drivedocAlt = ["", "How To Create A Shareable View-Only Link To A Google Drive Item"];
var drivevidLink = ['javascript:', 'https://www.youtube.com/watch?v=Qz4O4wF7-2E', 'https://www.youtube.com/watch?v=jszTenyxTfE'];
var drivevidTitle = ["videos", "Changing Colors", "Desktop Application"];
var drivevidAlt = ["", "Changing Colors Of Drive Folders", "Google Drive Desktop App"];
if (document.getElementById("driveList").innerHTML == "" & document.getElementById("driveList1").innerHTML == "") {
	if (drivedocTitle.length == 1) {
		document.getElementById("driveList").innerHTML = "";
	}
	else {
	for (i = 0; i < drivedocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", drivedocLink[i]);
	link.setAttribute("title", drivedocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = drivedocTitle[i];
	document.getElementById("driveList").innerHTML += link.outerHTML + "<br>";
}}
	if (drivevidTitle.length == 1) {
		document.getElementById("driveList1").innerHTML = "";
	}
	else {
	for (i = 0; i < drivevidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", drivevidLink[i]);
	link.setAttribute("title", drivevidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = drivevidTitle[i];
	document.getElementById("driveList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("driveList").innerHTML = "";
	document.getElementById("driveList1").innerHTML = "";
}}

//	FORMS
function formsArray () {
var formsdocLink = ['javascript:'];
var formsdocTitle = ["documents"];
var formsdocAlt = [""];
var formsvidLink = ['javascript:', 'https://www.youtube.com/watch?v=8pqF2plT1i'];
var formsvidTitle = ["videos", "Adding Questions"];
var formsvidAlt = ["", "Adding Questions To Google Form"];
if (document.getElementById("formsList").innerHTML == "" & document.getElementById("formsList1").innerHTML == "") {
	if (formsdocTitle.length == 1) {
		document.getElementById("formsList").innerHTML = "";
	}
	else {
	for (i = 0; i < formsdocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", formsdocLink[i]);
	link.setAttribute("title", formsdocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = formsdocTitle[i];
	document.getElementById("formsList").innerHTML += link.outerHTML + "<br>";
}}
	if (formsvidTitle.length == 1) {
		document.getElementById("formsList1").innerHTML = "";
	}
	else {
	for (i = 0; i < formsvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", formsvidLink[i]);
	link.setAttribute("title", formsvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = formsvidTitle[i];
	document.getElementById("formsList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("formsList").innerHTML = "";
	document.getElementById("formsList1").innerHTML = "";
}}

//	DOCUMENTS
function docsArray () {
var docsdocLink = ['javascript:'];
var docsdocTitle = ["documents"];
var docsdocAlt = [""];
var docsvidLink = ['javascript:', 'https://drive.google.com/a/apsb.info/file/d/0Bwuy_pjAs9W3V1hSQjJWeHhBOWs/view?usp=sharing', 'https://drive.google.com/a/apsb.info/file/d/0Bwuy_pjAs9W3SWlGMG9oQk15eEE/view?usp=sharing'];
var docsvidTitle = ["videos", "Benefits Of", "Offline Access"];
var docsvidAlt = ["", "Benefits Of Google Docs", "Google Docs Offline Mode"];
if (document.getElementById("docsList").innerHTML == "" & document.getElementById("docsList1").innerHTML == "") {
	if (docsdocTitle.length == 1) {
		document.getElementById("docsList").innerHTML = "";
	}
	else {
	for (i = 0; i < docsdocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", docsdocLink[i]);
	link.setAttribute("title", docsdocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = docsdocTitle[i];
	document.getElementById("docsList").innerHTML += link.outerHTML + "<br>";
}}
	if (docsvidTitle.length == 1) {
		document.getElementById("docsList1").innerHTML = "";
	}
	else {
	for (i = 0; i < docsvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", docsvidLink[i]);
	link.setAttribute("title", docsvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = docsvidTitle[i];
	document.getElementById("docsList1").innerHTML += link.outerHTML + "<br>";
}}}
else {
	document.getElementById("docsList").innerHTML = "";
	document.getElementById("docsList1").innerHTML = "";
}}

//	PRINTING
function printArray() {
var printdocLink = ['javascript:'];
var printdocTitle = ["documents"];
var printdocAlt = [""];
var printvidLink = ['javascript:', 'https://drive.google.com/a/apsb.info/file/d/0Bwuy_pjAs9W3eVZtMDVxRWVrdkU/view?usp=sharing'];
var printvidTitle = ["videos", "Cloud Printing 101"];
var printvidAlt = ["", "Cloud Printing 101"];
if (document.getElementById("printList").innerHTML == "" & document.getElementById("printList1").innerHTML == "") {
	if (printdocTitle.length == 1) {
		document.getElementById("printList").innerHTML = "";
	}
	else {
	for (i = 0; i < printdocTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", printdocLink[i]);
	link.setAttribute("title", printdocAlt[i]);
	link.setAttribute("target", "player");
	link.innerHTML = printdocTitle[i];
	document.getElementById("printList").innerHTML += link.outerHTML + "<br>";
	}}
	if (printvidTitle.length == 1) {
		document.getElementById("printList1").innerHTML = "";
	}
	else {
	for (i = 0; i < printvidTitle.length; i++) {
	var link = document.createElement("a");
	link.setAttribute("href", printvidLink[i]);
	link.setAttribute("title", printvidAlt[i]);
	link.setAttribute("target", "_about");
	link.innerHTML = printvidTitle[i];
	document.getElementById("printList1").innerHTML += link.outerHTML + "<br>";
	}}}
else {
	document.getElementById("printList").innerHTML = "";
	document.getElementById("printList1").innerHTML = "";
}}
