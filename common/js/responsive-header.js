document.write("<header class=\"bg-black\">");
document.write("<a class=\"logo\" href=\"http:\/\/www.dallasnews.com\" id=\"top\">");
document.write("<span class=\"sr-only\">The Dallas Morning News<\/span>");
document.write("<\/a>");
document.write("<button id=\"navDrop\" onClick=\"return false;\">");
document.write("<div class=\"fico icon-list sections-icon\"><\/div>");
document.write("<span class=\"menuText\">Menu<\/span>");
document.write("<\/button>");
document.write("<\/header>");
document.write("<nav id=\"mainNav\">");
document.write("<ul class=\"navList\">");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/news\/\">News<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/business\/\">Business<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/sports\/\">Sports<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/entertainment\/\">Entertainment<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/opinion\/\">Opinion<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/lifestyles\/\">Life<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/www.dallasnews.com\/photos\/\">Photos<\/a><\/li>");
document.write("<li><a class=\"sectionLink\" href=\"http:\/\/video.dallasnews.com\/\">Video<\/a><\/li>");
document.write("<li><a class=\"sectionLink marketplace\" href=\"http:\/\/m.cars.com\/?aff=dallas\">Autos<\/a><\/li>");
document.write("<li><a class=\"sectionLink marketplace\" href=\"http:\/\/findnsave.dallasnews.com\/stores\/\">Shopping<\/a><\/li>");
document.write("<li><a class=\"sectionLink marketplace\" href=\"http:\/\/secure.adpay.com\/SearchMobile.aspx?p=1013&city=1013\/\">Classifieds<\/a><\/li>");
document.write("<li><a class=\"sectionLink marketplace\" href=\"http:\/\/m.realestate.dallasnews.com\/eng\/sales\/tx-usa\">Real Estate<\/a><\/li>");
document.write("<li><a class=\"sectionLink marketplace\" href=\"http:\/\/m.local-jobs.monster.com\/jobsearch\/jobs?ch=dallasmorning&where=Dallas\">Jobs<\/a><\/li>");
document.write("<li><a class=\"sectionLink marketplace\" href=\"http:\/\/m.legacy.com\/obituaries\/dallasmorningnews\">Obituaries<\/a><\/li>");
document.write("<li><a class=\"sectionLink fico icon-newspaper\" href=\"https:\/\/myaccount.dallasnews.com\/signin-olive.html?from=http%3a%2f%2ftablet.olivesoftware.com%2fOlive%2fTablet%2fDallasMorningNews%2fAfterLogin.ashx\">ePaper<\/a><\/li>");
document.write("<li><a class=\"sectionLink fico icon-user\" href=\"https:\/\/myaccount.dallasnews.com\/\">My Account<\/a><\/li>");
document.write("<\/ul>");
document.write("<\/nav>");



var dmnMenuButton = document.getElementById('navDrop');;
var dmnMainNav = document.getElementById('mainNav');

function hasClass(element, clsName) {
	return (' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}

function navDisplay() {
	if (hasClass(dmnMainNav, 'navActive') === true ) {
		dmnMainNav.classList.remove('navActive');
	} else {
		dmnMainNav.classList.add('navActive');	
	} return false;	
}

dmnMenuButton.addEventListener('click', navDisplay, false);
