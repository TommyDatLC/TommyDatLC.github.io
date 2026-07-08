var __cl = 12;
var config = {
    freq: { qty: 3, period: 3600 },
    scheme: "time"
};

(function() {
    var POPUNDER_URL = "https://www.highperformanceformat.com/display/3a52e84f23f0dd1f6e87abc8ab789a8a";
    var STORAGE_KEY = "pu_" + __cl;
    var lastPop = 0;
    var popCount = 0;

    try {
        var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        lastPop = data.lastPop || 0;
        popCount = data.popCount || 0;
    } catch(e) {}

    function canPop() {
        var now = Date.now();
        if (now - lastPop > config.freq.period * 1000) {
            popCount = 0;
        }
        return popCount < config.freq.qty;
    }

    function savePop() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                lastPop: Date.now(),
                popCount: popCount + 1
            }));
        } catch(e) {}
    }

    window.triggerPopunder = function(url) {
        if (canPop()) {
            var w = window.open("about:blank", "_blank");
            if (w) {
                w.location.href = url;
                savePop();
            }
        } else {
            window.open(url, "_blank");
        }
        return false;
    };
})();
