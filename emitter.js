'use strict';

// Emitter
var emitter = (function () {
    var eventList = {},

        onEvent = function(name, method) {
            // console.log(name, method);
            eventList[name] = eventList[name] || [];
            eventList[name].push(method);
        },

        offEvent = function(name) {
            // console.log(name);
            if (name) {
                if (eventList[name]) {
                    delete eventList[name];
                }
            } else {
                eventList = {};
            }
        },

        emitEvent = function(name, data) {
            // console.log(name, data);
            if (eventList[name]) {
                for (var i = 0; i < eventList[name].length; i++) {
                    eventList[name][i](data);
                }
            }
        }

    return {
        on: onEvent,
        off: offEvent,
        emit: emitEvent
    }
}());

// Setup Tutorial
// Import Custom Emitter
// const emitter = require('./emitter');

// Custom Emit Listener
// emitter.on('greet', function() {
//     console.log('Hello World!');
// });

// Custom Emit Off
// emitter.off('greet');

// Custom Execute Emitter
// emitter.emit('greet');

// Use module.export to export the .js files
module.exports = emitter;
