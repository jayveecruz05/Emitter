'use strict';

// Emitter
var emitter = (function () {
    var eventList = {},
    
        onEvent = function(name, method) {
            // console.log(name, method);
            eventList[name] = eventList[name] || [];
            eventList[name].push(method);
        },

        emitEvent = function(name, data) {
            // console.log(name, data);
            if (eventList[name] != undefined) {
                for (var i = 0; i < eventList[name].length; i++) {
                    eventList[name][i](data);
                }
            }
        }

    return {
        on: onEvent,
        emit: emitEvent
    }
}());

// Use module.export to export the .js files
module.exports = emitter;