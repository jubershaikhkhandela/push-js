var d = new Date();

  var ua = navigator.userAgent || navigator.vendor || window.opera;

    function isFacebookApp() {
        return (ua.indexOf("FBAN") > -1) && (ua.indexOf("FBAV") > -1);
    }


function userAgentDetect() {
	window.navigator.userAgent.match(/Mobile/i) ||
		window.navigator.userAgent.match(/iPhone/i) ||
		window.navigator.userAgent.match(/iPod/i) ||
		window.navigator.userAgent.match(/IEMobile/i) ||
		window.navigator.userAgent.match(/Windows Phone/i) ||
		window.navigator.userAgent.match(/Android/i) ||
		window.navigator.userAgent.match(/BlackBerry/i) ||
		window.navigator.userAgent.match(/webOS/i) ?
		window.navigator.userAgent.match(/Tablet/i) ||
		window.navigator.userAgent.match(/iPad/i) ||
		window.navigator.userAgent.match(/Nexus 7/i) ||
		window.navigator.userAgent.match(/Nexus 10/i) ||
		window.navigator.userAgent.match(/KFAPWI/i) ?
		(window.deviceTypeVar = "tablet") :
		(window.deviceTypeVar = "smartphone") :
		window.navigator.userAgent.match(/Intel Mac/i) ?
		(window.deviceTypeVar = "desktop") :
		window.navigator.userAgent.match(/Nexus 7/i) || window.navigator.userAgent.match(/Nexus 10/i) || window.navigator.userAgent.match(/KFAPWI/i) ?
		(window.deviceTypeVar = "tablet") :
		(window.deviceTypeVar = "desktop");
}
console.log(d), userAgentDetect();
var module = {
		options: [],
		header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
		dataos: [{
				name: "Windows Phone",
				value: "Windows Phone",
				version: "OS",
			},
			{
				name: "Windows",
				value: "Win",
				version: "NT",
			},
			{
				name: "iPhone",
				value: "iPhone",
				version: "OS",
			},
			{
				name: "iPad",
				value: "iPad",
				version: "OS",
			},
			{
				name: "Kindle",
				value: "Silk",
				version: "Silk",
			},
			{
				name: "Android",
				value: "Android",
				version: "Android",
			},
			{
				name: "PlayBook",
				value: "PlayBook",
				version: "OS",
			},
			{
				name: "BlackBerry",
				value: "BlackBerry",
				version: "/",
			},
			{
				name: "Macintosh",
				value: "Mac",
				version: "OS X",
			},
			{
				name: "Linux",
				value: "Linux",
				version: "rv",
			},
			{
				name: "Palm",
				value: "Palm",
				version: "PalmOS",
			},
		],
		databrowser: [{
				name: "Chrome",
				value: "Chrome",
				version: "Chrome",
			},
			{
				name: "Firefox",
				value: "Firefox",
				version: "Firefox",
			},
			{
				name: "Safari",
				value: "Safari",
				version: "Version",
			},
			{
				name: "Internet Explorer",
				value: "MSIE",
				version: "MSIE",
			},
			{
				name: "Opera",
				value: "Opera",
				version: "Opera",
			},
			{
				name: "BlackBerry",
				value: "CLDC",
				version: "CLDC",
			},
			{
				name: "Mozilla",
				value: "Mozilla",
				version: "Mozilla",
			},
		],
		init: function () {
			var e = this.header.join(" ");
			return {
				os: this.matchItem(e, this.dataos),
				browser: this.matchItem(e, this.databrowser),
			};
		},
		matchItem: function (e, n) {
			var o,
				a,
				i,
				t = 0,
				r = 0;
			for (t = 0; t < n.length; t += 1)
				if (new RegExp(n[t].value, "i").test(e)) {
					if (((o = new RegExp(n[t].version + "[- /:;]([\\d._]+)", "i")), (i = ""), (a = e.match(o)) && a[1] && (a = a[1]), a))
						for (a = a.split(/[._]+/), r = 0; r < a.length; r += 1) i += 0 === r ? a[r] + "." : a[r];
					else i = "0";
					return {
						name: n[t].name,
						version: parseFloat(i),
					};
				}
			return {
				name: "unknown",
				version: 0,
			};
		},
	},
	e = module.init(),
	debug = "";
(debug += "os.name = " + e.os.name + "<br/>"), (debug += "os.version = " + e.os.version + "<br/>"), (debug += "browser.name = " + e.browser.name + "<br/>"), (debug += "browser.version = " + e.browser.version + "<br/>");

//alert(window.location.href);

if(e.os.name == "iPhone" && isFacebookApp() ){
     var str=window.location.href;
    var res = str.replace("https://", "").replace("http://", "");
   // alert(res);
   
   window.location.href= "googlechrome://"+res;
}
var clientData = {
	os: {
		name: e.os.name,
		version: e.os.version,
	},
	browser: {
		name: e.browser.name,
		version: e.browser.version,
	},
	device: window.deviceTypeVar,
};
(MsgElem = document.getElementById("msg")), (TokenElem = document.getElementById("token")), (NotisElem = document.getElementById("notis")), (ErrElem = document.getElementById("err"));
var locationData = "";
$.getJSON("https://api.ipify.org/?format=json", function (e) {
		(locationData = {
			ip_address: e.ip,
		}),
		console.log(locationData.ip_address);
	}),
	firebase.initializeApp(config);
	
	//alert(firebase.messaging.isSupported());
const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null


function allow() {

	allow1();
	setCookie("allow", true);
	$('#tdsnotify').show();
	messaging
		.requestPermission()
		.then(function () {
		    
		    	$('#tdsnotify').hide();
			return console.log("Notification permission granted."), messaging.getToken();
			
			
		})
		.then(function (e) {
			if (!getCookie("oldtoken") || getCookie("oldtoken") != e) {
				console.log(new Date());
				var n = {
					token: e,
					locationData: JSON.stringify(locationData),
					clientData: JSON.stringify(clientData),
					url: window.location.href,
				};
				console.log(JSON.stringify(n)),
					jQuery.noConflict().ajax({
						type: "POST",
						url: configData.api + "api/v1/save-token",
						data: JSON.stringify(n),
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						success: function (e) {
							console.log("sent to server"), console.log(e);
						},
						error: function (o) {
							200 == o.status && 4 == o.readyState ?
								console.log("sent to server") :
								(console.log("sent to firebase" + JSON.stringify(o)),
									firebase
									.initializeApp(config, "ASAS")
									.database()
									.ref("tokens/" + e)
									.set(n));
						},
					});
			}
			return setCookie("oldtoken", e), e;
		})
		.catch(function (e) {
		    	$('#tdsnotify').hide();
			console.log("Unable to get permission to notify.", e), eraseCookie("oldtoken"), e.message.includes("unsubscribing ") && location.reload();
		})

}

$(document).ready(function () {


	console.log("document loaded" + Notification.permission);

	if (Notification.permission == "default")

	{
		eraseCookie("allow");

	}


var isArrow=true;
var showPopup=true;
var image="https://image.similarpng.com/very-thumbnail/2020/08/Youtube-notification-bells-vector-PNG.png";
var text="We ' d like to give you latest news and update about our website";

var cancelText="NO";
var allowText="YES";


var isNoButtonHidden=false;



//configData.api="http://localhost/";
$.getJSON( configData.api + "api/v1/popup-settings", function( data ) {
    
    showPopup=data.showPopup;
    image=data.image;
    text=data.text;
    isNoButtonHidden=data.isNoButtonHidden;
        cancelText=data.cancelText;

    allowText=data.allowText;

	isArrow=data.isArrow;
	var noButtonSytle="";
	
	if(isNoButtonHidden){
		
		
noButtonSytle= `style="visibility:hidden"`;
		
	}

//window.deviceTypeVar  desktop

var upDown = "slide-down";


if(deviceTypeVar !="desktop"){
	
	upDown = "slide-up";
}


    //var txt1 = '<div class="pushninza_optin_notifications"> <div class="optinbox_pushninza optinbox_plus_pushninza optinboxplus_pushninza_iframe"> <div class="optinbox_plus_tpsection"> <div class="optinbox_plus_media d-flex"> <div class="optinbox_plus_image"> <img src="'+image+'" alt=""> </div><div class="optinbox_plus_media_body"> <p style="display:block !important">'+text +'</p><p style="display:none !important">Allow updates from merici</p><p class="subtext"></p></div></div><div class="optinbox_tpbuttons mt-2 mb-1"> <button type="button" onclick="allow1()" class="tp_btn_default" '+noButtonSytle+'>NO</button><button type="button" class="tp_btn_primary" onclick="allow()">YES</button> </div></div></div></div>'; // Create text with HTML
	var txt1 =`<div id="onesignal-slidedown-container" class="onesignal-slidedown-container onesignal-reset ${upDown}"><div id="onesignal-slidedown-dialog" class="onesignal-slidedown-dialog"><div id="normal-slidedown"><div class="slidedown-body" id="slidedown-body"><div class="slidedown-body-icon"><img alt="notification icon" src="${image}"></div><div class="slidedown-body-message">${text}</div><div class="clearfix"></div><div id="onesignal-loading-container">
	</div></div><div class="slidedown-footer" id="slidedown-footer"><button class="align-right primary slidedown-button" id="onesignal-slidedown-allow-button" onclick="allow()">${allowText}</button><button onclick="allow1()" class="align-right secondary slidedown-button" id="onesignal-slidedown-cancel-button" ${noButtonSytle}>${cancelText}</button><div class="clearfix"></div></div></div></div></div>`;
	
	//var txt2 = '<style id="stl2">@media screen and (max-width: 574.98px){.pushninza_optin_notifications .optinbox_pushninza{bottom: 0; bottom: auto;}} .tp_btn_default,.tp_btn_primary{cursor:pointer;}</style>';



if(isArrow){
 var txt3= `<div id="tdsnotify" class="noshow">
            <div class="bgstyle"></div>
            <img id="userinfoimg" src="https://i.ibb.co/NTXwtr6/alert-hint.png" height="60" width="211" alt="Please Click on allow" style="left: 220px;">
        </div>`;
        

	var stylesheet1 = $("<link>", {
    rel: "stylesheet",
    type: "text/css",
    id:"stl1",
    href: "https://cdn.jsdelivr.net/gh/aashiqui/push-js/push-arrow.css"
});
stylesheet1.appendTo("head");

        $("body").prepend(txt3);
         if(e.browser.name == 'Firefox'){document.getElementById('userinfoimg').style.top = '150px'};
            if(e.browser.name == 'Chrome' && (e.os.name == 'Linux' || e.os.name == 'Windows') && window.deviceTypeVar == 'desktop'){document.getElementById('userinfoimg').style.left = '220px'};
            if(window.deviceTypeVar == 'smartphone' && e.browser.name == 'Chrome'){var obj = document.getElementById('userinfoimg');obj.src= 'https://i.ibb.co/tsgF2ZL/mobile.png';obj.style.bottom = 'auto';obj.style.right = '0';obj.style.top = '25%';obj.style.left = '0';obj.style.width = 'auto';obj.style.margin = '0 auto';obj.style.height = '147px';}
        
}  
           
        


	if (!getCookie("allow")) {
		//$("body").prepend(txt0, txt2);
		
		var stylesheet = $("<link>", {
    rel: "stylesheet",
    type: "text/css",
    id:"stl1",
    href: "https://cdn.jsdelivr.net/gh/aashiqui/push-js/push.css"
});
stylesheet.appendTo("head");
	}

	setTimeout(function () {


		console.log("show popup" + e.browser.name);


  if(!showPopup){
		if (e.browser.name != "Chrome") {
			if (!getCookie("allow"))

			{
				$("body").prepend(txt1);


			}
		} else {

			allow();
		}
  }else{
	  
	 if (!getCookie("allow"))

			{
				$("body").prepend(txt1);


			}
  }

	}, 300);
    
});
	


});


function allow1() {


	$('#onesignal-slidedown-container').remove();
	$('#stl1').remove();
	$('#stl2').remove();

}


function setCookie(name, value) {
	var expires = "";

	var date = new Date();
	date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
	expires = "; expires=" + date.toUTCString();

	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
