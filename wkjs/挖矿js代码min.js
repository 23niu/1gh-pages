<!--https://ppoi.org/lib/miner.min.js-->

self.ProjectPoi = self.ProjectPoi || {};
self.ProjectPoi.CONFIG = {
    LIB_URL: "https://ppoi.org/lib/",
    WEBSOCKET_SHARDS: [
		["wss://ws01.ppoi.org/proxy","wss://ws02.ppoi.org/proxy"]
    ],
    CAPTCHA_URL: "https://ppoi.org/captcha/",
    MINER_URL: "https://ppoi.org/media/miner.html"
};
(function(window) {
    "use strict";
    var Miner = function(div) {
        this.div = div;
        var params = div.dataset;
        var url = ProjectPoi.CONFIG.MINER_URL + "?key=" + params.key + "&user=" + encodeURIComponent(params.user || "") + "&whitelabel=" + (params.whitelabel === "true" ? "1" : "0") + "&autostart=" + (params.autostart === "true" ? "1" : "0") + "&throttle=" + (params.throttle || "") + "&threads=" + (params.threads || "") + "&background=" + (params.background || "").replace(/#/g, "") + "&text=" + (params.text || "").replace(/#/g, "") + "&action=" + (params.action || "").replace(/#/g, "") + "&graph=" + (params.graph || "").replace(/#/g, "");
        if (params.start !== undefined) {
            url += "&start=" + encodeURIComponent(params.start)
        }
        this.div.innerHTML = "";
        this.iframe = document.createElement("iframe");
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.style.border = "none";
        this.iframe.src = url;
        this.div.appendChild(this.iframe)
    };
    Miner.CreateElements = function() {
        var elements = document.querySelectorAll(".projectpoi-miner");
        for (var i = 0; i < elements.length; i++) {
            new Miner(elements[i])
        }
    };
    if (document.readyState === "complete" || document.readyState === "interactive") {
        Miner.CreateElements()
    } else {
        document.addEventListener("readystatechange", function() {
            if (document.readyState === "interactive") {
                Miner.CreateElements()
            }
        })
    }
    window.ProjectPoi = window.ProjectPoi || {};
    window.ProjectPoi.Miner = Miner
})(window);