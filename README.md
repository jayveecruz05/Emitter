# Emitter

# Setup Tutorial

# Import Custom Emitter
const emitter = require('./emitter');

# Custom Emit Listener
emitter.on('greet', function() { <br/>
&nbsp;&nbsp;&nbsp;&nbsp;console.log('Hello World!'); <br/>
});

# Custom Emit Off
emitter.off('greet');

# Custom Execute Emitter
emitter.emit('greet');
