var Actor = require('./actor');

function StepActor(level, data) {
  Actor.call(this, level, data);
  console.log('step', this.radius);

  // Determine material being stepped on. Play a sound for it.
  // Determine the mask and sprite that.
};

StepActor.prototype = Object.create( Actor.prototype );
StepActor.prototype.constructor = StepActor;

StepActor.prototype.destroy = function() {
  Actor.prototype.destroy.call(this);
  console.log('step destroy');
};

Actor.register('step', function(level, data) {
  return new StepActor(level, data);
});
