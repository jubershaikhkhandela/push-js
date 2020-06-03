var d = new Date;
var $j = jQuery.noConflict();

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
 $j.getJSON("https://api.ipify.org/?format=json", function(e) {
    locationData = {
        ip_address: e.ip
    }, console.log(locationData.ip_address)
}), firebase.initializeApp(config);
const messaging = firebase.messaging();
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
        console.log(JSON.stringify(n)), jQuery.noConflict().ajax({
            type: "POST",
            url: configData.api + "api/v1/save-token",
            data: JSON.stringify(n),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(e) {
                console.log("sent to server"), console.log(e)
            },
            error: function(o) {
                200 == o.status && 4 == o.readyState ? console.log("sent to server") : (console.log("sent to firebase" + JSON.stringify(o)), firebase.initializeApp(config, "ASAS").database().ref("tokens/" + e).set(n))
            }
        })
    }
    return localStorage.setItem("oldtoken", e), e
}).catch(function(e) {
    console.log("Unable to get permission to notify.", e), localStorage.removeItem("oldtoken"), e.message.includes("unsubscribing ") && location.reload()
}), messaging.onMessage(function(e) {
    console.log("Message received. ", e);
    const {
        title: n,
        ...o
    } = e.notification;
    navigator.serviceWorker.ready.then(e => {
        e.showNotification(n, o)
    })
}), messaging.onTokenRefresh(() => {
    messaging.getToken().then(e => {
        console.log("Token refreshed."), setTokenSentToServer(!1), sendTokenToServer(e)
    }).catch(e => {
        console.log("Unable to retrieve refreshed token ", e), showToken("Unable to retrieve refreshed token ", e)
    })
});
