
var _sf_startpt=(new Date()).getTime();
var OAS_sitepage= storyURL.replace("http://res.dallasnews.com","www.dallasnews.com");


function shareInit(storyURL, storyTitle, leadText, storyIMG, shareID){
	var gigya_catID = 'News',
		gigya_streamID = storyURL,
		gigya_streamTitle = storyTitle,
		gigya_subtitle = '',
		gigya_leadtext = leadText,
		gigya_linkback = storyURL,
		gigya_via = 'dallasnews',
		act = new gigya.socialize.UserAction();
		gigya_shareID = (typeof shareID === undefined) ? "share-bar" : shareID;
	act.setTitle(gigya_streamTitle).setSubtitle(gigya_subtitle).setDescription(gigya_leadtext).setLinkBack(gigya_linkback);
	act.addActionLink("Read on Dallas Morning News", storyURL);
	act.addActionLink("Follow Us", 'http://www.dallasnews.com/social');
	if (storyIMG.length){
		act.addMediaItem({type: 'image', src: storyIMG, href: storyURL});
	}
	gigya.socialize.showShareBarUI({
		containerID : gigya_shareID,
		shareButtons : [{provider: 'Facebook', enableCount: 'false', iconOnly:'true', iconImgUp:'../img/facebook.jpg'},
		{provider: 'Twitter', enableCount: 'false', iconOnly:'true', iconImgUp:'../img/twitter.jpg'},
		{provider: 'Share', enableCount: 'false', iconOnly:'true', iconImgUp:'../img/share.jpg'},
		{provider: 'Email', iconOnly:'true', iconImgUp:'../img/email.jpg'},
		{provider: 'Print', iconOnly:'true', iconImgUp:'../img/print.jpg'}],
		userAction: act,
		operationMode: 'multiSelect',
		grayedOutScreenOpacity: 20,
		onShareButtonClicked: function (eventObj) {
		}
	});

}
function commentInit(storyURL, storyTitle){
	var conf_cmnts = { APIKey: "3_9lzrxJh-GQofXtoOq-ADFDpwOla0DXKJOvVl_KnlZPjeuRyBKYHjyaA2UYgGvXGv" };

	var params_cmnts = {
		categoryID: "News",
		containerID: "comments",
		streamTitle: storyTitle,
		streamID: storyURL,
		deviceType: "auto",
		
		//Activity feed parameters:
		scope:'internal',
		privacy: 'public'
	};

	gigya.comments.showCommentsUI(conf_cmnts,params_cmnts);
}
// Chartbeat Init cannot be in a function
var _sf_async_config={};
_sf_async_config.uid = 38837;
_sf_async_config.domain = "dallasnewsPREMIUM";
_sf_async_config.sections = "interactive";
_sf_async_config.authors = storyAuthor;

(function(){
	function loadChartbeat() {
		window._sf_endpt=(new Date()).getTime();
		var e = document.createElement("script");
		e.setAttribute("language", "javascript");
		e.setAttribute("type", "text/javascript");
		e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
		document.body.appendChild(e);
	}
	var oldonload = window.onload;
	window.onload = (typeof window.onload != "function") ?
		loadChartbeat : function() {
			oldonload();
			loadChartbeat();
		};
})();

//Parsely

document.writeln('<div id="parsely-root" style="display: none; color: #625E5D;font-size: 0.7em;text-align: center; position: relative; top: -15px; lined-height: .8em;"><a style="color: #625E5D;" id="parsely-cfg" data-parsely-site="dallasnews.com" href="http://parsely.com">Powered by the Parse.ly Publisher Platform (P3).</a></div>');

(function(s, p, d) {
var h=d.location.protocol, i=p+"-"+s,
e=d.getElementById(i), r=d.getElementById(p+"-root"),
u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net"
:"static."+p+".com";
if (e) return;
e = d.createElement(s); e.id = i; e.async = true;
e.src = h+"//"+u+"/p.js"; r.appendChild(e);
})("script", "parsely", document);




var _vrq = _vrq || [];
_vrq.push(['id', 106]);
_vrq.push(['automate', false]);
_vrq.push(['track', function(){}]);
(function(d, a) {
	var s = d.createElement(a),
	x = d.getElementsByTagName(a)[0];
	s.async = true;
	s.src = 'http://a.visualrevenue.com/vrs.js';
	x.parentNode.insertBefore(s, x);
})(document, 'script');



//Comscore
getScript("http://b.scorecardresearch.com/beacon.js", function(){
	COMSCORE.beacon({
		c1:2,
		c2:"6036246",
		c3:"",
		c4:"",
		c5:"",
		c6:"",
		c15:"",
		options: {url_append: "comscorekw=premium"}
	});
});

function getScript(url,success) {
  var head = document.getElementsByTagName("head")[0], done = false;
  var script = document.createElement("script");
  script.src = url;
  // Attach handlers for all browsers
  script.onload = script.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
      done = true;
      if (typeof success === 'function') success();
    }
  };
  head.appendChild(script);
}


