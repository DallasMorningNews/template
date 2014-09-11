/*! Picturefill - v2.1.0 - 2014-07-25
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b){"use strict";function c(a){var b,c,d,f,g,h=a||{};b=h.elements||e.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,f=void 0,g=void 0,c[e.ns]||(c[e.ns]={}),h.reevaluate||!c[e.ns].evaluated){if("PICTURE"===d.nodeName.toUpperCase()){if(e.removeVideoShim(d),f=e.getMatch(c,d),f===!1)continue}else f=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!e.srcsetSupported||!e.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&e.dodgeSrcset(c),f?(g=e.processSourceSet(f),e.applyBestCandidate(g,c)):(g=e.processSourceSet(c),(void 0===c.srcset||c[e.ns].srcset)&&e.applyBestCandidate(g,c)),c[e.ns].evaluated=!0}}function d(){c();var d=setInterval(function(){return c(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(d):void 0},250);if(a.addEventListener){var e;a.addEventListener("resize",function(){a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(e),e=a.setTimeout(function(){c({reevaluate:!0}),a._picturefillWorking=!1},60))},!1)}}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var e={};e.ns="picturefill",e.srcsetSupported="srcset"in b.createElement("img"),e.sizesSupported=a.HTMLImageElement.sizes,e.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},e.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},e.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},e.getDpr=function(){return a.devicePixelRatio||1},e.getWidthFromLength=function(a){return a=a&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),e.lengthEl||(e.lengthEl=b.createElement("div"),b.documentElement.insertBefore(e.lengthEl,b.documentElement.firstChild)),e.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",e.lengthEl.offsetWidth<=0&&(e.lengthEl.style.cssText="width: 100%;"),e.lengthEl.offsetWidth},e.types={},e.types["image/jpeg"]=!0,e.types["image/gif"]=!0,e.types["image/png"]=!0,e.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),e.types["image/webp"]=function(){var b=new a.Image,d="image/webp";b.onerror=function(){e.types[d]=!1,c()},b.onload=function(){e.types[d]=1===b.width,c()},b.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},e.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof e.types[b]?(e.types[b](),"pending"):e.types[b]},e.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},e.findWidthFromSourceSize=function(a){for(var b,c=e.trim(a).split(/\s*,\s*/),d=0,f=c.length;f>d;d++){var g=c[d],h=e.parseSize(g),i=h.length,j=h.media;if(i&&(!j||e.matchesMedia(j))){b=i;break}}return e.getWidthFromLength(b)},e.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},e.parseDescriptor=function(a,b){var c,d=b||"100vw",f=a&&a.replace(/(^\s+|\s+$)/g,""),g=e.findWidthFromSourceSize(d);if(f)for(var h=f.split(" "),i=h.length+1;i>=0;i--)if(void 0!==h[i]){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||e.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},e.getCandidatesFromSourceSet=function(a,b){for(var c=e.parseSrcset(a),d=[],f=0,g=c.length;g>f;f++){var h=c[f];d.push({url:h.url,resolution:e.parseDescriptor(h.descriptor,b)})}return d},e.dodgeSrcset=function(a){a.srcset&&(a[e.ns].srcset=a.srcset,a.removeAttribute("srcset"))},e.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[e.ns]&&a[e.ns].srcset&&(b=a[e.ns].srcset),b&&(d=e.getCandidatesFromSourceSet(b,c)),d},e.applyBestCandidate=function(a,b){var c,d,f;a.sort(e.ascendingSort),d=a.length,f=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=e.getDpr()){f=c;break}f&&!e.endsWith(b.src,f.url)&&(b.src=f.url,b.currentSrc=b.src)},e.ascendingSort=function(a,b){return a.resolution-b.resolution},e.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},e.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,f=c.length;f>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[e.ns]&&null!==g[e.ns].srcset)&&a.push(g)}return a},e.getMatch=function(a,b){for(var c,d=b.childNodes,f=0,g=d.length;g>f;f++){var h=d[f];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||e.matchesMedia(i))){var j=e.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},d(),c._=e,"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.picturefill=c)}(this,this.document);var _sf_startpt=(new Date()).getTime();
var OAS_sitepage= storyURL.replace("http://res.dallasnews.com","www.dallasnews.com");


console.log(1);

function shareInit(storyURL, storyTitle, leadText, storyIMG, shareID){
    console.log(2)
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
    console.log(3);
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
console.log(4);
(function(){
    console.log(5);
	//function loadChartbeat() {
    //    console.log(6);
	//	window._sf_endpt=(new Date()).getTime();
	//	var e = document.createElement("script");
	//	e.setAttribute("language", "javascript");
	//	e.setAttribute("type", "text/javascript");
	//	e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
	//	document.body.appendChild(e);
	//}
	var oldonload = window.onload;
	window.onload = (typeof window.onload != "function") ?
        loadChartbeat : function() {
		    console.log(11);

            oldonload();
			loadChartbeat();
		};
})();

//Parsely

document.writeln('<div id="parsely-root" style="display: none; color: #625E5D;font-size: 0.7em;text-align: center; position: relative; top: -15px; lined-height: .8em;"><a style="color: #625E5D;" id="parsely-cfg" data-parsely-site="dallasnews.com" href="http://parsely.com">Powered by the Parse.ly Publisher Platform (P3).</a></div>');

(function(s, p, d) {
console.log(7);
var h=d.location.protocol, i=p+"-"+s,
e=d.getElementById(i), r=d.getElementById(p+"-root"),
u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net"
:"static."+p+".com";
if (e) return;
e = d.createElement(s); e.id = i; e.async = true;
e.src = h+"//"+u+"/p.js"; r.appendChild(e);
})("script", "parsely", document);



console.log(8);
var _vrq = _vrq || [];
_vrq.push(['id', 106]);
_vrq.push(['automate', false]);
_vrq.push(['track', function(){}]);
(function(d, a) {
    console.log(9);
	var s = d.createElement(a),
	x = d.getElementsByTagName(a)[0];
	s.async = true;
	s.src = 'http://a.visualrevenue.com/vrs.js';
	x.parentNode.insertBefore(s, x);
})(document, 'script');



//Comscore
$.getScript("http://b.scorecardresearch.com/beacon.js", function(){
    console.log(10);
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
      console.log(12);
      if (typeof success === 'function') success();
    }
  };
  head.appendChild(script);
}


		jQuery(document).ready(function ($) {

			// --------------Custom Javascript Goes Here------
			var simpleDisplayAction = $('.simple-reveal-action');



			




			function displayInit(){
				if (simpleDisplayAction.length){
					$.getScript("/interactives/template/common/js/kason.display.js", function(){
						simpleDisplayAction.kason_display();
					});
				}
			}

			displayInit();

			// --------------Custom Javascript Ends Here------
		});


function init(){
	if (storyURL && comments){
		commentInit(storyURL, storyTitle);
	}
	if (storyURL && leadText && share){

		shareInit(storyURL, storyTitle, leadText, storyIMG, 'share-bar1');
		shareInit(storyURL, storyTitle, leadText, storyIMG, 'share-bar2');
	}
	// trackingInit(storyURL);

	
	
}
init();
initJQuery();
