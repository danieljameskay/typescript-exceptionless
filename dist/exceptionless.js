"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptionless_1 = require("exceptionless");
var Exceptionless = /** @class */ (function () {
    function Exceptionless() {
    }
    Exceptionless.createClient = function (apiKey, serverUrl) {
        Exceptionless.client = new exceptionless_1.ExceptionlessClient(apiKey, serverUrl);
    };
    Exceptionless.createLog = function (projectName, message, logLevel, tags) {
        if (Exceptionless.client instanceof exceptionless_1.ExceptionlessClient) {
            (_a = Exceptionless.client.createLog(projectName, message, logLevel)).addTags.apply(_a, tags).submit();
        }
        else {
            console.log("A log cannot be created as a client doesnt exist.");
        }
        var _a;
    };
    return Exceptionless;
}());
exports.Exceptionless = Exceptionless;
