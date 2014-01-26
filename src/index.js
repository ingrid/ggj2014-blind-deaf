// Load actor types so that they register.
require('./actor.player');
require('./actor.step');

// Load the level constructor.
var Level = require('./level');
window.Level = Level;

Level.preload('level0');

// Dynamically resize canvas
var renderer = require('./renderer');
function resize() {
  renderer().resize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', resize);

window.addEventListener('load', function() {
  resize();

  // Create the first level.
  new Level('level0');

  console.log('load level0');
});
