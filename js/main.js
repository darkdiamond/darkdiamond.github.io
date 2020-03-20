window.onload = function () {
    start_graphs();
};

function start() {

};

function start_graphs() {

    var divElem = document.getElementById('hour-trends');
    trends.embed.renderExploreWidgetTo(divElem, "TIMESERIES", {
        "comparisonItem": [{
            "keyword": "/m/01cpyy",
            "geo": "IL",
            "time": "now 1-H"
        }],
        "category": 0,
        "property": ""
    }, {
        "exploreQuery": "date=now%201-H&geo=IL&q=%2Fm%2F01cpyy",
        "guestPath": "https://trends.google.com:443/trends/embed/"
    });


    var divElem = document.getElementById('geo-trends');
    trends.embed.renderExploreWidgetTo(divElem, "GEO_MAP", {
        "comparisonItem": [{
            "keyword": "/m/01cpyy",
            "geo": "IL",
            "time": "now 1-d"
        }],
        "category": 0,
        "property": ""
    }, {
        "exploreQuery": "date=now%201-d&geo=IL&q=%2Fm%2F01cpyy",
        "guestPath": "https://trends.google.com:443/trends/embed/"
    });

};