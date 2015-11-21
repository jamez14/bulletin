'use strict';

import Notify from './notify';
import Ask from './ask';
import ElementCount from './elementCount';

var defaults = {
  duration: 1500,
  someProp: 'james'
};

var Bulletin = function(color, message, title, options) {
  this.settings = Object.assign(defaults, options);
  this.message = message;
  this.title = title;
  this.color = color;

  var bulletinCount = ElementCount.get();
  if (!bulletinCount) {
    bulletinCount = 0;
  }

  if (bulletinCount === 0) {
    // build container
    this.bulletinOuter = document.createElement('div');
    this.bulletinOuter.className = 'bulletin-container';

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.bulletinOuter);
  } else {
    this.bulletinOuter = document.querySelector('.bulletin-container');
  }

  return this;
};

Bulletin.prototype.ask = function() {
  Ask(this.color, this.message, this.title, this.settings, this.bulletinOuter);
};

Bulletin.prototype.notify = function() {
  Notify(this.color, this.message, this.title, this.settings, this.bulletinOuter);
};

export default Bulletin;
