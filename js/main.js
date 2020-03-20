window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var GEO = urlParams.get("geo")

    if (GEO == null) {
        GEO = "IT";
    };

    $("#country").countrySelect({
        defaultCountry: GEO.toLowerCase(),
        preferredCountries: [],
        responsiveDropdown: true
    });

    start_graphs(GEO);

};

function ChangeCountry() {

    var countryData = $("#country").countrySelect("getSelectedCountryData").iso2.toUpperCase();
    var url = window.location.href;

    if (url.indexOf("?") > 0) {
        url = url.substring(0, url.indexOf("?"));
    }
    url += "?geo=" + countryData;
    window.location.replace(url);

};

function start_graphs(GEO) {
    // var GEO = "IL";
    var trends_time = "now 1-d";
    var trends_key = "/m/01cpyy"; // Coronavirus
    // var trends_key = "/m/0g9pc"; // Virus


    var divElem = document.getElementById('hour-trends');
    divElem.innerHTML = ""
    trends.embed.renderExploreWidgetTo(divElem, "TIMESERIES", {
        "comparisonItem": [{
            "keyword": trends_key,
            "geo": GEO,
            "time": "now 7-d"
        }],
        "category": 0,
        "property": ""
    }, {
        // "exploreQuery": "date=now%201-H&geo=${GEO}&q=%2Fm%2F01cpyy",
        "guestPath": "https://trends.google.com:443/trends/embed/"
    });

    var divElem = document.getElementById('geo-trends');
    divElem.innerHTML = ""
    trends.embed.renderExploreWidgetTo(divElem, "GEO_MAP", {
        "comparisonItem": [{
            "keyword": trends_key,
            "geo": GEO,
            "time": trends_time
        }],
        "category": 0,
        "property": ""
    }, {
        // "exploreQuery": "date=now%201-d&geo=${GEO}&q=%2Fm%2F01cpyy",
        "guestPath": "https://trends.google.com:443/trends/embed/"
    });

    var divElem = document.getElementById('rel-trends');
    divElem.innerHTML = ""
    trends.embed.renderExploreWidgetTo(divElem, "RELATED_QUERIES", {
        "comparisonItem": [{
            "keyword": trends_key,
            "geo": GEO,
            "time": "now 4-H"
        }],
        "category": 0,
        "property": ""
    }, {
        "exploreQuery": "date=now%201-d&geo=${GEO}&q=%2Fm%2F01cpyy",
        "guestPath": "https://trends.google.com:443/trends/embed/"
    });


    // trends.embed.renderExploreWidget("RELATED_QUERIES", {
    //     "comparisonItem": [{
    //         "keyword": "/m/01cpyy",
    //         "geo": "US",
    //         "time": "now 1-d"
    //     }],
    //     "category": 0,
    //     "property": ""
    // }, {
    //     "exploreQuery": "date=now%201-d&geo=US&q=%2Fm%2F01cpyy",
    //     "guestPath": "https://trends.google.com:443/trends/embed/"
    // });

    // trends.embed.renderExploreWidget("RELATED_QUERIES", {
    //     "comparisonItem": [{
    //         "keyword": "/m/01cpyy",
    //         "geo": "US",
    //         "time": "now 1-d"
    //     }],
    //     "category": 0,
    //     "property": ""
    // }, {
    //     "exploreQuery": "date=now%201-d&geo=US&q=%2Fm%2F01cpyy",
    //     "guestPath": "https://trends.google.com:443/trends/embed/"
    // });
};