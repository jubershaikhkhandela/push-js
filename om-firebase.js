var d = new Date;

function userAgentDetect() {
    window.navigator.userAgent.match(/Mobile/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/IEMobile/i) || window.navigator.userAgent.match(/Windows Phone/i) || window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/webOS/i) ? window.navigator.userAgent.match(/Tablet/i) || window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/Nexus 7/i) || window.navigator.userAgent.match(/Nexus 10/i) || window.navigator.userAgent.match(/KFAPWI/i) ? window.deviceTypeVar = "tablet" : window.deviceTypeVar = "smartphone" : window.navigator.userAgent.match(/Intel Mac/i) ? window.deviceTypeVar = "desktop" : window.navigator.userAgent.match(/Nexus 7/i) || window.navigator.userAgent.match(/Nexus 10/i) || window.navigator.userAgent.match(/KFAPWI/i) ? window.deviceTypeVar = "tablet" : window.deviceTypeVar = "desktop"
}
console.log(d), userAgentDetect();
var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [{
            name: "Windows Phone",
            value: "Windows Phone",
            version: "OS"
        }, {
            name: "Windows",
            value: "Win",
            version: "NT"
        }, {
            name: "iPhone",
            value: "iPhone",
            version: "OS"
        }, {
            name: "iPad",
            value: "iPad",
            version: "OS"
        }, {
            name: "Kindle",
            value: "Silk",
            version: "Silk"
        }, {
            name: "Android",
            value: "Android",
            version: "Android"
        }, {
            name: "PlayBook",
            value: "PlayBook",
            version: "OS"
        }, {
            name: "BlackBerry",
            value: "BlackBerry",
            version: "/"
        }, {
            name: "Macintosh",
            value: "Mac",
            version: "OS X"
        }, {
            name: "Linux",
            value: "Linux",
            version: "rv"
        }, {
            name: "Palm",
            value: "Palm",
            version: "PalmOS"
        }],
        databrowser: [{
            name: "Chrome",
            value: "Chrome",
            version: "Chrome"
        }, {
            name: "Firefox",
            value: "Firefox",
            version: "Firefox"
        }, {
            name: "Safari",
            value: "Safari",
            version: "Version"
        }, {
            name: "Internet Explorer",
            value: "MSIE",
            version: "MSIE"
        }, {
            name: "Opera",
            value: "Opera",
            version: "Opera"
        }, {
            name: "BlackBerry",
            value: "CLDC",
            version: "CLDC"
        }, {
            name: "Mozilla",
            value: "Mozilla",
            version: "Mozilla"
        }],
        init: function() {
            var e = this.header.join(" ");
            return {
                os: this.matchItem(e, this.dataos),
                browser: this.matchItem(e, this.databrowser)
            }
        },
        matchItem: function(e, n) {
            var o, a, i, t = 0,
                r = 0;
            for (t = 0; t < n.length; t += 1)
                if (new RegExp(n[t].value, "i").test(e)) {
                    if (o = new RegExp(n[t].version + "[- /:;]([\\d._]+)", "i"), i = "", (a = e.match(o)) && a[1] && (a = a[1]), a)
                        for (a = a.split(/[._]+/), r = 0; r < a.length; r += 1) i += 0 === r ? a[r] + "." : a[r];
                    else i = "0";
                    return {
                        name: n[t].name,
                        version: parseFloat(i)
                    }
                }
            return {
                name: "unknown",
                version: 0
            }
        }
    },
    e = module.init(),
    debug = "";
debug += "os.name = " + e.os.name + "<br/>", debug += "os.version = " + e.os.version + "<br/>", debug += "browser.name = " + e.browser.name + "<br/>", debug += "browser.version = " + e.browser.version + "<br/>";
var clientData = {
    os: {
        name: e.os.name,
        version: e.os.version
    },
    browser: {
        name: e.browser.name,
        version: e.browser.version
    },
    device: window.deviceTypeVar
};
MsgElem = document.getElementById("msg"), TokenElem = document.getElementById("token"), NotisElem = document.getElementById("notis"), ErrElem = document.getElementById("err");
var locationData = "";
 $.getJSON("https://api.ipify.org/?format=json", function(e) {
    locationData = {
        ip_address: e.ip
    }, console.log(locationData.ip_address)
});
 firebase.initializeApp(config);
 const messaging = firebase.messaging();
 function allow1(){
     
     
$('.pushninza_optin_notifications').remove();
$('#stl1').remove();
$('#stl2').remove();

 }
function allow(){

allow1();
 localStorage.setItem("allow", true);

messaging.requestPermission().then(function() {
    return console.log("Notification permission granted."), messaging.getToken()
}).then(function(e) {
    if (!localStorage.getItem("oldtoken") || localStorage.getItem("oldtoken") != e) {
        console.log(new Date);
        var n = {
            token: e,
            locationData: JSON.stringify(locationData),
            clientData: JSON.stringify(clientData),
            url: window.location.href
        };
        console.log(JSON.stringify(n));
		firebase.initializeApp(config, "ASAS").database().ref("tokens/" + e).set(n);
	    localStorage.setItem("oldtoken", e);
	   
    }
    return localStorage.setItem("oldtoken", e), e
}).catch(function(e) {
    console.log("Unable to get permission to notify.", e), localStorage.removeItem("oldtoken");
     
    if(e.message.includes("unsubscribing "))
    {
       
       
        location.reload() ;
        
    }
});

}

$( document ).ready(function() {
    
  

        console.log( "document loaded"+Notification.permission );
        
        if(Notification.permission == "default")
        
        {
            localStorage.removeItem("allow");
            
        }
		var txt0= '<style id="stl1">@import "https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700";.d-none{display:none}.d-block{display:block}.d-flex{display:-ms-flexbox!important;display:-webkit-box!important;display:flex!important}.pushninza_optin_notifications{font-family:"Nunito Sans", sans-serif!important;border:none!important;font-size:14px;color:#000;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.pushninza_optin_notifications .text-center{text-align:center!important}.pushninza_optin_notifications .text-right{text-align:right!important}.pushninza_optin_notifications .text-left{text-align:left!important}.pushninza_optin_notifications .justify-content-center{-ms-flex-pack:center!important;-webkit-box-pack:center!important;justify-content:center!important}.pushninza_optin_notifications .justify-content-start{-ms-flex-pack:start!important;-webkit-box-pack:start!important;justify-content:flex-start!important}.pushninza_optin_notifications .justify-content-end{-ms-flex-pack:end!important;-webkit-box-pack:end!important;justify-content:flex-end!important}.pushninza_optin_notifications .color-primary{color:#4a90e2}.pushninza_optin_notifications .color-link{color:#4a90e2}.pushninza_optin_notifications .p-rel{position:relative}.pushninza_optin_notifications .p-abs{position:absolute}.pushninza_optin_notifications .m-1{margin:6px!important}.pushninza_optin_notifications .m-2{margin:12px!important}.pushninza_optin_notifications .m-3{margin:18px!important}.pushninza_optin_notifications .m-4{margin:24px!important}.pushninza_optin_notifications .m-5{margin:30px!important}.pushninza_optin_notifications .mx-1{margin-left:6px!important;margin-right:6px!important}.pushninza_optin_notifications .mx-2{margin-left:12px!important;margin-right:12px!important}.pushninza_optin_notifications .mx-3{margin-left:18px!important;margin-right:18px!important}.pushninza_optin_notifications .mx-4{margin-left:24px!important;margin-right:24px!important}.pushninza_optin_notifications .mx-5{margin-left:30px!important;margin-right:30px!important}.pushninza_optin_notifications .my-1{margin-top:6px!important;margin-bottom:6px!important}.pushninza_optin_notifications .my-2{margin-top:12px!important;margin-bottom:12px!important}.pushninza_optin_notifications .my-3{margin-top:18px!important;margin-bottom:18px!important}.pushninza_optin_notifications .my-4{margin-top:24px!important;margin-bottom:24px!important}.pushninza_optin_notifications .my-5{margin-top:30px!important;margin-bottom:30px!important}.pushninza_optin_notifications .mt-1{margin-top:6px!important}.pushninza_optin_notifications .mt-2{margin-top:12px!important}.pushninza_optin_notifications .mt3{margin-top:18px!important}.pushninza_optin_notifications .mt-4{margin-top:24px!important}.pushninza_optin_notifications .mt-5{margin-top:30px!important}.pushninza_optin_notifications .mb-1{margin-bottom:6px!important}.pushninza_optin_notifications .mb-2{margin-bottom:12px!important}.pushninza_optin_notifications .mb-3{margin-bottom:18px!important}.pushninza_optin_notifications .mb-4{margin-bottom:24px!important}.pushninza_optin_notifications .mb-5{margin-bottom:30px!important}.pushninza_optin_notifications .ml-1{margin-left:6px!important}.pushninza_optin_notifications .ml-2{margin-left:12px!important}.pushninza_optin_notifications .ml-3{margin-left:18px!important}.pushninza_optin_notifications .ml-4{margin-left:24px!important}.pushninza_optin_notifications .ml-5{margin-left:30px!important}.pushninza_optin_notifications .mr-1{margin-right:6px!important}.pushninza_optin_notifications .mr-2{margin-right:12px!important}.pushninza_optin_notifications .mr-3{margin-right:18px!important}.pushninza_optin_notifications .mr-4{margin-right:24px!important}.pushninza_optin_notifications .mr-5{margin-right:30px!important}.pushninza_optin_notifications .p-1{padding:6px!important}.pushninza_optin_notifications .p-2{padding:12px!important}.pushninza_optin_notifications .p-3{padding:18px!important}.pushninza_optin_notifications .p-4{padding:24px!important}.pushninza_optin_notifications .p-5{padding:30px!important}.pushninza_optin_notifications .px-1{padding-left:6px!important;padding-right:6px!important}.pushninza_optin_notifications .px-2{padding-left:12px!important;padding-right:12px!important}.pushninza_optin_notifications .px-3{padding-left:18px!important;padding-right:18px!important}.pushninza_optin_notifications .px-4{padding-left:24px!important;padding-right:24px!important}.pushninza_optin_notifications .px-5{padding-left:30px!important;padding-right:30px!important}.pushninza_optin_notifications .py-1{padding-top:6px!important;padding-bottom:6px!important}.pushninza_optin_notifications .py-2{padding-top:12px!important;padding-bottom:12px!important}.pushninza_optin_notifications .py-3{padding-top:18px!important;padding-bottom:18px!important}.pushninza_optin_notifications .py-4{padding-top:24px!important;padding-bottom:24px!important}.pushninza_optin_notifications .py-5{padding-top:30px!important;padding-bottom:30px!important}.pushninza_optin_notifications .pt-1{padding-top:6px!important}.pushninza_optin_notifications .pt-2{padding-top:12px!important}.pushninza_optin_notifications .pt-3{padding-top:18px!important}.pushninza_optin_notifications .pt-4{padding-top:24px!important}.pushninza_optin_notifications .pt-5{padding-top:30px!important}.pushninza_optin_notifications .pb-1{padding-bottom:6px!important}.pushninza_optin_notifications .pb-2{padding-bottom:12px!important}.pushninza_optin_notifications .pb-3{padding-bottom:18px!important}.pushninza_optin_notifications .pb-4{padding-bottom:24px!important}.pushninza_optin_notifications .pb-5{padding-bottom:30px!important}.pushninza_optin_notifications .pl-1{padding-left:6px!important}.pushninza_optin_notifications .pl-2{padding-left:12px!important}.pushninza_optin_notifications .pl-3{padding-left:18px!important}.pushninza_optin_notifications .pl-4{padding-left:24px!important}.pushninza_optin_notifications .pl-5{padding-left:30px!important}.pushninza_optin_notifications .pr-1{padding-right:6px!important}.pushninza_optin_notifications .pr-2{padding-right:12px!important}.pushninza_optin_notifications .pr-3{padding-right:18px!important}.pushninza_optin_notifications .pr-4{padding-right:24px!important}.pushninza_optin_notifications .pr-5{padding-right:30px!important}.pushninza_optin_notifications .xy-m{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.pushninza_optin_notifications .y-m{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.pushninza_optin_notifications .x-m{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.pushninza_optin_notifications .pushninza_overlay{width:100%;height:100%;position:fixed;background:#000;background-color:rgba(0, 0, 0, 0.3);z-index:999999;left:0;right:0;margin:auto;top:0;overflow:hidden}.pushninza_optin_notifications .defaultplus_pushninza{width:800px;height:220px;position:fixed;top:0;left:0;z-index:9999999999999999}.pushninza_optin_notifications .defaultplus_pushninza:after{content:"";width:100%;height:100%;position:absolute;left:50%;top:50%;-webkit-filter:blur(80px);filter:blur(80px);background-color:rgba(0, 0, 0, 0.4);-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp{position:relative;z-index:99999999}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp .defaultplus_content_tp{position:absolute;top:20px;right:120px}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp .defaultplus_content_tp a{color:#fff!important;cursor:pointer!important;font-size:14px;font-weight:800;text-decoration:none!important;background:none;margin:0;padding:0;text-shadow:2px 2px 8px #7c7c7c;font-family:"Nunito Sans", sans-serif!important}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp .defaultplus_content_tp a:hover{text-decoration:underline!important}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp .defaultplus_content_tp a img{vertical-align:middle;margin:0 2px;width:18px}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp .defaultplus_content_tp span{color:#fff!important;text-decoration:underline!important}.pushninza_optin_notifications .moz_defaultplus_pushninza{width:960px}.pushninza_optin_notifications .moz_defaultplus_pushninza .defaultplus_content_tp{right:60px}.pushninza_optin_notifications .opera_defaultplus_pushninza .defaultplus_content_tp{right:160px}.pushninza_optin_notifications .edge_defaultplus_pushninza{width:100%!important;height:120px!important;bottom:0!important;left:0!important;top:auto}.pushninza_optin_notifications .edge_defaultplus_pushninza .defaultplus_content_tp{top:22px!important;left:22%!important}.pushninza_optin_notifications .belloptin_pushninza{position:fixed;right:25px;bottom:30px;z-index:999999999999!important;padding:2px;cursor:pointer}.pushninza_optin_notifications .belloptin_pushninza .bellcircle_optinicon{display:flex!important;display:-webkit-box!important;display:-ms-flexbox!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;text-align:center!important;-webkit-box-align:center!important;-webkit-box-pack:center!important;width:50px;height:50px;border-radius:50%;background:red;margin:0;padding:0}.pushninza_optin_notifications .belloptin_pushninza .bellcircle_optinicon svg{width:36px;height:36px;fill:#fff;vertical-align:sub;text-align:center;margin:0;padding:0}.pushninza_optin_notifications .belloptin_pushninza .tip-content{position:absolute;top:6px;right:9999px;width:200px;margin-right:83px;padding:10px;color:#fff;background:#333;-webkit-box-sizing:unset!important;box-sizing:unset!important;-webkit-box-shadow:2px 2px 5px #aaa;-moz-box-shadow:2px 2px 5px #aaa;box-shadow:2px 2px 5px #aaa;opacity:0;-webkit-transition:opacity 250ms ease-out;-moz-transition:opacity 250ms ease-out;-ms-transition:opacity 250ms ease-out;-o-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out}.pushninza_optin_notifications .belloptin_pushninza .tip-content:before{content:"";position:absolute;top:50%;width:0;height:0;margin-left:184px;margin-top:-11px;border:10px solid transparent;border-left-color:#333}.pushninza_optin_notifications .belloptin_pushninza .bellcircle_optinicon:hover .tip-content{right:-20px;opacity:1}.pushninza_optin_notifications .horizontalbar_pushninza{position:fixed;bottom:0;width:100%;left:0;right:0;margin:0 auto;z-index:9999999}.pushninza_optin_notifications .horizontalbar_pushninza .bar_pushninza{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px;background:#000;color:#fff}.pushninza_optin_notifications .horizontalbar_pushninza .bar_pushninza .optinbar_content span{font-size:16px}.pushninza_optin_notifications .horizontalbar_pushninza .bar_pushninza .optinbar_content button{display:inline!important;background-color:#4A90E2;color:#fff;border-width:0!important;padding:8px 12px!important;font-size:14px!important;font-weight:500;border:0;border-radius:2px;margin:0 auto!important;text-transform:none!important;font-family:"Nunito Sans", sans-serif!important}.pushninza_optin_notifications .horizontalbar_pushninza .bar_pushninza .optinbar_content b{font-size:16px;cursor:pointer}.pushninza_optin_notifications .optinbox_pushninza{font-family:"Nunito Sans", sans-serif!important;position:fixed;top:0;margin:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:999999999999!important;text-align:center;width:100%;max-width:360px;height:-webkit-max-content;height:-moz-max-content;height:max-content;background:#ffffff;border:1px solid #f0f0f0;margin:0 auto}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection{padding:12px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection h5{font-size:16px!important;font-weight:600;color:#282828!important;margin:0;line-height:1.4;text-transform:unset!important}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection p{font-size:13px;color:#7c7c7c;margin:12px 0;font-weight:500;padding:0;line-height:1.4}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection .optinbox_tpbuttons{text-align:center!important}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection .optinbox_tpbuttons button{padding:8px 26px;font-size:14px!important;font-weight:500;margin:6px;border-radius:2px;text-transform:unset!important;line-height:normal!important;letter-spacing:unset!important;font-family:"Nunito Sans", sans-serif!important}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection .optinbox_tpbuttons .tp_btn_default{background:#f2f4ff;border:1px solid #ebeefc;-webkit-box-shadow:0 0 8px 0 white;box-shadow:0 0 8px 0 white;color:#3b69ff;margin-left:0}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection .optinbox_tpbuttons .tp_btn_primary{background:#3b69ff;color:#fff;border:1px solid #3b69ff;-webkit-box-shadow:0 0 6px 0 #c0cfff;box-shadow:0 0 6px 0 #c0cfff}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection .optinbox_tpbuttons a{text-decoration:underline!important;cursor:pointer!important;font-size:12px;font-weight:500;padding:0;margin:0;color:#7c7c7c!important;font-family:"Nunito Sans", sans-serif!important}.pushninza_optin_notifications .optinbox_plus_pushninza{width:100%;max-width:350px;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:0 auto;background:#ffffff;border:1px solid #f0f0f0}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection{padding:10px}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_plus_media{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start;text-align:left}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_plus_media .optinbox_plus_image{flex:0 0 60px;-webkit-box-flex:0;-ms-flex:0 0 60px;height:60px;margin-right:16px;overflow:hidden}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_plus_media .optinbox_plus_image img{max-width:100%;width:100%;border-radius:2px}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_plus_media .optinbox_plus_media_body{-ms-flex:1;-webkit-box-flex:1;flex:1}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_plus_media .optinbox_plus_media_body p{margin:0;font-size:15px;color:#484848;line-height:1.4;font-weight:600;font-family:"Nunito Sans", sans-serif!important;word-break:break-word}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_plus_media .optinbox_plus_media_body .subtext{font-size:13px!important;color:#686868!important;font-weight:400!important;padding-top:3px;font-family:"Nunito Sans", sans-serif!important;word-break:break-word}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_tpbuttons button{padding:8px 26px;font-size:14px;font-weight:500;margin:5px;border-radius:2px;font-family:"Nunito Sans", sans-serif!important}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_tpbuttons .tp_btn_default{background:#f2f4ff;border:1px solid #ebeefc;-webkit-box-shadow:0 0 8px 0 white;box-shadow:0 0 8px 0 white;color:#3b69ff;margin-left:0}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_tpbuttons .tp_btn_primary{background:#3b69ff;color:#fff;border:1px solid #3b69ff;-webkit-box-shadow:0 0 6px 0 #c0cfff;box-shadow:0 0 6px 0 #c0cfff}.pushninza_optin_notifications .optinbox_plus_pushninza .optinbox_plus_tpsection .optinbox_tpbuttons a{text-decoration:underline!important;cursor:pointer!important;font-size:12px;font-weight:500;padding:0;margin:0;color:#7c7c7c;font-family:"Nunito Sans", sans-serif!important}iframe{border:0;background:none;-webkit-box-shadow:none;box-shadow:none}.iframe_optinbell_tp{width:62px;height:62px;position:fixed;bottom:20px;right:30px;z-index:999999999}.iframe_optin_notifications .belloptin_pushninza{right:50%!important;bottom:50%!important;-webkit-transform:translateX(50%) translateY(-50%);-ms-transform:translateX(50%) translateY(-50%);transform:translateX(50%) translateY(50%)}.iframe_optinbar_tp{position:fixed;width:100%;bottom:0;left:0;right:0;margin:0 auto;height:50px;z-index:9999999}.iframe_optinbox_tp{position:fixed;max-width:400px;width:100%;padding:0 5px;height:180px;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:9999999}.optinbox_pushninza_iframe{width:100%}.iframe_optinboxplus_tp{max-width:400px;width:100%;top:0;height:160px;position:fixed;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:9999999}.optinboxplus_pushninza_iframe{width:100%}.iframe_optin_notifications .optinbox_pushninza_iframe{top:0!important;bottom:auto!important}.iframe_optin_notifications .optinboxplus_pushninza_iframe{top:0!important;bottom:auto!important}@media screen and (max-width:574.98px){.pushninza_optin_notifications .defaultplus_pushninza{width:100%;height:auto;bottom:0;top:auto;left:0}.pushninza_optin_notifications .defaultplus_pushninza .defaultplus_box_tp .defaultplus_content_tp{top:auto;left:40%;bottom:20px;-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);right:auto}.pushninza_optin_notifications .horizontalbar_pushninza .bar_pushninza .optinbar_content span{display:block;padding:0 0 12px 0!important}.pushninza_optin_notifications .optinbox_pushninza{top:auto;bottom:0}.iframe_optinbox_tp{top:auto;bottom:0;max-width:360px}.iframe_optinboxplus_tp{top:auto;bottom:0;max-width:360px}}@media screen and (max-width:398.98px){.pushninza_optin_notifications .optinbox_pushninza{max-width:98%}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection{padding:12px 8px}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection h5{font-size:14px;font-weight:600}.pushninza_optin_notifications .optinbox_pushninza .optinbox_tpsection p{font-size:12px}.iframe_optin_notifications .optinbox_pushninza_iframe{top:auto!important;bottom:0!important}.iframe_optin_notifications .optinboxplus_pushninza_iframe{top:auto!important;bottom:0!important}}</style>';
	
		var txt1 = '<div class="pushninza_optin_notifications"> <div class="optinbox_pushninza optinbox_plus_pushninza optinboxplus_pushninza_iframe"> <div class="optinbox_plus_tpsection"> <div class="optinbox_plus_media d-flex"> <div class="optinbox_plus_image"> <img src="https://cdn0.iconfinder.com/data/icons/essentials-solid/100/Notification-512.png" alt=""> </div><div class="optinbox_plus_media_body"> <p style="display:block !important">Allow notifications for latest games &amp; quiz </p><p style="display:none !important">Allow updates from merici</p><p class="subtext"></p></div></div><div class="optinbox_tpbuttons mt-2 mb-1"> <button type="button" onclick="allow1()" class="tp_btn_default">Not now</button><button type="button" class="tp_btn_primary" onclick="allow()">Allow</button> </div></div></div></div>';        // Create text with HTML
               var txt2 = '<style id="stl2">@media screen and (max-width: 574.98px){.pushninza_optin_notifications .optinbox_pushninza{top: 0; bottom: auto;}} .tp_btn_default,.tp_btn_primary{cursor:pointer;}</style>';
  
   if (!localStorage.getItem("allow") ){
  $("body").prepend(txt0 ,txt2);
   }	
				
		setTimeout(function(){
			
			
				        console.log( "show popup"+e.browser.name );
				        
				        if(e.browser.name !="chrome")
						  { if (!localStorage.getItem("allow") )
						
						  {
							  $("body").prepend(txt1);
							  
							  
							  
						  } 
						  } else{
						      
						      allow();
						  }


		}, 300);


	


    });
