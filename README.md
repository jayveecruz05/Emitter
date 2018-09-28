# Emitter

# Setup Tutorial

# Import Custom Emitter
const emitter = require('./emitter');

# Custom Emit Listener
emitter.on('greet', function() {
    console.log('Hello World!');
});

# Custom Emit Off
emitter.off('greet');

# Custom Execute Emitter
emitter.emit('greet');
