'use strict';

var config = {
    "development": {
        "id"       : 'alkindi-server-app',
        "port"     :  6000,
        "entities" : ["event", "idol", "person", "place", "transcript", "tribe"],
        "languages": ['ar', 'en'],
        "apiRoot" : "/api",
        "no_auth_routes" : [
            'post:/session/.*',
            'get:/work/.*',
            'get:/authority/.*'
        ],
        "max_session": 30
    },
    "production": {
        "id"       : 'alkindi-server-app',
        "entities" : ["work", "authority"]
        "languages": ['ar', 'en'],
        "port"     : 6001,
        "apiRoot"  : "/seera",
        "no_auth_routes" : [
            'post:/session/.*',
            'get:/work/.*',
            'get:/authority/.*'
        ],
        "max_session": 30
    },
    "test" : {}
};
config.test = config.development;
module.exports = config;