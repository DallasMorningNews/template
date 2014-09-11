s_account2 = 'bidallasnewscom';
om_linkInternalFilters='javascript:,dallasnews.com';
om_fpcdomain='dallasnews.com';

var omPageName = "";
var omSiteSection = "";
var omSubSection1 = "";
var omSubSection2 = "";
var omSubSection3 = "";
var omSectionContentType = "";
var omArticleTitle = "";
var omDirectoryPath = "";
var omArticleId = "";
var omPageType = "";
var OAS_sitepage_array;
var omSections = ['','','',''];

if (typeof (OAS_sitepage) != 'undefined' && OAS_sitepage.length > 0)
{
	OAS_sitepage_array = OAS_sitepage.split("/");
	if (OAS_sitepage_array.length > 1)
	{
		if (OAS_sitepage_array[0].toLowerCase().indexOf('www') == 0) OAS_sitepage_array.shift();
	}
	else
	{
		if (OAS_sitepage == 'fdluxe.dallasnews.com')
		{
			OAS_sitepage_array = ['entertainment','fdluxe'];
		}
		else
		{
			OAS_sitepage_array = ['sitepage-unknown'];
		}
	}
}
else
{
	OAS_sitepage_array = ['sitepage-unknown'];
}

if (OAS_sitepage_array[0].length == 0) OAS_sitepage_array.shift();
if (OAS_sitepage_array[OAS_sitepage_array.length-1].length == 0) OAS_sitepage_array.length = OAS_sitepage_array.length - 1;

omPageName = OAS_sitepage_array.join(":");
omDirectoryPath = OAS_sitepage_array.join("/");
omArticleId = "";
omPageType = "";

for (var om_i = 0 ; om_i < omSections.length ; om_i++)
{
	for (var om_j = 0 ; om_j <= om_i && om_j < OAS_sitepage_array.length ; om_j++)
	{
		if (om_j > 0) omSections[om_i] += ':';
		omSections[om_i] += OAS_sitepage_array[om_j];
	}
}

omSiteSection = omSections[0];
omSubSection1 = omSections[1];
omSubSection2 = omSections[2];
omSubSection3 = omSections[3];

omArticleTitle = '';
if (document.location.hostname.indexOf("blog.dallasnews.com") >= 0 && document.location.href.indexOf(".html") >= 0)
{
	omArticleTitle = document.title;
	while (omArticleTitle.indexOf("'") >= 0) omArticleTitle = omArticleTitle.replace("'","");
}
// clear out the article title only for obits so they don't show up in the headlines report
//if (OAS_sitepage == 'www.dallasnews.com/news/obituaries') omArticleTitle = '';

var omLoginId = "";
var omSubscriber = "";
try
{
if (OASgetCookie("OASImgEmail") != null && OASgetCookie("OASImgEmail").length > 0)
{
omLoginId = OASgetCookie("OASImgEmail");
}
if (OASgetCookie("pimg2") != null && OASgetCookie("pimg2").length > 0)
{
omSubscriber = "subscriber";
}
}
catch (e) {}

if (typeof (getCookie) == 'undefined')  document.writeln('<sc' + 'ript language="JavaScript" type="text/javascript" src="http://www.dallasnews.com/resources/js/ua-detect.js"></sc' + 'ript>');
if (typeof (belo) == 'undefined') document.writeln('<sc' + 'ript language="JavaScript" type="text/javascript" src="http://www.dallasnews.com/resrsc/www/js/cgm.js"></sc' + 'ript>');
document.writeln('<sc' + 'ript language="JavaScript" type="text/javascript" src="http://www.dallasnews.com/resources/js/omniture_s_code.js"></sc' + 'ript>');
document.writeln('<sc' + 'ript language="JavaScript" type="text/javascript" src="http://www.dallasnews.com/resources/js/omniture.js"></sc' + 'ript>');
document.writeln('<sc' + 'ript language="JavaScript" type="text/javascript" src="http://www.dallasnews.com/resources/js/omniture_pagecall.js"></sc' + 'ript>');
document.writeln('<sc' + 'ript language="JavaScript" type="text/javascript" src="http://res.dallasnews.com/resrsc/js/biomniture_s1.js"></sc' + 'ript>');
