# Emitter

# Setup Tutorial

# Import Custom Emitter
const emitter = require('./emitter');

# Custom Emit Listener
emitter.on('greet', function() {/n
    console.log('Hello World!');/n
});

# Custom Emit Off
emitter.off('greet');

# Custom Execute Emitter
emitter.emit('greet');
