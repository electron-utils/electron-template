'use strict';

const platform = require('electron-platform');

let tmpl;

if ( platform.isMainProcess ) {
  tmpl = require('./lib/main');
} else {
  tmpl = require('./lib/renderer/index');
}

// ==========================
// exports
// ==========================

module.exports = tmpl;
