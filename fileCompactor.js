const fs = require('fs');
const es = require('event-stream');
const Utils = require ('../xtend-libs/utils');
const path = require('path');
const LOG_DIR = path.resolve(__dirname);

var fileCompacter = async function () {
    console.log(LOG_DIR);
    var p = await Utils.execCmdExecutor ('dir' , Infinity);
    console.log('[output] = ', p);
}

fileCompacter();



