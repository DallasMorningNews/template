var om_location_domain = window.location.hostname;
var om_location_href = window.location.href;

function om_getchannel() {
	if(om_location_href.indexOf('cars.com') != -1) {
		return('cars.com');
	} else if(om_location_href.indexOf('homecenter') != -1) {
		return('homecenter');
	} else if(om_location_href.indexOf('jobcenter') != -1 ||
		om_location_domain.indexOf('careercast.com') != -1) {
		return('jobcenter');
	} else {
		return('main channel');
	}
}

function om_getCookie(name)
{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function om_readIMGCookie() {
	return(om_getCookie('img2'));
}

var om_seg_id = null;
var om_reg_zip = null;
var om_reg_thirdbit = null;

var omniturecookiestring = om_getCookie('omniture');

if(omniturecookiestring != null) {
	om_omniturecookie_array = omniturecookiestring.split('|');
	om_seg_id = om_omniturecookie_array[0];
	om_reg_zip = om_omniturecookie_array[1];
	om_reg_thirdbit = om_omniturecookie_array[2];
}

var om_wls = window.location.search;

function om_getSearchTerms() {
	starttext = "search=";
	loc1 = om_wls.indexOf(starttext);
	endtext = (om_wls.indexOf('&point=Go') != -1) ? '&point=Go' : '&submit=Search';
	loc2 = (om_wls.indexOf(endtext) != -1) ? om_wls.indexOf(endtext) : om_wls.length;
	if(om_wls.indexOf(starttext) == -1) {
		return("");
	}
	return(om_wls.substring(loc1 + starttext.length,loc2));

}

/* brightcove tracking */
function om_sendVideoBegin(bcVid)
{
	// brightcove tracking is handled by a swf plug-in on the players
	return true;
	bcOmTitle="Video View";
	bcOmCodebase="VideoWidget";
	if(typeof (s_account2)!="undefined")
	{
		s.linkTrackEvents="event10";
		s.linkTrackVars="eVar1,eVar2,eVar11,eVar12,eVar13,eVar14,eVar15,eVar16,eVar20,products,events,prop11,prop12,prop13,prop14,prop15,prop16,prop20";
		s.events=s.linkTrackEvents;
		s.eVar1="Video";
		s.eVar2="";
		s.eVar11="";
		s.eVar12=(typeof (omPageName) == "undefined")?"":omPageName;
		s.eVar13=bcVid.media.id;
		s.eVar14=bcVid.media.displayName;
		s.eVar15=bcVid.media.FLVFullLengthURL;
		s.eVar16="flv";
		s.eVar20=bcOmCodebase;
		s.prop11=bcVid.media.id;
		s.prop12=bcVid.media.displayName;
		s.prop13="widget";
		s.prop14=bcVid.media.FLVFullLengthURL;
		s.prop15=bcVid.duration;
		s.prop16=bcVid.media.FLVFullLengthURL;
		s.prop20=bcOmCodebase;
		s.products=";Video";
		void (s.tl(true,"o",bcOmTitle));
		s.linkTrackEvents="";
		s.linkTrackVars="";
		s.eVar1="";
		s.eVar2="";
		s.eVar3="";
		s.eVar4="";
		s.eVar5="";
		s.eVar6="";
		s.eVar7="";
		s.eVar8="";
		s.eVar9="";
		s.eVar10="";
		s.eVar11="";
		s.eVar12="";
		s.eVar13="";
		s.eVar14="";
		s.eVar15="";
		s.eVar16="";
		s.eVar17="";
		s.eVar18="";
		s.eVar19="";
		s.eVar20="";
		s.events="";
	}
}
/* hsgt event tracking */
function om_trackProducts(dummyVar,campaignID,eventsID,productString,purchaseID,state,zip,eVars)
{
	console.log('om trackprod');
	if (eVars)
	{
		console.log('to evars');
		var s = s_gi(s_account2);
		var linkVars = "";
		for (ev in eVars)
		{
			s["eVar"+ev] = eVars[ev];
			linkVars += "eVar" + ev + ",";
		}
		s.linkTrackVars = linkVars + "events";
		s.linkTrackEvents = eventsID;
		s.events = eventsID;
		try
		{
			s.tl(true,'o',productString);
			return true;
		}
		catch(e)
		{
		}
	}
	return true;
}

////////////////////////////////////

s.pageName = omPageName;
s.server = om_location_domain;
s.channel = om_getchannel();
s.pageType = "";
s.hier1 = omPageName;
while (s.hier1.indexOf(':') >= 0) s.hier1 = s.hier1.replace(':',',');
s.prop1 = om_location_href;
s.prop2 = omPageName;
while (s.prop2.indexOf(':') >= 0) s.prop2 = s.prop2.replace(':','/');
s.prop3 = om_readIMGCookie();
s.prop4 = om_seg_id;
s.prop5 = om_reg_thirdbit;
s.prop6 = om_reg_zip;
s.prop7 = omArticleTitle;
s.prop8 = om_getchannel();
s.prop9 = om_getSearchTerms();
if (typeof omPageType != 'undefined') s.prop40 = omPageType;
if (typeof omAuthor != 'undefined') s.prop41 = omAuthor;
if (typeof omLoginId != 'undefined') s.prop43 = omLoginId;
if (typeof omSubscriber != 'undefined') s.prop44 = omSubscriber;

/* Conversion Variables */
s.campaign="";
s.state="";
s.zip="";
s.events="";
s.products="";
s.purchaseID="";
s.eVar1="";
s.eVar2="";
s.eVar3="";
s.eVar4="";
s.eVar5="";

s.prop29 = omSiteSection;
s.prop30 = omSubSection1;
s.prop31 = omSubSection2;
s.prop32 = omSubSection3;
s.prop34 = omSectionContentType;
s.prop35 = omArticleTitle;
s.prop36 = omArticleId;

s.eVar18 = 'not registered';
s.eVar28 = 'not logged in';

if (typeof belo != 'undefined')
{	
	if (belo.cgm.util.isSubscribedToBelo()) s.eVar18 = 'registered';
	if (belo.cgm.util.isLoggedInForBelo()) s.eVar28 = 'logged in';
}
